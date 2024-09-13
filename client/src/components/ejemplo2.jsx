import { useState, useEffect, React } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

const BaseURL = 'http://127.0.0.1:8000/tasks/api/v1/tasks/'

export function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");


  return (
    <>
        <thead className="estilo">
            <tr>
                <th scope="col"><h1>My {brand}</h1></th>
                <th scope="col">none</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><p>It is a {color} {model} from {year}.</p></th>
                <th scope="row"><p>It is a {color} {model} from {year}.</p></th>
            </tr>
        </tbody>
        <table>
        <thead className="estilo">
            <tr>
                <th scope="col"><h1>My {brand}</h1></th>
                <th scope="col">none</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><p>It is a {color} {model} from {year}.</p></th>
                <th scope="row"><p>It is a {color} {model} from {year}.</p></th>
            </tr>
        </tbody>  
        </table>

        
   
    </>
  )
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Car />);