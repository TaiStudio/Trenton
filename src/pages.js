import React from 'react';
import { useParams } from 'react-router-dom';

import './template/default/css/colors.css';

import Header from './template/default/component/header';

import Text from './template/default/component/text';
import Img from './template/default/component/img';
import Button from './template/default/component/button';
import Card from './template/default/component/card';
import Bar from './template/default/component/separator';

import Footer from './template/default/component/footer';

function Pages({page}){

    var { id } = useParams();

    if(page == null){
        page = id;
    }

    var data = require(`./pages/${page}/config.json`);

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
                                                {comp.buttons.map((val) => {
                                                    return (
                                                        <Button data={val} mode={"default"} />
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