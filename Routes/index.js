import express from 'express'
const router = express.Router();
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';
import queController from '../controllers/queController';
import voteController from '../controllers/voteController'
import ansController from '../controllers/ansController'

router.post('/register',registerController.register)
router.post('/login',loginController.login)
router.post('/addquestion/:id',queController.postque)
router.post('/addanswer/:id/:userid',ansController.postans)
router.put('/vote', voteController.vote)
export default router