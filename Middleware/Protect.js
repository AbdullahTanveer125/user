const jwt = require('jsonwebtoken')
// const asyncHandler = require('express-async-handler')
const user_model = require('../Model/user_model')

async function protect(req, res, next) {
    let token;



    // ************* req.headers.authorization mey kya hai ***********************
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get token from header
            
            console.log("**Before Token (req.headers.authorization):",req.headers.authorization);

            token = req.headers.authorization.split(' ')[1]
            console.log("                                        ***** Token:",token);
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log("                                ***** decoded:",decoded);
            // *********************** decoded mey kya store ho ga ***********************
            
            
            // Get user from the token
            req.user = await user_model.findById(decoded.id).select('-password')//password wali field select ni ho gi

            next()
        } catch (error) {
            console.log(error)
            res.status(401).send("******** Not authorized ****************");
            console.log("******** Catch   AAAAAAAAAAAA ****************");
            
            // res.status(401)
            // throw new Error('Not authorized')
        }
    }

    if (!token) {
        res.status(401).send("******** Not authorized, no token ****************");
        // console.log("******** If    AAAAAAAAAAAA ****************");
        // throw new Error('Not authorized, no token')
    }
}

module.exports = { protect }