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
<br>

<h2>Como Inicializar la API</h2>

<p>Esta API proporciona un servicio para simular el check-in de pasajeros de una aerolínea. Permite consultar la simulación de check-in para un vuelo específico mediante el uso de un endpoint.</p>

<h3>ENDPOINT</h3>

<code>GET /flights/:id/passengers</code>
<p>Donde :id representa el ID del vuelo para el cual se desea obtener la simulación del check-in.</p>

<h2>Uso de la API</h2>
Realiza una solicitud GET al endpoint de la API, especificando el ID del vuelo en la URL. Por ejemplo:

<code>
https://postulacion-bsale-test.up.railway.app/flight/1/passengers
</code>

<p>La API responderá con la simulación del check-in para el vuelo solicitado en formato JSON. La respuesta seguirá la siguiente estructura:</p>


 <code>
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
        "passengerId": 90,
        "dni": 983834822,
        "name": "Marisol",
        "age": 44,
        "country": "México",
        "boardingPassId": 24,
        "purchaseId": 47,
        "seatTypeId": 1,
        "seatId": 1
      },
      ...
    ]
  }
}
</code>

<p>
Analiza la respuesta de la API para obtener la información deseada. En este caso, la simulación del check-in contiene detalles del vuelo, como la fecha y hora de salida, aeropuertos de salida y llegada, ID del avión, y la lista de pasajeros con sus respectivos detalles, incluyendo ID del pasajero, DNI, nombre, edad, país, ID de la tarjeta de embarque, ID de la compra, tipo de asiento y número de asiento asignado.
</p>
<p>Utiliza los datos de la simulación del check-in según sea necesario para realizar las acciones correspondientes.</p>

<h2>Consideraciones</h2>
<h3>Asegúrate de reemplazar :id en la URL del endpoint con el ID real del vuelo que deseas consultar.</h3>

<h2>Explicacion</h2>
<ul>
<li>Se intalan dependencias necesarias para configurar los archivos<code>npm i express sequelize mysql2 morgan cookie-parses body-parser cors </code></li>
<li>Se configuranron los archivos que son los puntos de entrada para que el servidor funciones de forma optima, tales como "index.js" el cual va a iniciar el servidor y quedarse escuchando la peticiones que se hagan, el archivo "app.js" donde configure el servidor de express, los middleware, rutas y manejo de errores.</li>
  <li>Configuro el servidor de express en App.js</li>
  <li>Creo las carpetas y archivos necesarios para el uso de la app: Modelos, Rutas, Controlador</li>
  <li>Configuro la base de datos con sequelize, configuro la conexion de la misma y verifico su correcto funcionamiento, hago las relaciones de los modelos</li>
  <li>Configuro y verifico que el servidor este escuchando correctamente los llamados</li>
  <li>En la carpetas de rutas declaro una ruta '/' de prueba para probar de forma local su funcionamiento y luego la ruta que sera utilizada para el check.in</li>
  <li>Comienzo a trabajar en los controladores y creo un carpeta auxiliar para modularizar todo y de hay extraer funciones que me ayuden en el codigo</li>
  <li>En el archivo controller.js realizo una ruta controladora para las consultas a la base de datos y asi manejar los datos recibidos y entregar la respuesta solicitadas.</li>
  <li>En este archivo tengo importados los archivos de la base de datos los cuales manejare para las consultas y el archivo seatAssing que me prestara funciones que se encargaran de los requerimiento</li>
  <li>Como la ruta se maneja por los id que contenga la tabla Flight, hago un busqueda por parametros donde pueda extraer el ID solicitado, una vez solicitado incluyo los modelos necesarios para traer los datos solicitados y un poco mas en caso de que quiera modelar otra ruta o generar distintas logicas para el check-in</li>
  <li>Luego hacer la consulta a Flight y obtener los datos que necesito hago las condicional requerida en caso de que el id no exista, luego llamo a la funcion que asignara los asientos y la paso los parametros requeridos, para finalizar envio la data con la estructura solicitada incluyendo la respuesta en caso de error</li>
  <li>En el archivo de seatAssing es donde esta toda la logica para el manejo de los asientos la cual contiene un funcion llamada de la misma manera que tiene dos parametros de los cuales se sacaran los datos para asignar los asientos</li>
  <li>Comezamos creando un variable con 3 claves que son 3 array vacios en los cuales vamos a introducir los pasajeros segun su tipo de tarjeta de embarque</li>
  <li>Luego cree dos variables donde filtre los pasajeros segun su edad (Adultos y menores de edad)</li>
  <li>Inicie un variable que me funcionara como contador y representara el proximo asiento disponible</li>
  <li> Recorro las variables que tiene los pasajeros segun su edad y voy asignandole los asientos utilizando una funcion auxiliar y creo un objeto con la data que debo enviar, agrego el pasajero en el array segun su tipo de asiento y continua en al siguiente incrementado el contador</li>
  <li>Se crea una variable Passenger que es un array con la data que se recolecto, y se retorna</li>
  <li>La función getSeatType se encarga de retornar el tipo de asiento correspondiente a partir del ID del tipo de asiento.</li>
  <li>La función findNextSeat busca el siguiente número de asiento disponible en un array de asientos asignados. Ordena los asientos de forma ascendente y devuelve el primer número de asiento que no esté ocupado.</li>  
</ul>
