import React from "react";

function App() {
  let x = new Date().toLocaleTimeString();

  const [time, setTime] = React.useState(x);

  function getTime() {
    let y = new Date().toLocaleTimeString();
    setTime(y);
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
