// validators.es6

export default {
    numeric(val) {
        return /^\d+(\.\d+)?$/.test(val)
    },
    naturalNumber(val) {
        val = Number(val)
        return val >= 0
    },
    lessh100(val) {
        val = Number(val)
        return val >= 0 && val <= 100
    },
    email(val) {
        let filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        return filter.test(val)
    }
}