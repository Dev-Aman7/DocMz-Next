import React, {Component} from 'react';

import { Input, Button } from 'antd';
import './contactus_form.css';

class contactusform extends Component{
    render(){
        return(
            <div className="form">
                <Input className="forminput" placeholder="web name" />
                <Input className="forminput" placeholder="web email" />
                <Input className="forminput" placeholder="subject" />
                <Input type="text" rows="3" className="forminput" placeholder="description" />
                <Button className="submit_button">SUBMIT</Button>
            </div>
        )
    }
}

export default contactusform;