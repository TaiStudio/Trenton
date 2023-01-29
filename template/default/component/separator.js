import React from 'react';

function Bar({data}) {
  var background;
  switch(data.mode){
    case "invisible":
      background = 'transparent';
      break;
    default:
      background = 'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)';
  }

  return (
    <div style={{
      marginTop: '10px',
      marginBottom: '20px',
      width: '200px',
      height: '10px',
      borderRadius: '10px',
      background: background
    }} className={"separator"}/>
  );
}

export default Bar;
