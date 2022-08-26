import React, { useState } from "react";

function Sou() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(true);
  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div className="Sou">
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </div>
  );
}

export default Sou;
