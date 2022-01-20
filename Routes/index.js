import express from 'express'
const router = express.Router();
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';
import queController from '../controllers/queController';


router.post('/register',registerController.register)
router.post('/login',loginController.login)
router.post('/addquestion/:id',queController.postque)


export default router