import JwtService from '../services/jwtService';

const auth = async (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (!authHeader) {
        return next(new Error("unauthorized"));
    }

    const token = authHeader.split(' ')[1];

    try {
        const { _id } = await JwtService.verify(token);
        const user = {
            _id
        }
        req.user = user;
        next();

    } catch(err) {
        return next(new Error("UnAuthorized"));
    }

}

export default auth;