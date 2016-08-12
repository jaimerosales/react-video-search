class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVideo: exampleVideoData[0],
            videos: exampleVideoData
        };
    }

    handleVideoClick(video) {
        console.log('video clicked video info: ', video)
        this.setState({currentVideo: video})
    }

    componentDidMount() {
    	this.onSearchClick('react tutorials');
  	}

    onSearchClick(query) {

    	var options = {
    		key: this.props.API_KEY,
    		query: query
    	}

    	console.log('Options ',options)

        this.props.searchYouTube(options, (str) =>{
			this.setState({currentVideo: str[0], videos: str});
		});

    }

    render() {
        //	 console.log('this: ', this)
        return (
            <div>
                 <Nav
          			handleSearchInputChange={_.debounce((input) => this.onSearchClick(input), 500)}
        		/>
                <div className="col-md-7">
                    <VideoPlayer video={this.state.currentVideo}/>
                </div>
                <div className="col-md-5">
                    <VideoList handleVideoClick={this.handleVideoClick.bind(this)} videos={this.state.videos} />
                </div>
            </div>
        )
    };
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
