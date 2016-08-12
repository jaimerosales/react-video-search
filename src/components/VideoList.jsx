
var VideoList = ({videos, handleVideoClick}) => {
       //var videos = props.videos !== undefined ? props.videos : []
    return(
      <div className="video-list media">
        {
          videos.map( (a) => <VideoListEntry key={a.id.videoId} video={a}  handleVideoClick={handleVideoClick} /> )
        }
      </div>
    )

}


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
