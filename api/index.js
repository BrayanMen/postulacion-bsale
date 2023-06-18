const server = require('./app')
const PORT = 80 || 3000;

server.listen(PORT, () => {
        console.log((`El servidor esta funcionando en el puerto ${PORT}`));
    })
;