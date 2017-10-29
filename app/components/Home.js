// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import { Button, Icon, Header ,Divider} from "semantic-ui-react";
import {Style_c} from "./style_c.js";

export default class Home extends Component {
  render() {
    return (
        <div style = {Style_c.outter}>
            <div style = {Style_c.container}>
                <Header as='h2' icon>
                    <Icon name='rocket' />
                    What is IPFS?
                    <Header.Subheader>
                        How does it help the web?
                    </Header.Subheader> 
                </Header>
                <Divider/>
                <p style = {Style_c.p_intent}>
                覺得 Http 的傳輸速度太慢嘛？想要快速的分享共用檔案嘛? IPFS 能幫助你實現這個夢想！擁有比傳統 Http 快 60% 的速度,趕緊按下方案紐體驗這神秘的檔案星際之旅
                </p>
                <br/>
                <Link to="/counter"><Button content='Go' icon='right arrow' labelPosition='right' positive/></Link>
            </div>
        </div>
    );
  }
}
