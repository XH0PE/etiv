import React from 'react'
import { useState } from 'react';

function ShowHide() {
    const [Show, setShow] = useState(true);

    const handleClick = (event) => {
        setShow(!Show);
    };

  return (
    <div>
      <button onClick={handleClick}>{Show ? "Ocultar" : "Mostrar"} Texto</button>
      {Show && <h2>Escondeme !</h2>}

    </div>
  )
}

export default ShowHide
