import React, { Component } from 'react';
import {Row,Col, Input} from 'antd';

import Problemcard from '../../components/problemcard/problemcard';
import Contactus_form from '../../components/contactus_form/contactus_form';
import Header from '../../components/contactus-header/contactusheader';

import './index.css';

class contactus extends Component{
    problem =[
        {
            title:"abc def ghi jkl",
            date:"09-08-2010"
        },
        {
            title:"abc def ghi jkl",
            date:"09-08-2010"
        },
        {
            title:"abc def ghi jkl",
            date:"09-08-2010"
        },
        {
            title:"abc def ghi jkl",
            date:"09-08-2010"
        }
    ]

    problems() {
        return this.problem.map((i) => <a><Problemcard title={i.title} date={i.date}/></a>)
    }

    render(){
        return(
            <div className="contactus_landing">
                <Header></Header>
                <div className="contact_form">
                <Row>
                    <Col md={11} offset={1}>
                        <div className="cont_form_content">
                            <p className="form_header">Contact Customer Support <br/> Tell us how we can help.</p>
                            <Contactus_form></Contactus_form>
                        </div>
                    </Col>
                    <Col md={11} >
                        <div className="problem_section">
                        <p className="problem_header">Need some help? <br/> Find what you need here</p>
                        {this.problems()}
                        </div>
                    </Col>
                </Row>
                </div>
            </div>
        )
    }
}

export default contactus;