import express from 'express'
const router = express.Router();
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';



router.post('/register',registerController.register)
router.post('/login',loginController.login)
router.post('/addquestion/:id',auth,queController.postque)


export default router