const { Router } = require('express');
const router = Router();
const controller = require('../Controller/controller')
const { Flight } = require('../db')

//Verifico me traiga la data de la base de Datos
// router.get('/', (req, res, next) => {
//   const getFlights = async () => {
//     try {
//       const flight = await Flight.findAll();
//       res.status(200).send(flight);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   getFlights();
// });


router.use('/flight', controller)

module.exports = router;