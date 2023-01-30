import React from 'react';

function filter(mode, text, style){
    if(mode == "summary"){
        return (
            <a href={`#${text}`}>
                <li style={style} dangerouslySetInnerHTML={{__html: text}}></li>
            </a>
        );
    }
    else {
        return (
            <li style={style} dangerouslySetInnerHTML={{__html: text}}></li>
        );
    }
}

function List({data}) {

    var style = {};

    switch(data.mode){
        case 'number':
            style = {listStyle: 'decimal'};
            break;
        case 'summary':
            break;
        default:
            style = {};
    }

    return (
        <ul>
            {data.content.map((val) => {
                return filter(data.mode, val, style)
            })}
        </ul>
    );
}

export default List;
