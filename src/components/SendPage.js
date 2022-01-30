import React from 'react';
import { useLocation } from 'react-router-dom';
import './../App'
import './SendPage.css'
import ExamplePage from './ExamplePage';


function SendPage(){
    const location = useLocation();

    console.log(location);
    const { observerName, links, information } = location.state;
    console.log("location")
    const video = 1 ;

    return (
        <div className='SendPage-body'>
            <ExamplePage observerName={observerName} 
                        information={information}
                        links={links}
                        video={video}/>
        </div>
    )

}
export default SendPage;