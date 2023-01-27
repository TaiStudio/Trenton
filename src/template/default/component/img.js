function modesCustom(mode, tmp){
    if(tmp == null){
        tmp = {};
    }
    switch(mode){
        case 'circle':
            tmp.clipPath = 'circle()';
            break;
        case 'center':
            tmp.justifyContent = 'center';
            break;
        default:
            tmp.width = '100%';
            tmp.height = 'auto';
    }

    return tmp;
}

function Img({data }){

    var custom = {};

    if(data.mode != null){
        var modes = data.mode.split(' ');

        if(typeof modes == 'object'){
            /*eslint-disable */
            //suppress all warnings between comments
            modes.map((val) => {
                custom = modesCustom(val, custom);
            });
            /*eslint-enable */
        }
    }
    else{
        custom = modesCustom(data.mode, null);
    }

    if(data.width != null){
        custom.width = data.width;
    }

    return (
        <img src={data.url} alt={data.text} style={custom}></img>
    )
}

export default Img;