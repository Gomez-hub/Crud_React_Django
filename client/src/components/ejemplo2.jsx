import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


export function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  useEffect(() => {
           respuesta()                     
        })
     
        
        const respuesta= () =>{
            fetch('tasks/api/v1/tasks/')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(console.log('error')
            )
                } 
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