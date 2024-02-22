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
            Hello, World
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam saepe pariatur distinctio, illum excepturi voluptas, inventore rerum voluptates esse non quis reprehenderit ex, recusandae quaerat cupiditate voluptatum mollitia minus laudantium.</p>
            <div>
            <YouTube videoId={videoId} opts={opts} />
            </div>
        </div>
        </>
    )
}

export default Home;

