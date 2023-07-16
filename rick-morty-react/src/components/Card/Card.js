import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardDetails from "./CardDetails";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, status,species,location,gender } = x;

      return (
        
          <tbody>
            <tr key={id} style={{"border": "1px solid black"}}>
            <td style={{"border": "1px solid black"}}>{id}</td>
            <td style={{"border": "1px solid black"}}>{name}</td>
            <td style={{"border": "1px solid black"}}>{status}</td>
            <td style={{"border": "1px solid black"}}>{species}</td>
            <td style={{"border": "1px solid black"}}>{location.name}</td>
            <td style={{"border": "1px solid black"}}>{gender}</td>
        </tr>
          </tbody>
        
        );
            });
          } else {
            display = "No Characters Found :/";
          }
          
          return <table style={{"border": "1px solid black","table-layout": "fixed","cellpadding":"10","text-align": "left","border-collapse": "collapse","padding-top": "10px","padding-bottom": "20px","padding-left": "30px","padding-right": "40px"}}>
          <thead>
            <tr style={{"border": "1px solid black"}}>
              <th style={{"border": "1px solid black"}}>ID</th>
              <th style={{"border": "1px solid black"}}>Name</th>
              <th style={{"border": "1px solid black"}}>Status</th>
              <th style={{"border": "1px solid black"}}>Species</th>
              <th style={{"border": "1px solid black"}}>Location</th> 
              <th style={{"border": "1px solid black"}}>Gender</th> 
            </tr>
          </thead>{display};
          </table>
        };

export default Card;
