const authGuards = (req, res, next) => {
    tokenReceived = req.headers['authorization']

    if (tokenReceived === 'muebles123'){
        req.user = {
            id: 1,
            rol: 'admin'
        }
        next()
    } else {
        res.status(401).json({msg: 'unauthorized access '})
    }
}

module.exports = authGuards