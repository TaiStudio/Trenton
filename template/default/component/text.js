/*eslint-disable */
//suppress all warnings between comments
function replaceAll(str, find, replace) {
    var escapedFind=find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return str.replace(new RegExp(escapedFind, 'g'), replace);
}
/*eslint-enable */

function Text({text, mode}){
    if(text === ''){
        return(<></>);
    }
    switch(mode){
        case 'title':
            return (
                <h2>{text}</h2>
            )
        default:
            return (
                <h1 style={{
                    maxWidth: '600px'
                }} dangerouslySetInnerHTML={{__html: replaceAll(text, '\n', '</br>')}}></h1>
            )
    }
}

export default Text;