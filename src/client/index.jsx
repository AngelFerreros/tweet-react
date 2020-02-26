import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets'

class Tweet extends React.Component{
  render() {
    let txtTweets = this.props.tweetsArr.map (tweet =>
      <div>
        <p> {tweet.user.screen_name} </p>
        <p> {tweet.text} </p>
      </div>)
    return(
      <div className = "tweetBox">
        {txtTweets}
      </div>
    );
  }
}

class Entity extends React.Component{
  render() {
    // let urls = this.props.array.map(tweet => tweet.entities.urls[0])
    let urlEntity = this.props.array.map(tweet => tweet.entities.urls[0].url)
    // let toRender = (urls.length < 0) ? urlEntity  : urlEntity
    return(
      <div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className ="container">
        <div className = "row tweets">
          <Tweet tweetsArr= {tweets.tweets}/>
        </div>
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );

console.log("tweet react");
