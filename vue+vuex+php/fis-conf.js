/**
 * do平台重构 fis3 config
 *
 */
/******** 设置项目的打包规则以及发布到远端机器的配置********/
var packConfig = require('./fis-conf/pack.js');
var deployConfig = require('./fis-conf/deploy-config.js');

/******** 设置项目使用smarty模板，命名空间以及project.static变量名称********/
fis.require('smarty')(fis);
fis.set('namespace', 'do');
fis.set('project.static', '/static');

/******** 设置项目上传中被过滤的文件********/
fis.set('project.ignore', [
    'fis-conf.js',
    'README.md'
]);

/******** 模块化方案modjs commonJS规范********/
fis.hook('module', {
    mode: 'commonJS'
});

/******** 设置模块的id名称，这样可直接引用********/
fis.match('/(**.{js,es6,jsx})', {
    moduleId: 'do:$1'
});

//------ 设置对es6和less的处理loader-----
// es6
fis.match('*.{es6,jsx}', {
    parser: fis.plugin('babel'),
    useHash: true,
    isMod: true,
    rExt: '.js'
});
fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less')
});

// ------ 配置components（公共组件） release 规则-------
fis.match('/components/**', {
    release: '${project.static}/${namespace}/$&'
});
fis.match('/components/**.css', {
    isMod: true,
    release: '${project.static}/${namespace}/$&'
});
fis.match('/components/**.js', {
    isMod: true,
    release: '${project.static}/${namespace}/$&'
});
fis.match('/components/**.png', {
    isMod: true,
    release: '${project.static}/${namespace}/$&'
});

// ------ 配置static中的函数库 release 规则-------

// vue
fis.match('/static/libs/vue/**', {
    isMod: true,
    release: '${project.static}/${namespace}/$&'
});
// bootstrap
fis.match('/static/libs/bootstrap/**', {
    isMod: true,
    release: '${project.static}/${namespace}/$&'
});
// jquery
fis.match('/static/libs/jquery/**', {
    isMod: true,
    release: '${project.static}/${namespace}/$&'
});
// utils
fis.match('/static/utils/**', {
    isMod: true,
    release: '${project.static}/${namespace}/$&'
});

//------ 对所有文件进行打包处理 ------
fis.match('::package', {
    packager: fis.plugin('map', packConfig)
});

// 命名空间  做不同处理
fis.media('prd')
    .match('**.{es6,jsx,js}', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('**.{scss,css}', {
        optimizer: fis.plugin('clean-css')
    })
    .match('*.png', {
        // fis-optimizer-png-compressor 插件进行压缩，已内置
        optimizer: fis.plugin('png-compressor')
    });

// ------- 部署depoly-------
devDeploy();

function devDeploy() {

    function push(RD, to) {
        return fis.plugin('http-push', {
            receiver: RD.receiver,
            to: RD.root + to
        });
    }

    for (var k in deployConfig) {
        var RD = deployConfig[k];
        fis.media(k)
            .match('${namespace}-map.json', {
                deploy: push(RD, 'data/smarty')
            })
            .match('plugin/**', {
                deploy: push(RD, 'php/phplib/ext/smarty')
            })
            .match('*.tpl', {
                deploy: push(RD, '')
            })
            .match('widget/**/*.{less,scss,css,js,es6,jsx,png}', {
                deploy: push(RD, 'webroot')
            })
            .match('components/(**)', {
                deploy: push(RD, 'webroot')
            })
            .match('static/(**)', {
                deploy: push(RD, 'webroot')
            })
            .match('pkg/**', {
                deploy: push(RD, 'webroot')
            })
            .match('config/(**)', {
                deploy: push(RD, 'data/smarty')
            })
    }
}
