import ReactPlayer from "react-player";
import "../App.css"

const VideoPlayer = (props) => {
    const vol = props.volume && !(props.volume < 0) ? props.volume : 0.5;
    return (
        <div>
            <ReactPlayer url={props.url} controls volume={vol} playing={true} />
        </div>
    )
}

const AudioPlayer = () => {
    const bird1 = new Audio( 
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
      ); 
     
      const bird2 = new Audio( 
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
      ); 
     
      function toggle1() { 
        if (bird1.paused) {
            bird2.pause(); 
            bird1.play(); 
        } else { 
          bird1.pause(); 
        } 
      }; 
     
      function toggle2() { 
        if (bird2.paused) {
          bird1.pause(); 
          bird2.play(); 
        } else { 
          bird2.pause(); 
        } 
      }; 
     
      return ( 
        <div className="buttons">  
          <button onClick={toggle1}>Bird sound 1</button> 
          <button onClick={toggle2}>Bird sound 2</button> 
        </div> 
      );
}

const MyFavVideo = () => {
    const url = "https://www.youtube.com/watch?v=g4hGRvs6HHU"
    return (
        <div>
            <center>
                <br/>
                <h2>Tired - Alan Walker ft. Gavin James</h2>
                <p>This song is pretty epic</p>
                <VideoPlayer url={url} />
                <br/>
                <h2>Testing audio imports:</h2>
                <div>
                  <AudioPlayer />
                </div>
                
            </center>
        </div>
    )
}

export default MyFavVideo;