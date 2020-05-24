import React, { Component, Fragment } from "react"
import "./../styles/home.css"
import img from '../images/michelle-baptism.jpeg'

//creates a carousel of images that are passed in through props
//will fill to 100% of whatever container it is placed in

class HomeSection1 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div className="Section-One">
                  <img src={img} alt="event image"></img>
                </div>
            </Fragment>
        );
    }
}
export default HomeSection1;