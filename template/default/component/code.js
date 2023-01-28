import React from 'react';
import JSONPretty from 'react-json-pretty';

function JSONBlock({ jsonData }) {
    return (
        <JSONPretty id="json-pretty" data={jsonData} ></JSONPretty>
    );
}

export default JSONBlock;