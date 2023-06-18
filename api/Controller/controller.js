const { Router } = require('express');
const router = Router();
const seatAssign = require('./Assets/seatAssing');

const { Airplanes, Flight, Seat, SeatType, Purchase, Passenger, BoardingPass } = require('../db');

router.get('/:id/passengers', async (req, res, next) => {
  const { id } = req.params;
  try {
    const flight = await Flight.findByPk(id, {
      include: [
        {
          model: BoardingPass,
          include: [
            { model: Passenger },
            { model: Purchase },
            { model: SeatType },
            { model: Seat, include: [{ model: Airplanes }] }
          ]
        }
      ]
    });

    if (!flight) return res.status(404).json({ code: 404, data: {} });

    const passengers = await seatAssign(flight.boardingPasses, flight);

    const data = {
      flightId: flight.flight_id,
      takeoffDateTime: flight.takeoff_date_time,
      takeoffAirport: flight.takeoff_airport,
      landingDateTime: flight.landing_date_time,
      landingAirport: flight.landing_airport,
      airplaneId: flight.airplane_id,
      passengers: passengers,
    };
    return res.status(200).json({ code: 200, data });

  } catch (error) {
    console.log(error);
    return res.status(400).json({ code: 400, errors: 'could not connect to db' });
  }
});

module.exports = router;