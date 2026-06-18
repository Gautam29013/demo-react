import React from 'react'

const weather = () => {
    let temp = 26;


  if(temp < 20){
    return <h1>It's cold outside</h1>
  } else if(temp >= 20 && temp <= 30){
    return <h1>It's nice outside</h1>
  } else {
    return <h1>It's hot outside</h1>
  }
}

export default weather