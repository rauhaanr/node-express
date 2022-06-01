function logger(req, res, next) {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next()
    // ALWAYS pass onto next middleware by using `next`
    // OR return middleware function's own response using `send`
}

module.exports.logger = logger;