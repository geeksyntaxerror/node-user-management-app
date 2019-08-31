module.exports = (app)=>{
    const userController = require('../controllers/user.controller.js');

    app.post('/Adduser',userController.createUser);

    app.get('/users', userController.getUsers);

    app.get('/user/:userId',userController.getUser);

    app.put('/updateUser/:userId',userController.updateUser);

    app.delete('/delete/:userId',userController.deleteUser);
}