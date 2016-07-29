export default {
    getUrlParams: function() {
        var qs = (location.search.length > 0 ? location.search.substring(1) : "");
        var params = {};
        var items = qs.length ? qs.split("&") : [];
        var item = null;
        var name = null;
        var value = null;
        for (var i = 0, len = items.length; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                params[name] = value;
            }
        }
        return params;
    },
    addURLParam: function(url, name, value) {
        url += (url.indexOf("?") === -1 ? "?" : "&");
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        return url;
    },
    addURLParams: function(url, params) {
        var self = this
        Object.keys(params).forEach(function(key) {
            url = self.addURLParam(url, key, params[key])
        })
        return url
    }
}