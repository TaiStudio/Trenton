import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Button from './button';
import Img from './img';

function Card({data}) {
    if(data.background == null){
        data.background = [];
    }

    // return (
    //     <div style={{
    //         width: '600px',
    //         height: '400px',
    //         background: '#16161675',
    //         borderRadius: '10px',
    //         boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
    //         padding: '20px',
    //         textAlign: 'center',
    //     }}>
    //         <Carousel>
    //             {data.background.map((val) => {
    //                 return (
    //                     <Carousel.Item>
    //                         <Img data={{url: val, text: ''}}></Img>
    //                     </Carousel.Item>
    //                 )
    //             })}
    //         </Carousel>
    //         <h2 style={{
    //             marginTop: '20px',
    //             fontSize: 'bold'
    //         }}>{data.title}</h2>
    //         <hr style={{
    //             borderTop: '1px solid #ccc',
    //             margin: '10px 0'
    //         }}/>
    //         <p style={{
    //             fontSize: '18px',
    //             lineHeight: '1.5',
    //             marginBottom: '20px'
    //         }}>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    //             Integer posuere erat a ante.
    //         </p>
    //         {data.buttons.map((val) => {
    //             return (
    //                 <Button data={val}></Button>
    //             )
    //         })}
    //     </div>
    // )

    return (
        <div class="card">
            <div class="card-carousel">
                {data.background.map((val) => {
                    return (
                        <Img data={{url: val, text: ''}}></Img>
                    )
                })}
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
