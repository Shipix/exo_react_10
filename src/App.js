import React, { Component } from 'react'
import './style.css';
export default class App extends Component {
  up = ()=>{
    document.querySelector(".nume").innerHTML = Number(document.querySelector(".nume").innerHTML) + 1;

  }

  down = ()=>{
    document.querySelector(".nume").innerHTML = Number(document.querySelector(".nume").innerHTML) - 1;

  }
  laclass=()=>{

    if(document.querySelector("p").classList.contains("laDal")){

      document.querySelector("p").classList.remove("laDal");
    }else{
      document.querySelector("p").classList.add("laDal");
    }
  }
  render() {
    return (
      <div>
        <h1>Exo plus ou moins</h1>
        <span className="nume"></span>
        <button onClick={this.up}>PLUS</button>
        <button onClick={this.down}>MOINS</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corrupti ipsam ea vitae sint! Laboriosam soluta autem dolorum eligendi quisquam eos, nesciunt vel tempore! Cum corporis reiciendis aliquam reprehenderit obcaecati.</p>
        <button onClick={this.laclass}>CLASS</button>
      </div>
    )
  }
}
