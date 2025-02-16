import {BrowserRouter, Routes, Route} from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { Contador } from "./components/Ejemplo"
import { Car } from "./components/ejemplo2" 
import "./css/main.css"
import { App1 } from "./components/Ejemplo3" 


//axios consume una api

//esto son como las direcciones de paginas generadas por react

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/tasks" element = {< TasksPage />} />
          <Route path="/task" element = {< Contador />} />
          <Route path="/" element = {< Car />} />
          <Route path="/ejemplo" element = {< App1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;