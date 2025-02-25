import React from "react";
import YouTube from 'react-youtube';


function Home (){

    const opts = {
        height: '350',
        width: '900',
        playerVars: {
          
        },
      };
    
      const videoId = 'mhDJNfV7hjk';
    return (
        <>
        <div>
            <hr />
            Hello buddy,
            <p>A foodie app where you can find food recipes, get food ideas, find restaurants near you and get food suggestions based on the items in your fridge. 
Explore the world of best culinary experience.</p>
            <div>
            <YouTube videoId={videoId} opts={opts} />
            </div>
        </div>
        </>
    )
}

export default Home;

