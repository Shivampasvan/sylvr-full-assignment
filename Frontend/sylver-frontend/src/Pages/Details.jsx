import React from "react";

const Details = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  
  return <div>
    <h1>
        details
    </h1>
  </div>;
};

export default Details;
