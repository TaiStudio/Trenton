import React from 'react';

function filter(mode, text, style, key){
    if(mode == "summary"){
        return (
            <a href={`#${text}`}>
                <li style={style} dangerouslySetInnerHTML={{__html: text}} key={`lit${key}`}></li>
            </a>
        );
    }
    else {
        return (
            <li style={style} dangerouslySetInnerHTML={{__html: text}} key={`lit${key}`}></li>
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
        <ul key={`l${Date.now()}${data.content.length}`}>
            {data.content.map((val, i) => {
                return filter(data.mode, val, style, i);
            })}
        </ul>
    );
}

export default List;
