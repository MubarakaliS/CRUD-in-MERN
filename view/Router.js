const express=require('express');
const userController=require('../Controller/UserController')
const router=express.Router();

router.post('/addUser',userController.createUser);
router.get('/',userController.getAllUsers);
router.get('/:id',userController.getUserById);
router.put('/updateUser/:id',userController.updateUser);
router.delete('/delete/:id',userController.deleteSingleUser)
module.exports=router