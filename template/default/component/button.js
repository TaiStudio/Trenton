import React from 'react';

function Button({data}) {
    var target = "";
    /*eslint-disable */
    //suppress all warnings between comments
    if(data.url.startsWith('http') == true){
        target = "_blank";
    }
    if(data.url.startsWith('www') == true){
        target = "_blank";
    }

    if(data.color == null){
        data.color = 'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)';
    }
    if(data.mode == null){
        data.mode = 'blue';
    }
    /*eslint-enable */

    return (
        <a href={data.url} target={target} style={{
            margin: '1%'
        }}>
            <button style={{
                border: 0,
                borderRadius: 3,
                color: 'white',
                height: 48,
                padding: '0 30px',
                cursor: 'pointer',
                background: data.color
            }} className={data.mode}>{data.text}</button>
        </a>
    );
}

export default Button;
