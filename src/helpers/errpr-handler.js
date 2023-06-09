const errorHandler = (err, req, res, next) => {

    if (typeof err === "string") {
        return res.status(400).json({ message: err })
    }

    if (err.name === "UnauthorizedError") {
        return res.status(401).json({ message: "Invalid the token" })
    }

    return res.status(500).json({ message: err.message })

}

module.exports = errorHandler