import React from 'react';
import { useRouter } from 'next/router';

import Header from '../template/default/component/header';

import Text from '../template/default/component/text';
import Img from '../template/default/component/img';
import Button from '../template/default/component/button';
import List from '../template/default/component/list';
import Card from '../template/default/component/card';
import Bar from '../template/default/component/separator';
import JSONBlock from '../template/default/component/code';

import Footer from '../template/default/component/footer';

function Pages({page}){

    const router = useRouter()
    var { id } = router.asPath.replace('/', '');
    
    if(id != null){
        id = id.split('#');
    }

    if(typeof id == "object"){
        id = id[0];
    }

    if(page === null){
        page = id;
    }
    if(page === ''){
        page = id;
    }

    try {
        var data = require(`../portfolio/${page}/config.json`);
    } catch (error) {
        if(error != null){
            var data = require('../portfolio/404/config.json');
        }
    }

    return (
        <div className='content'>
            <Header data={data} key={0}></Header>

            {data.content.map((val, i) => {
                var custom = {};
                if(val.mode === "grid"){
                    custom = {
                        display: 'grid',
                        gridTemplate: "'card card'",
                        justifyContent: "center",
                        gap: '1% 2%'
                    };
                }
                return (
                    <section style={custom} key={i}>
                        <Text text={val.title} mode={"title"} key={1}></Text>
                        {
                            val.content.map((comp) => {
                                switch(comp.component){
                                    case 'separator':
                                        return (
                                            <Bar data={comp} key={`sep${i}`}></Bar>
                                        );
                                    case 'list':
                                        return (
                                            <List data={comp} key={`lists${i}`} />
                                        );
                                    case 'code':
                                        return (
                                            <JSONBlock data={comp} key={`code${i}`}></JSONBlock>
                                        );
                                    case 'text':
                                        return (
                                            <Text text={comp.text} mode={"default"} key={`txt${i}`} />
                                        );
                                    case 'button':
                                        return (
                                            <Button data={comp} mode={"default"} key={`btn${i}`} />
                                        );
                                    case 'buttons':
                                        return (
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }} key={5}>
                                                {comp.buttons.map((val, i) => {
                                                    return (
                                                        <Button data={val} mode={"default"} key={`btns${i}`}/>
                                                    )
                                                })}
                                            </div>
                                        )
                                    case 'image':
                                        var custom = {};
                                        if(comp.mode.includes('center')){
                                            custom = {
                                                display: 'flex',
                                                justifyContent: 'center'
                                            };
                                        }
                                        return (
                                            <div style={custom} key={`img${i}`}>
                                                <Img data={comp} />
                                            </div>
                                        );
                                    case 'card':
                                        return (
                                            <Card data={comp} key={`card${i}`}></Card>
                                        );
                                    default:
                                        return (
                                            <Text text={comp.title} mode={"title"} key={`txt${i}`} />
                                        );
                                }
                            })
                        }
                    </section>
                )
            })}

            <Footer></Footer>
        </div>
    )
}

export default Pages;