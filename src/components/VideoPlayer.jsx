var VideoPlayer = ({video}) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/"+(video !== undefined ? video.id.videoId : "")} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video !== undefined ? video.snippet.title : ""}</h3>
      <div>{video !== undefined ? video.snippet.description : ""}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
