import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../Auth'
import './../SendPage.css'
import ExamplePage from '../ExamplePage';
import NavBar from '../NavBar';


function VideoPage({page}) {
    const location = useLocation();

    const { observerName, links, information } = location.state;
    const video = page;
    console.log("page: " + video);

    return (
        <div className='SendPage-body'>
            <ExamplePage observerName={observerName}
                information={information}
                links={links}
                video={video} />

            <div/>
            <NavBar state={location.state}
                    video={video} />

        </div>
    )

}
export default VideoPage;