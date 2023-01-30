import React from 'react';

function List({data}) {

    var style = {};

    switch(data.mode){
        case 'number':
            style = {listStyle: 'decimal'};
            break;
        default:
            style = {};
    }

    return (
        <ul>
            {data.content.map((val) => {
                return (
                    <li style={style} dangerouslySetInnerHTML={{__html: val}}></li>
                );
            })}
        </ul>
    );
}

export default List;
