import React, { Component, Fragment } from "react"
import './../styles/home.css'


//creates a carousel of images that are passed in through props
//will fill to 100% of whatever container it is placed in

class HomeSectionTwo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div className="Section-Two">
                    <div className="Mission-Banner">

                        Movements everywhere so everyone knows someone who truly follows Christ
     
                        
                    </div>
                    movements everywhere baby
                </div>
                
            </Fragment>
        );
    }
}
export default HomeSectionTwo;
