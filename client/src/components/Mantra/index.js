// import React, { useState, useEffect } from "react";
// import { Input } from "../Form";
// import API from "../../utils/API";

// function Mantra() {
//   const [mantras, setMantras] = useState([]);
//   const [formObject, setFormObject] = useState({});

//   useEffect(() => {
//     loadMantra();
//   }, []);

//   function loadMantra() {
//     API.getMantra()
//       .then((res) => setMantras(res.data))
//       .catch((err) => console.log(err));
//   }

//   // function handleInputChange(event) {
//   //   const { name, value } = event.target;
//   //   setFormObject({ ...formObject, [name]: value });
//   //   document.getElementById("mantraSubmit").value = "";
//   //   event.preventDefault();
//   //   if (formObject.mantra) {
//   //     API.updateMantra({
//   //       mantra: formObject.mantra,
//   //     })
//   //       .then((res) => loadMantra())
//   //       .catch((err) => console.log(err));
//   //   }
//   // }

//   return (
//     <div>
//       <Input
//         // onChange={handleInputChange}
//         name="mantra"
//         placeholder="Enter a mantra"
//         id="mantraSubmit"
//       />
//     </div>
//   );
// }

// export default Mantra;
