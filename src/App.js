import { useState } from "react";
import "./App.css";
import { Landing } from "./Component/HomePage/LandingPage/Landing";
const users = [
  { name: "aamer", age: 52 },
  { name: "sam", age: 53 },
  { name: "mazhar", age: 54 },
  { name: "rabe", age: 55 },
  { name: "rehan", age: 56 },
  { name: "khwaja", age: 57 },
];
function App() {
  const [userDetails, setUserDetails] = useState(users);
  const removePersonAge = (index) => {
    const newUserData = [...userDetails];
    newUserData.splice(index, 1);
    setUserDetails(newUserData);
  };
  return (
    <div>
      <div className="App">
        <Landing />
      </div>
      <div>
        {userDetails.map((items, index) => {
          return (
            <ul>
              <li>{items.name}</li>
              <li onClick={removePersonAge}>{items.age}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
