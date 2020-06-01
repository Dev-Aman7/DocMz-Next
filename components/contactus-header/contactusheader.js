import React, {Component} from 'react';

import {Row,Col} from 'antd';

import './contactusheader.css';

class header extends Component{
    render(){
        return(
            <div>
                <Row className="cont_head">
                    <Col md={3} offset={2}>
                    <img style={{paddingTop:"3vh", width:"100%"}} src="/images/logo.png"/>
                    <p className="icon_heading">HELP CENTER</p>
                    </Col>
                    <Col md={2} offset={13}>
                        <a className="cont_head_item">Home</a>
                    </Col>
                    <Col md={4} >
                        <a href="/" className="cont_head_item">Back to DocMZ</a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default header;
