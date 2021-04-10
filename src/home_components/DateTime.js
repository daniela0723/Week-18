import React, { useState, useEffect } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    //Display the current time with seconds
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h2>{date.toLocaleDateString()}</h2>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default DateTime;
