const { getUser } = require('../utils/auth.js')

async function restrictToLoggedInUserOnly(req, res , next) {
    const userUid = req.cookies.uid;
    // console.log(userUid)

    if (!userUid) {
        return res.redirect("/login")
    }

    const user = getUser(userUid);

    if (!user) {
        return res.redirect("/login")
    }

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedInUserOnly,
}