import './App.css';
import {useEffect} from "react";

function App() {
  const callApi = async () => {
    const response = await fetch("http://localhost:5080/api");
    const data = await response.json();
    console.log(data, "Anybody one out there");
  };
  useEffect(() => {
    callApi();
  }, []);
  return <h1>Testar</h1>;
}
export default App;
