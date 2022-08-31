import { useState } from "react";

function Cap() {
  const [data, SetData] = useState("Sourav");
  function updateData() {
    SetData("Pandit" );
    alert(data);
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default Cap;
