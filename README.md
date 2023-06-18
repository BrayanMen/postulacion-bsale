<h1>Postulacion-bsale</h1>

<h2>Check-In Aerolinea</h2>
 <p>
 Este proyecto es una simulación de check-in automático para una aerolínea, que asigna asientos a los pasajeros basándose en ciertas reglas y restricciones. La solución se implementa como una API REST y se conecta a una base de datos MySQL para obtener los datos necesarios.
 </p>

 <h3>Tecnologias que se Usaron</h3>
 <ul>
   <li>Javascript</li>
   <li>NodeJs</li>
   <li>ExpressJs</li>
   <li>Sequelize</li>
   <li>mysql2</li>   
 </ul>

 <h3>Reglas</h3>
 <p>La solución del desafío debe cumplir con las siguientes reglas:</p>

<ol>
  <li>Los asientos deben ser asignados secuencialmente, comenzando desde el asiento número 1.</li>
  <li>Los pasajeros adultos (mayores de 18 años) deben ser asignados en función de su tipo de asiento:</li>
  <ul>
    <li>Orden por clases de Asiento: Los pasajeros deben ser asignados a asientos segun su clase en orden secuencial.</li>
  </ul>
  <li>Los pasajeros menores de edad (menores de 18 años) deben ser asignados a asientos contiguos a sus acompañantes adultos, según las siguientes condiciones:</li>
  <ul>
    <li>Si el asiento de un acompañante adulto está ocupado, se asigna al menor de edad el siguiente asiento disponible contiguo a su acompañante en la misma clase.</li>
    <li>Si no hay asientos disponibles contiguos a su acompañante en la misma clase, se asigna al menor de edad el siguiente asiento disponible en la misma clase.</li>
  </ul>
 <li>Si un pasajero tiene varias tarjetas de embarque, tratar de que queden juntas o cerca en los asientos.</li>
 <li>Los campos en la bd están llamados en Snake case, pero en la respuesta de la API deben ser transformados a Camel case.</li>
 <li>El servicio debe tener la siguiente estructura:</li>
 <ul>
  <li><code>GET /flights/:id/passengers</code></li>
 </ul>
 <li>Respuesta Exitosa:</li>
 <ul>
  <li><code>
   {
    "code": 200,
    "data": {
        "flightId": 1,
        "takeoffDateTime": 1688207580,
        "takeoffAirport": "Aeropuerto Internacional Arturo Merino Benitez, Chile",
        "landingDateTime": 1688221980,
        "landingAirport": "Aeropuerto Internacional Jorge Cháve, Perú",
        "airplaneId": 1,
        "passengers": [
            {
                "passengerId": 98,
                "dni": 172426876,
                "name": "Abril",
                "age": 28,
                "country": "Chile",
                "boardingPassId": 496,
                "purchaseId": 3,
                "seatTypeId": 3,
                "seatId": 15
            },
            {...}
        ]
    }
} 
  </code></li>
 </ul>
 <li>Vuelo no encontrado:</li>
 <ul>
  <li><code>
   {
"code": 404,
"data": {}
}
  </code></li>
 </ul>
 <li>Caso de Error:</li>
 <ul>
  <li><code>
   {
"code": 400,
"errors": "could not connect to db"
}
  </code></li>
 </ul>
</ol>
