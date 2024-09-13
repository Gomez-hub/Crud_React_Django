import React, { useState } from "react";

export function Contador() {
    const [count, setCount] = useState(0); //estado inicial

    return (
        <div>
            <p>
                Has hecho click {count} veces
            </p>
            <button onClick={() =>
                setCount(count + 2)}>
                Incrementar
            </button>
        </div>
    )


}



