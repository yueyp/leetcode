function jsonp(url, cb, success) {
    let script = document.createElement('script')
    script.async = true
    script.type = 'text/javascript'
    script.src = url
    window[cb] = function (data) {
        success && success(data)
    }
    document.body.appendChild(script)
}
