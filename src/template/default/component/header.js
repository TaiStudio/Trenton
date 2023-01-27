import React, {useEffect} from 'react';
import '../css/theme.css';

const Header = ({ data }) => {
    /*eslint-disable */
    //suppress all warnings between comments
    useEffect(() => {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = data.favicon;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, []);
    /*eslint-enable */

    return (
        <div className='d-hide'>
            {
                document.title = data.name
            }
        </div>
    )
}

export default Header;