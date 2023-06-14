const server = require('./app')
const {conn} = require('./db')
const PORT = process.env.PORT

conn.sync({force: false}).then(() => {
    server.listen(PORT, () => {
        console.log((`El servidor esta funcionando en el puerto ${PORT}`));
    })
})