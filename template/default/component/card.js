import React from 'react';

import Button from './button';
import Img from './img';

function Image(data){
    if(data.fontawesome != null){
        return (
            <i class={data.fontawesome.code} style={{
                color: data.fontawesome.color
            }}></i>
        );
    }
    else{
        return data.background.map((val) => {
            return (
                <Img data={{url: val, text: ''}}></Img>
            );
        });
    }
}

function Card({data}) {
    if(data.background == null){
        data.background = [];
    }

    if(data.mode == null){
        data.mode = "default";
    }

    if(data.buttons == null){
        data.buttons = [];
    }

    return (
        <div class={`card ${data.mode}`}>
            <div class="card-carousel">
                {
                    Image(data)
                }
            </div>
            <h2 class="card-title">{data.title}</h2>
            <hr class="card-divider" />
            <p class="card-description">{data.description}</p>
            <div class="card-buttons">
                {data.buttons.map((val) => {
                    return (
                        <Button data={val}></Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Card;
