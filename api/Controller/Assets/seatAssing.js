async function seatAssign(boardingPasses, flight) {
    const seatAssignments = {
        'Primera clase': [],
        'Clase económica premium': [],
        'Clase económica': []
    };

    const adults = boardingPasses.filter(pass => pass.passenger.age >= 18);
    const minors = boardingPasses.filter(pass => pass.passenger.age < 18);

    let nextSeatNumber = 1;

    for (const passenger of adults) {
        const seatType = getSeatType(passenger.seat_type_id);

        const seatAssignment = {
            passengerId: passenger.passenger.passenger_id,
            dni: passenger.passenger.dni,
            name: passenger.passenger.name,
            age: passenger.passenger.age,
            country: passenger.passenger.country,
            boardingPassId: passenger.boarding_pass_id,
            purchaseId: passenger.purchase_id,
            seatTypeId: passenger.seat_type_id,
            seatId: nextSeatNumber
        };

        seatAssignments[seatType].push(seatAssignment);

        nextSeatNumber++;
    }

    for (const passenger of minors) {
        const seatType = getSeatType(passenger.seat_type_id);

        if (seatAssignments[seatType].length === 0) {
            const seatAssignment = {
                passengerId: passenger.passenger.passenger_id,
                dni: passenger.passenger.dni,
                name: passenger.passenger.name,
                age: passenger.passenger.age,
                country: passenger.passenger.country,
                boardingPassId: flight.passenger.boarding_pass_id,
                purchaseId: flight.passenger.purchase_id,
                seatTypeId: flight.passenger.seat_type_id,
                seatId: nextSeatNumber
            };

            seatAssignments[seatType].push(seatAssignment);

            nextSeatNumber++;
        } else {
            const nextSeat = findNextSeat(seatAssignments[seatType]);

            const seatAssignment = {
                passengerId: passenger.passenger.passenger_id,
                dni: passenger.passenger.dni,
                name: passenger.passenger.name,
                age: passenger.passenger.age,
                country: passenger.passenger.country,
                boardingPassId: passenger.boarding_pass_id,
                purchaseId: passenger.purchase_id,
                seatTypeId: passenger.seat_type_id,
                seatId: nextSeat
            };

            seatAssignments[seatType].push(seatAssignment);
        }
    }

    const passengers = Object.values(seatAssignments).flat();
    return passengers
}

function getSeatType(id) {
    if (id === 1) {
        return 'Primera clase';
    } else if (id === 2) {
        return 'Clase económica premium';
    } else if (id === 3) {
        return 'Clase económica';
    } else {
        return '';
    }
}


function findNextSeat(seats) {
    const sortedSeats = seats.slice().sort((a, b) => a.seatId - b.seatId);
    let nextSeat = 1;

    for (const seat of sortedSeats) {
        if (seat.seatId !== nextSeat) {
            return nextSeat;
        }
        nextSeat++;
    }

    return nextSeat;
}

module.exports = seatAssign;  