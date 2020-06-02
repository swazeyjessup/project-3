import React from "react";

function Quotes() {

    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        
      return response.json();
      console.log(response.json);
    })
    .then(function(data) {
        
      console.log(data);
      
    });

    

  return (
      <div>
          {
                     
          }
      </div>
  )

}

export default Quotes 