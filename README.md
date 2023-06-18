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
</ol>
