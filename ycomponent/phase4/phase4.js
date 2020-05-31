import React, { Component } from 'react';
import {Row,Col,Icon} from 'antd';
import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from 'react-alice-carousel';

import './phase4.css';

class phase4 extends Component{
    items = [
        {
            text:"Primary Care",
            src:"/primarycare.png"
        },
        {
            text:"Obgyn",
            src:"/obygn.jpg"
        },
        {
            text:"Dentists",
            src:"/dentist.png"
        },
        {
            text:"Dermatology",
            src:"/dematologist.png"
        },
        {
            text:"Psychiatrist",
            src:"/psychiatrist.png"
        },
        {
            text:"Eye Doctor",
            src:"/eyedoctor.png"
        },
        {
            text:"ENT",
            src:"/ent.png"
        },
        {
            text:"Gastroentrologist",
            src:"/gastro.png"
        },
    ]
    
    state = {
    currentIndex: 0,
    responsive: { 1024: { items: 4 } },
    galleryItems: this.galleryItems(),
    }

  slideTo = (i) => this.setState({ currentIndex: i })

  onSlideChanged = (e) => this.setState({ currentIndex: e.item })

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>

  galleryItems() {
  return this.items.map((i) => <div className="gallery4item" key={i}><img className="gallery4icon" src={i.src}></img><p className="gallery4itemtext">{i.text}</p></div>)
  }
    render(){
        const { galleryItems, responsive, currentIndex } = this.state
        return(
            <div className="phase4">
                <Row className="heading41">
                    <p>FEATURED IN</p>
                </Row>
                <Row>
                <div className="gallery4">
                    <Col md={1} offset={1}>
                    <button className="gallery4button" style={ currentIndex !=0 ?  null : {display:"none"} } onClick={() => this.slidePrev()}><Icon type="left-circle" /></button>
                    </Col>
                    <Col md={18} offset={1}>
                    <AliceCarousel
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    items={galleryItems}
                    responsive={responsive}
                    slideToIndex={currentIndex}
                    onSlideChanged={this.onSlideChanged}
                    />
                    </Col>
                    <Col md={1} offset={1}>
                    <button className="gallery4button" style={ currentIndex !=4 ?  null : {display:"none"} } onClick={() => this.slideNext()}><Icon type="right-circle" /></button>
                    </Col>
                </div>
                </Row>
            </div>
        )
    }
}

export default phase4;