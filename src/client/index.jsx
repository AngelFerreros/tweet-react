import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets'

/*
<Tweet>
  <User/>
  <Entities>
    <UrlEntity/>
  </Entities>
</Tweet>
*/

class Tweet extends React.Component{
  render() {
      let txtTweets = this.props.tweetsArr.map (tweet =>
      <div>
        <p> {tweet.text} </p>
        <p> {tweet.user.screen_name} </p>
      </div>)
    return(
        <div className = "tweetBox">
          <li>{txtTweets}</li>
        </div>
      );
  }
}

// class User extends React.Component{
//   render (){
//     let screenName = this.props.name.map (tweet => tweet.user.screen_name)
//     return (
//       <div className ="namebox">
//         <li>{screenName}</li>
//       </div>
//       );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div className ="container">


          <Tweet tweetsArr= {tweets.tweets}/>

      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );

console.log("tweet react");
