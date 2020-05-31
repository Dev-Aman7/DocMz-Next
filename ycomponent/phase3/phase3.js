import React, { Component } from 'react';
import {Row,Col, Icon} from 'antd';
import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from 'react-alice-carousel';

import './phase3.css';

class phase3 extends Component{
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          items: [
            {
                name: 0,
                src: "https://images.pexels.com/photos/1106452/pexels-photo-1106452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name: 1,
                src: "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name: 2,
                src: "https://images.pexels.com/photos/573294/pexels-photo-573294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name: 3,
                src: "https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name: 4,
                src: "https://images.pexels.com/photos/18495/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name: 5,
                src: "https://images.pexels.com/photos/575402/pexels-photo-575402.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
          ],
          texts: [
            {
              text1:"“You don't get nauseous when you take them.”",
              text2:"Brittany Harrer"
            },
            {
              text1:"“There's only what you need, and nothing beyond that.”",
              text2:"Rebecca Harris"
            },
            {
              text1:"“When I found Ritual vitamins, everything was in one place.”",
              text2:"Lindsay Scola"
            },
            {
              text1:"“The different sources are all vegan.”",
              text2:"Caroline Cameron"
            },
            {
              text1:"“The thing I love most about Ritual is just how transparent they are.”",
              text2:"Lori Coyle"
            }
          ]
        };
      }
  
      slideNext = () => {
          this.setState({ currentIndex:  this.state.currentIndex - 1});
        }
  
      slidePrev = () => this.setState({ currentIndex: this.state.currentIndex + 1 });
      
      renderGallery1(){
        const {currentIndex, texts } = this.state;

        return(
              <AliceCarousel
                      autoPlay={false}
                      fadeOutAnimation={true}
                      items={1}
                      slideToIndex={currentIndex}
                      buttonsDisabled={true}
                      dotsDisabled={true}
                      >
                        { texts.map((text, i) => <div key={i}  className="gallerytext1"><p className="heading33">{text.text1}</p>
                      <p className="heading34">{text.text2}</p></div>) }
      </AliceCarousel>);
    }
  
      renderGallery2() {
        const { currentIndex, items } = this.state;
  
        return (<AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={1}
          slideToIndex={(currentIndex)%6}
          fadeOutAnimation={false}
          duration={450}
        >
          { items.map((item, i) => <div key={i} className= "galleryimagelarge"><img style={{height:"100%", width:"100%"}} src={item.src}/></div>) }
        </AliceCarousel>);
      }

      renderGallery3() {
        const { currentIndex, items } = this.state;
        
        
        return (<AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={1}
          startIndex={currentIndex+1}
          slideToIndex={(currentIndex+1)%6}
          duration={450}
        >
          { items.map((item, i) => <div key={i} className= "galleryimage"><img style={{height:"100%", width:"100%"}} src={item.src}/></div>) }
        </AliceCarousel>);
      }
  
      renderGallery4() {
        const { currentIndex, items } = this.state;
        
        
        return (<AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={1}
          startIndex={currentIndex+2}
          slideToIndex={(currentIndex+2)%6}
          fadeOutAnimation={false}
          duration={450}
        >
          { items.map((item, i) => <div key={i} className= "galleryimage"><img style={{height:"100%", width:"100%"}} src={item.src}/></div>) }
        </AliceCarousel>);
      }
  
    render(){
        let i = this.state.currentIndex;

        return(
            <div className="phase3">
                <Row>
                    <Col md={10} offset={7}>
                    <div className="text31">
                        <p className="heading31">Skeptics Speak</p>
                        <p className="heading32">With millions of bottles delivered, discover what Ritual users have to say.</p>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={2}>
                    <div className="text32">
                        {this.renderGallery1()} 
                    </div>
                    </Col>
                    <Col md={6}>
                    <div className="gallery3">
                    { this.renderGallery2() }
                    </div>
                    </Col>
                    <Col md={5}>
                    <div className="gallery3">
                    { this.renderGallery3() }
                    </div>
                    <button className="prevslide button3" onClick={() => this.slideNext()}><Icon type="arrow-left" /></button>
                    </Col>
                    <Col md={5}>
                    <div>
                    <div className="gallery3">
                    { this.renderGallery4() }
                    </div>
                    </div>
                    <button className="nextslide button3" onClick={() => this.slidePrev()}><Icon type="arrow-right" /></button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default phase3;