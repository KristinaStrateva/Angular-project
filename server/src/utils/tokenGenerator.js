const jwt = require('../lib/jwt');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const accessTokenGenerator = async (user) => {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };

    const token = await jwt.sign({ UserInfo: payload }, ACCESS_TOKEN_SECRET, { expiresIn: '2d' });

    return token;
};

module.exports = {
    accessTokenGenerator,
}