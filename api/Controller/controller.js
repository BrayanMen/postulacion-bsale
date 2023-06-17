const { Router } = require('express');
const router = Router();

const { Airplanes, Flight, Seat, SeatType, Purchase, Passenger, BoardingPass } = require('../db')

router.get('/:id/passengers', async (req, res, next) => {
    const { id } = req.params;
    try {
        const flight = await Flight.findByPk(id, {
            include: [
                {
                    model: BoardingPass,
                    include: [
                        {model: Passenger},
                    //     {model: Purchase},
                    //     {model: SeatType},
                    //     {model:Seat, include:[{model: Airplanes}]}
                    ]
                }
            ]
        });

        if(!flight) return res.status(404).json({code: 404, data:{}});

        const response = {
            code:200,
            data: {
                flightId: flight.flight_id,
                takeoffDateTime: flight.takeoff_date_time,
                takeoffAirport: flight.takeoff_airport,
                landingDateTime:flight.landing_date_time,
                landingAirport:flight.landing_airport,
                airplaneId:flight.airplane_id,
                passengers: flight.boardingPasses.map((e) =>({
                    passengerId:e.passenger_id,
                    dni: e.passenger.dni,
                    name: e.passenger.name,
                    age:e.passenger.age,
                    country: e.passenger.country,
                    boardingPassId: e.boarding_pass_id,
                    purchaseId: e.purchase_id,
                    seatTypeId: e.seat_type_id,
                    seatId:e.seat_id,
                }))
            }
        }
        return res.status(200).json({response})

    } catch (error) {
        return res.status(400).json({ code: 400, errors: 'could not connect to db' })
    }
})


module.exports = router;