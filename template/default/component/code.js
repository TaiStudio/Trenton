import React from 'react';
import JSONPretty from 'react-json-pretty';

function JSONBlock({ data }) {
    switch(data.lang){
        case 'json':
            return (
                <JSONPretty id="json-pretty" data={JSON.parse(data.code)} ></JSONPretty>
            );
        default:
            return (
                <JSONPretty id="json-pretty" data={data.code} ></JSONPretty>
            );
    }
}

export default JSONBlock;