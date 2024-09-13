import { useState, useEffect, React } from "react";
import axios from "axios";

const BaseURL = 'http://127.0.0.1:8000/tasks/api/v1/tasks/'

export function App1(){
    const [post, setPost] = useState(null);
    const [seleccion, setSeleccion] = useState(null);
    

    useEffect(() => {
      axios.get(BaseURL).then((response) => {
        setPost(response.data);
        //console.log('response: ', JSON.stringify(response) );     
      });
    }, []);
  
    if (!post) return null;

    function handleSelect (seleccion)  {
        console.log('seleccion: ', seleccion);
    }
  
    return (
      <div>
        <table>
            <thead>
            {post.map((post) => (
            <tr key={post.id} >
              <td>{post.id}</td>
              <td style={{backgroundColor: post.id === seleccion ? 'green' : 'transparent'}} id="task">{post.title}</td>
              <td>{post.description}</td>
              <td>
                <button onClick={() => handleSelect(post.title)}>Select</button>
            </td>
            </tr>
          ))}       
            </thead>
        
        </table>
        

      </div>
    ); 
}