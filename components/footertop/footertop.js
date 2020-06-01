import React, { Component } from 'react';
import{Row,Col} from 'antd';

import './footertop.css';

class phase2 extends Component{
    citylist =[
        "New York",
        "California",
        "Illinois",
        "Texas",
        "Pennsylvania",
        "Arizona"
    ]
    
    specialtylist =[
        "New York",
        "California",
        "Illinois",
        "Texas",
        "Pennsylvania",
        "Arizona"
    ]
    
    insurancelist =[
        "New York",
        "California",
        "Illinois",
        "Texas",
        "Pennsylvania",
        "Arizona"
    ]



    cityItems() {
        return this.citylist.map((i) => <a className="listitem2"><p>{i}</p></a>)
        }
    
    specialtyItems() {
        return this.specialtylist.map((i) => <a className="listitem2"><p>{i}</p></a>)
        }

    insuranceItems() {
        return this.insurancelist.map((i) => <a className="listitem2"><p>{i}</p></a>)
        }
    
    render(){
        return(
            <div className="phase2">
                <Row style={{margin:"2vh 0"}}>
                    <Col md={20} offset={2}>
                    <p className="heading21">Find doctors and dentists by ...</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} offset={2}>
                        <p className="listheading2">City</p>
                        <ul>{this.cityItems()}</ul>
                    </Col>
                    <Col md={6}>
                        <p className="listheading2">Specialty</p>
                        <ul>{this.specialtyItems()}</ul>
                    </Col>
                    <Col md={6}>
                    <p className="listheading2">Insurance</p>
                        <ul>{this.insuranceItems()}</ul>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default phase2;