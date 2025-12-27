const logger = (req, res, next) => {
    console.log(`request received: ${req.method} on the route ${req.originalUrl}`)
    next()
}
module.exports = logger