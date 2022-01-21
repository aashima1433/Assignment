import express from 'express'
const router = express.Router();
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';
import queController from '../controllers/queController';
import voteController from '../controllers/voteController';
import ansController from '../controllers/ansController';
import auth from '../middleware/auth'

router.post('/register',registerController.register)
router.post('/login',loginController.login)
router.post('/addquestion/:id',auth,queController.postque)
router.post('/addanswer/:id/:userid',auth,ansController.postans)
router.put('/vote',auth, voteController.vote)
router.put('/updatequestion/:id',auth,queController.updateque)
router.get('/getque/:id',auth,queController.getque)
router.get('/showAllanswers/:id',auth,ansController.showallans)
router.get('/getall/:tag',auth,queController.getall)
router.get('/getallquebyuser/:id',auth,queController.getallquebyuser)
router.get('/pendinganswers/:id',auth,queController.pendingans)
router.get('/allquesans',auth,queController.allqueans)
router.put('/acceptanswer/:ansid',auth,ansController.acceptans)



export default router