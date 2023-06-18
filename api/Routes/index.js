const { Router } = require('express');
const router = Router();
const controller = require('../Controller/controller')
const { Flight } = require('../db')

//Verifico me traiga la data de la base de Datos
router.get('/', (req, res, next) => {
    try{
     return res.status(200).send('Bienvenido');
    } catch (error) {
      console.error(error);
    }
});


router.use('/flight', controller)

module.exports = router;