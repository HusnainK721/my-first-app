import "./App.css";
import { Header } from "./Component/HeaderSection/Header";
import { MainBody } from "./Component/BodySection/MainBody";
import AllForm from "./Component/FormComponent/AllForm";
function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <AllForm />
    </div>
  );
}

export default App;
