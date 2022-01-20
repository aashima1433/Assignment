import express from 'express'
const router = express.Router();
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';
import queController from '../controllers/queController';
import voteController from '../controllers/voteController';
import ansController from '../controllers/ansController';

router.post('/register',registerController.register)
router.post('/login',loginController.login)
router.post('/addquestion/:id',queController.postque)
router.post('/addanswer/:id/:userid',ansController.postans)
router.put('/vote', voteController.vote)
router.put('/updatequestion/:id',queController.updateque)
router.get('/getque/:id',queController.getque)
router.get('/showAllanswers/:id',ansController.showallans)
router.get('/getall/:tag',queController.getall)
router.get('/getallquebyuser/:id',queController.getallquebyuser)
router.get('/pendingquestions/:id',queController.pendingque)

export default router