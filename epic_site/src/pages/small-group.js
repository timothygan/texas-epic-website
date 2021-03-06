import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventHeader from "../components/event-header";
import EventDescription from "../components/event-description";
import img from '../images/sg.jpg';
import SmallGroupPanel from "../components/small-group-panel";
import Form from '../components/form';
import img1 from '../images/kevin.jpg';
import img2 from '../images/mark.jpg';
import img3 from '../images/austin.jpg';
import img4 from '../images/joy.jpg';
import img5 from '../images/jolene.jpg';
import img6 from '../images/rebecca.jpg';
import img7 from '../images/george.jpg';
import img8 from '../images/brian.jpg';
import img9 from '../images/jerry.jpg';
import img10 from '../images/monica.jpg';
import img11 from '../images/julia.jpg';
import img12 from '../images/azelia.jpg';

class SmallGroup extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <Header/>
        <EventHeader title={'Small Group'} image={img}/>
        <EventDescription
          tagline={'A group that is small in size but big in heart.'}
          emphasis={'heart.'}
          description={'Small group is a place where you can study the Bible and live life alongside a tight-knit community of believers. We want to create an open, comfortable space where you can learn about God, grow closer to one another, and share in your joys and sorrows. Feel free to fill out the small group interest form at the bottom of this page to get connected!'}>
        </EventDescription>
        <div id={'sg-panels'}>
          <SmallGroupPanel
            type={'pink-panel'}
            pictures={[img1, img2, img3]}
            title={'Freshman Guys'}
            names={['Kevin Chen', 'Mark Cheng', 'Austin Li']}
            times={['Mondays @ 7pm', 'Tuesdays @ 7pm', 'Mondays @ 8pm']}
            locations={['Orange Tree', 'Jester West Lobby', 'J2']}
          >
          </SmallGroupPanel>
          <SmallGroupPanel
            type={'blue-panel'}
            pictures={[img4, img5, img6]}
            title={'Freshman Girls'}
            names={['Joy Yeh', 'Jolene Chao', 'Rebecca Peng']}
            times={['Mondays @ 7pm', 'Tuesdays @ 7pm', 'Mondays @ 8pm']}
            locations={['Union', 'Orange Tree', 'Quarters Sterling']}
          >
          </SmallGroupPanel>
          <SmallGroupPanel
            type={'pink-panel'}
            pictures={[img7, img8, img9]}
            title={'Upper Guys'}
            names={['George Huang', 'Brian Chiu', 'Jerry Yuen']}
            times={['Mondays @ 7pm', 'Tuesdays @ 7pm', 'Mondays @ 8pm']}
            locations={['Orange Tree', 'Orange Tree', 'Orange Tree']}
          >
          </SmallGroupPanel>
          <SmallGroupPanel
            type={'blue-panel'}
            pictures={[img10, img11, img12]}
            title={'Upper Girls'}
            names={['Monica Dang', 'Julia Zheng', 'Azelia Lau']}
            times={['Mondays @ 7pm', 'Tuesdays @ 7pm', 'Mondays @ 8pm']}
            locations={['Orange Tree', 'Orange Tree', 'Orange Tree']}
          >
          </SmallGroupPanel>
        </div>
        <div className={'bottom-section'}>
          <div id={'sg-signup-prompt'}>Interested? Sign up here!</div>
          <Form url={'https://forms.gle/1PwZbdnAmiuPiAh28'}></Form>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default SmallGroup;
