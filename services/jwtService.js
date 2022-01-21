import { JWT } from '../config';
import jwt from 'jsonwebtoken';

class JwtService {
    static sign(payload, expiry = '1y', secret = JWT) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }

    static verify(token, secret = JWT) {
        return jwt.verify(token, secret);
    }
}

export default JwtService;