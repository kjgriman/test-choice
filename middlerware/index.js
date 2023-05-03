var createError = require('http-errors')

module.exports.handlerError404 = (req, res, next) => {
    next(createError(404))
}

module.exports.handlerErrorGeneral = (err, req, res) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') == 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
}
