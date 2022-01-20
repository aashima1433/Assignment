import Joi from 'joi';
import User from '../models/user';
import bcrypt from 'bcrypt';
import JwtService from '../services/JwtService';



const loginController = {
    async login(req, res, next) {
        // Validation
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        });
        const { error } = loginSchema.validate(req.body);

        if (error) {
            return next(error);
        }


    },

   
}

export default loginController;