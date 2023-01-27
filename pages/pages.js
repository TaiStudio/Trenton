import React from 'react';
import { useRouter } from 'next/router';

import Header from '../template/default/component/header';

import Text from '../template/default/component/text';
import Img from '../template/default/component/img';
import Button from '../template/default/component/button';
import Card from '../template/default/component/card';
import Bar from '../template/default/component/separator';

import Footer from '../template/default/component/footer';

function Pages({page}){

    const router = useRouter()
    const { id } = router.asPath.replace('/', '');

    if(page === null){
        page = id;
    }
    if(page === ''){
        page = id;
    }

    try {
        var data = require(`../portfolio/${page}/config.json`);
    } catch (error) {
        var data = require('../portfolio/404/config.json');
    }

    return (
        <div className='content'>
            <Header data={data} key={0}></Header>

            {data.content.map((val, i) => {
                return (
                    <section key={i}>
                        <Text text={val.title} mode={"title"} key={1}></Text>
                        {
                            val.content.map((comp) => {
                                switch(comp.component){
                                    case 'separator':
                                        return (
                                            <Bar key={2}></Bar>
                                        );
                                    case 'text':
                                        return (
                                            <Text text={comp.text} mode={"default"} key={3} />
                                        );
                                    case 'button':
                                        return (
                                            <Button data={comp} mode={"default"} key={4} />
                                        );
                                    case 'buttons':
                                        return (
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }} key={5}>
                                                {comp.buttons.map((val, i) => {
                                                    return (
                                                        <Button data={val} mode={"default"} key={`b${i}`}/>
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
                                            <div style={custom} key={6}>
                                                <Img data={comp} />
                                            </div>
                                        );
                                    case 'card':
                                        return (
                                            <div style={{
                                                display: 'grid',
                                                gap: '10px'
                                            }} key={7}>
                                                <Card data={comp}></Card>
                                            </div>
                                        );
                                    default:
                                        return (
                                            <Text text={comp.title} mode={"title"} key={8} />
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