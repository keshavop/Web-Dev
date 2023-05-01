import { useState } from "react";

function State() {
    const [car,setCar] = useState("lambo")
  return <div>
    <h1>My fav car is {car}</h1>
    <img src="{car}" alt="" height="200px" />
    <button onClick={()=>setCar("supra")}>Change Car</button>
  </div>;
}

export default State;
