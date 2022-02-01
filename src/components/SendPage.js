import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Auth'
import './SendPage.css'
import ExamplePage from './ExamplePage';
import NavBar from './NavBar';


function SendPage() {
    const location = useLocation();

    const { observerName, links, information } = location.state;
    const video = 0;
    console.log("page: " + video);

    console.log(location.state);

    return (
        <div className='SendPage-body'>
            <p className="ExamplePage-instructions">
                This is the tutorial page, for you to test the interface.
                When you start the video, it will jump to the important section, that I would like you to rate.
                Please watch and assess until it automatically stops.
                <br/>
                Please add a <b>final, overall score</b> when you finished watching the sequence. 
                <br/>
                I would like you to assess continously, and to move the slider as the video plays. You can use the keyboard to move the slider when you click on it once.
                <br/>

                You will be asked to rate one feature or the overall performance. If you are asked to rate a feature, I mean the following:
                <br/>
                <br/>
                <b>POSE</b> - you can assess the body posture, use of gestures and/or movements around the room: how engaging is it to you?
                <br/>
                <b>FACIAL EXPRESSION </b>-  you can assess the facial expressivity  (do they smile, are they animated?): how engaging is it to you?
                <br/>
                <b>VOICE</b> - you can assess the rhythm, vocal tone (happy, enthusiastic or bored), and/or how animated the voice is, but not the content: how engaging is it to you?

            </p>
            <p className="ExamplePage-instructions">
                Please click submit, at the bottom of the page, when you finished watching.
            </p>
            <ExamplePage observerName={observerName}
                information={information}
                links={links}
                video={1}
            />
            <NavBar state={location.state}
                    video={video}/>
            <div />
        </div>
    )

}
export default SendPage;