import React, { Component } from 'react';
import withBasicLayout from '../components/layouts/basic-layout/withBasicLayout'
import ContactDetails from '../components/contactUs/contactDetails';
import ContactQuery from '../components/contactUs/contactQuery';
import ContactForm from '../components/contactUs/contactForm';

class contactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <ContactDetails />
                <ContactQuery />
                <ContactForm />
            </React.Fragment>
         );
    }
}
 
export default withBasicLayout(contactUs)