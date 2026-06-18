import React from 'react'

const Weather = () => {
  const temp = 26;

  if (temp < 20) {
    return <h1>It's cold outside</h1>;
  } else if (temp >= 20 && temp <= 30) {
    return <h1>It's nice outside</h1>;
  } else {
    return <h1>It's hot outside</h1>;
  }
}

export default Weather