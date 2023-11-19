const express = require('express');
const ContactControllerJOIN = require('./app/Controllers/ContactControllerJOIN');
const ContactControllerUser = require('./app/Controllers/ControllerUsers/ContactControllerUser');
const ContactControllerAdresses = require('../src/app/Controllers/ControllerAddresses/ContactControllerAddresses');
const ContactControllerEmail = require('./app/Controllers/ControllerEmail/ContactControllerEmail')
const router = express.Router();

router.get('/users', ContactControllerUser.indexUser);
router.get('/users/:id', ContactControllerUser.indexID);
router.post('/users', ContactControllerUser.CreateUser);
router.put('/users', ContactControllerUser.UpdateUser);
router.delete('/users/:id', ContactControllerUser.DeleteUser);

router.get('/eddresses', ContactControllerAdresses.FindALL);
router.get('/eddresses/:id', ContactControllerAdresses.FindID);
router.post('/eddresses', ContactControllerAdresses.Create);
router.put('/eddresses',ContactControllerAdresses.Update)
router.delete('/eddresses/:id', ContactControllerAdresses.Delete);

router.get('/email', ContactControllerEmail.FindEmail);
router.post('/email', ContactControllerEmail.Create);

router.get('/user/eddressess/email', ContactControllerJOIN.FindALL);
router.get('/user/eddressess/emails/:id', ContactControllerJOIN.FindID);
router.get('/user/eddressess', ContactControllerJOIN.UsersEdresses)
router.get('/user/emails/:id', ContactControllerJOIN.UsersEmail)

module.exports = router;    