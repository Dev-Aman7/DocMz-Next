import React, { Component } from 'react';
import {Row,Col,Icon} from 'antd';

import './footer.css'

class footer extends Component{
    render(){
        return(
            <div className="footer">
                <Row className="footersection1">
                    <Col md={10} offset={2}>
                        <div className="lists">
                            <img src="/images/footerbottom/docmz.png"></img>
                            <p className="headingf1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque beatae ipsa debitis recusandae excepturi voluptate a mollitia aliquid, esse perferendis, doloribus voluptas maiores ut nesciunt veniam, pariatur voluptatem tempore?</p>
                            <p className="headingf2"><Icon type="compass" />  123 New Street, Melbourne location Australia 54214</p>
                            <p className="headingf2"><Icon type="mail" />info@docmz.com</p>
                            <p className="headingf2"><Icon type="phone" />(0800) 1234 567891</p>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="lists">
                            <p className="headingf1">Site Links</p>
                            <p className="headingf2">home</p>
                            <p className="headingf2">how it works</p>
                            <p className="headingf2">contact</p>
                            <p className="headingf2">doctors</p>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="lists">
                            <p className="headingf1">Download Mobile App</p>
                            <p className="headingf2">A dipisicing elit sed dotem eiusmou tempor incididunt ut labore.</p>
                            <p className="headingf2">
                                <img src="/images/footerbottom/app-store.png" style={{margin:"5px"}}></img>
                                <img src="/images/footerbottom/play-store.png"></img>
                            </p>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={20} offset={2}>
                        <div className="ending">
                            <Row>
                                <Col md={9}>
                                <p>Copyright ©2020 – Metaflow LTD. – All rights reserved.</p>
                                </Col>
                                <Col md={4} offset={10}>
                                    <Col md={6}>
                                    <Icon type="twitter" />
                                    </Col>
                                    <Col md={6}>
                                    <Icon type="facebook" />
                                    </Col>
                                    <Col md={6}>
                                    <Icon type="instagram" />
                                    </Col>
                                    <Col md={6}>
                                    <Icon type="youtube" />
                                    </Col>
                                </Col>
                            </Row>
                            <hr style={{height:"1px", width:"100%", position:"absolute", color:"black"}}/>
                            <Row className="paymentadd">
                                <Col md={3} offset={16}><p>secure checkout</p></Col>
                                <Col md={1}><img src="/images/footerbottom/paypal.svg"/></Col>
                                <Col md={1}><img src="/images/footerbottom/visa.svg"/></Col>
                                <Col md={1}><img src="/images/footerbottom/master.svg"/></Col>
                                <Col md={1}><img src="/images/footerbottom/americanexpress.svg"/></Col>
                                <Col md={1}><img style={{height:"25px"}} src="/images/footerbottom/discover.jpg"/></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default footer;