import './index.css';

import '../template/default/css/theme.css';

import React from 'react';
import { useRouter } from 'next/router';

import Pages from './pages';

const App = () => {
    const router = useRouter();

    var page = router.asPath.replace('/', '');
    if(page === ''){
        page = 'home';
    }
    if(router.asPath === '/'){
        page = 'home';
    }
    
    return <Pages page={page}/>
}

export default App
