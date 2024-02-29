import jwt from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]  
    console.log(token)
    if (!token)
        return res.status(401).json("You are not authenticated");
            jwt.verify(token, process.env.JWT, (err, user) => {
        if (err)
            return res.status(402).json("Token is not valid");
        req.user = user
        next();
    })
}


export const verifyTokenUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id !== req.params.id && req.user.isAdmin === false)
            return res.status(403).json("You are not authorized!");
        else
            next();
    })
}



export const verifyAdmine = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin === false)
            return res.status(403).json("You are not authorized!");
        else
            next();
    })
}