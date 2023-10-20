import React from 'react'
import './assets/App.css';

export default function Produit(props) {
  return (
    <div className="container">
       <p>{props.name}</p>
    </div>
  )
}
