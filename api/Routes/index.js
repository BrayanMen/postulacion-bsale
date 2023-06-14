const { Router } = require('express');
const router = Router();

router.get('/prueba', async (req, res, next) => {
    res.send('Todo funciona perfectamente')
});

router.use('/');

module.exports = router;