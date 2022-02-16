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
            <p className="SendPage-instructions">
                This is the tutorial page, for you to test the interface.
                There are 6 videos I would like you to watch.
                Each video plays for around 5 minutes, so in total this survey should take 25-30 minutes.
                When you start the video, it will jump to the important section, that I would like you to rate.
                <br />
                It will pause at the end of the selected sequence.
                Please watch and assess until it automatically stops.
                <br />
                <br />
                Please provide a <b>continuous asssement</b> WHILST watching the video using the slider
                and add a <b>final, overall score</b> AFTER you finished watching the sequence.
                <br />
                <br />
                Please click submit, at the bottom of the page, after you finish watching EACH video.

            </p>

            <ExamplePage observerName={observerName}
                information={information}
                links={links}
                video={0}
            />
            <br/>
                <NavBar state={location.state}
                    video={video} />
        </div>
    )

}
export default SendPage;