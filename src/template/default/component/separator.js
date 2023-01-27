import React from 'react';

function Bar() {
  return (
    <div style={{
      marginTop: '10px',
      marginBottom: '20px',
      width: '200px',
      height: '10px',
      borderRadius: '10px',
      background: 'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)'
    }} className={"separator"}/>
  );
}

export default Bar;
