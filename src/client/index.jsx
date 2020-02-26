import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets'

class Tweet extends React.Component{
  render() {
      let tweets = this.props.tweet.map (tweet => <li>{tweet.text}</li>)
    return(
      <div>
        <ul>
        {tweets}
        </ul>
      </div>
      );
  }
}

class User extends React.Component{
  render (){
    return (
    <div className = "screenName">
      <h2>{this.props.name}</h2>
    </div>
      );
  }
}

class App extends React.Component {
  render() {

    return (
      <div>

        <Tweet tweet= {tweets.tweets}/>
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
