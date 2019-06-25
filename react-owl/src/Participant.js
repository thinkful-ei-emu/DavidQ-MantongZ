import React from 'react';

export default function participant(props){
  return (<div> {props.name} 
  <img src= {props.avatar}></img>
  {/* <p data-greenLight={props.inSession}></p>  */}
  <p>{props.onStage ? 'on stage':'left'}</p>
  
  
  </div>
  );       

}
    