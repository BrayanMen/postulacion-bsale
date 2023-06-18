const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

//Configuro Sequelize
const sequelize = new Sequelize('airline', 'bsale_test', 'bsale_test', {
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  dialect: 'mysql',
});
// ({
//   dialect: 'mysql',
//   host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
//   username: 'bsale_test',
//   password: 'bsale_test',
//   database: 'airline',
// });

async function conexionTest() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.log('Error:', error.message);
  }
}
conexionTest();


const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, './Models'))
  .filter((e) => (e.indexOf('.') !== 0) && (e !== basename) && (e.slice(-3) === '.js'))
  .forEach((e) => {
    modelDefiners.push(require(path.join(__dirname, './Models', e)))
  });

modelDefiners.forEach((model) => model(sequelize));

const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((e) => [e[0][0].toUpperCase() + e[0].slice(1), e[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//Defino las relaciones

const { Airplanes, Flight, Seat, SeatType, Purchase, Passenger, BoardingPass } = sequelize.models

BoardingPass.belongsTo(Purchase, { foreignKey: 'purchase_id' });
Purchase.hasMany(BoardingPass, { foreignKey: 'purchase_id' });

BoardingPass.belongsTo(Passenger, { foreignKey: 'passenger_id' });
Passenger.hasMany(BoardingPass, { foreignKey: 'passenger_id' });

BoardingPass.belongsTo(Seat, { foreignKey: 'seat_id' });
Seat.hasMany(BoardingPass, { foreignKey: 'seat_id' });

BoardingPass.belongsTo(SeatType, { foreignKey: 'seat_type_id' });
SeatType.hasMany(BoardingPass, { foreignKey: 'seat_type_id' });

BoardingPass.belongsTo(Flight, { foreignKey: 'flight_id' });
Flight.hasMany(BoardingPass, { foreignKey: 'flight_id' });

Flight.belongsTo(Airplanes, { foreignKey: 'airplane_id' });
Airplanes.hasMany(Flight, { foreignKey: 'airplane_id' });

Seat.belongsTo(Airplanes, { foreignKey: 'airplane_id' });
Airplanes.hasMany(Seat, { foreignKey: 'airplane_id' });

Seat.belongsTo(SeatType, { foreignKey: 'seat_type_id' });
SeatType.hasMany(Seat, { foreignKey: 'seat_type_id' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
}