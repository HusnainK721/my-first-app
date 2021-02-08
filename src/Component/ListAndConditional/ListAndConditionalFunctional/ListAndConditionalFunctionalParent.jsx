// import React, { useState } from "react";
// import { ListAndConditionalFunctionalChild } from "./ListAndConditionalFunctionalChild";

// export const ListAndConditionalFunctionalParent = () => {
//   const [showPerson, setShowPerson] = useState(false);
//   const [personData, setPersonData] = useState({
//     person: [
//       { name: "Salman", age: 23 },
//       { name: "Khuddus", age: 24 },
//       { name: "Zeeshan", age: 25 },
//     ],
//   });
//   // this is switch name handler
//   const switchNameHandler = () => {
//     setPersonData({
//       person: [
//         { name: "Node", age: 23 },
//         { name: "Backend", age: 24 },
//         { name: "UI", age: 25 },
//       ],
//     });
//   };
//   const changeNameHandler = (e) => {
//     setPersonData({
//       person: [
//         { name: "UI", age: 23 },
//         { name: "Backend", age: 24 },
//         { name: e.target.value, age: 25 },
//       ],
//     });
//   };
//   const togglePersonHandler = () => {
//     setShowPerson(!showPerson);
//   };
//   return (
//     <div>
//       <button onClick={togglePersonHandler}>Click TO Change State 1</button>
//       {showPerson ? (
//         <div>
//           <ListAndConditionalFunctionalChild
//             name={personData.person[0].name}
//             age={personData.person[0].age}
//           />
//           <ListAndConditionalFunctionalChild
//             name={personData.person[1].name}
//             age={personData.person[1].age}
//           />
//           <ListAndConditionalFunctionalChild
//             name={personData.person[2].name}
//             age={personData.person[2].age}
//             change={changeNameHandler}
//           />
//           <button onClick={switchNameHandler}>Click TO Change State 2</button>
//         </div>
//       ) : null}
//     </div>
//   );
// };

//***Conditonal rendering in javaScript way***
import React, { useState } from "react";
import { ListAndConditionalFunctionalChild } from "./ListAndConditionalFunctionalChild";

export const ListAndConditionalFunctionalParent = () => {
  const [show, setShow] = useState();
  const [personData, setPersonData] = useState({
    person: [
      { name: "Salman", age: 23 },
      { name: "Khuddus", age: 24 },
      { name: "Zeeshan", age: 25 },
    ],
  });
  const switchNameHandler = () => {
    setPersonData({
      person: [
        { name: "Salman khan", age: 23 },
        { name: "Khuddus shaikh", age: 24 },
        { name: "Zeeshan gazi", age: 25 },
      ],
    });
  };
  const TogglePersonHandler = () => {
    const isShow = personData;
    setShow(!isShow);
  };
  let Person = null;
  if (show) {
    Person = (
      <div>
        <ListAndConditionalFunctionalChild
          name={personData.person[0].name}
          age={personData.person[0].age}
        />
        <ListAndConditionalFunctionalChild
          name={personData.person[1].name}
          age={personData.person[1].age}
        />
        <ListAndConditionalFunctionalChild
          name={personData.person[2].name}
          age={personData.person[2].age}
        />
        <button onClick={switchNameHandler}>change state</button>
      </div>
    );
  }
  return (
    <div>
      {Person}
      <button onClick={TogglePersonHandler}>
        Conditional Rendering In js way
      </button>
    </div>
  );
};
