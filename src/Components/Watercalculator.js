// import React from 'react'
// import { useState } from "react";
// import ConsumptionForm from './consumptionForm';
// import ConsumptionList from './consumptionList';
// import Navbar from './Navbar';



// const [consumptions, setConsumptions] = useState([]);

//     const addConsumption = (value) => {
//       setConsumptions([...consumptions, value]);
//     };

// export default function Watercalculator() {
  
//     return (
//       <div>
//         <Navbar />
//         <ConsumptionForm addConsumption={addConsumption} />
//         <ConsumptionList consumptions={consumptions} />
//       </div>
//     );
//   };


import React, { useState } from 'react';
import ConsumptionForm from './consumptionForm';
import ConsumptionList from './consumptionList';


export default function Watercalculator() {
  const [consumptions, setConsumptions] = useState([]);

  const addConsumption = (value) => {
    setConsumptions([...consumptions, value]);
  };

  return (
    <div>
      <ConsumptionForm addConsumption={addConsumption} />
      <ConsumptionList consumptions={consumptions} />
    </div>
  );
}







