import React, { useState } from "react";

import { Avatar, Button } from "@material-ui/core";


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

   ("posts").add({
      displayName: "JS Developer",
      username: "js_developer_",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    
    });

    <Avatar src="./images/profile.png" />

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweet">
      <form>
        <div className="flex p-2 mt-5">

          <Avatar src="/images/profile.png" />

          <input className='p-4 pl-12 ml-10 rounded-lg'
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />

        </div>
        <div className='flex p-2' >

        <input 
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="p-4 ml-20 rounded-lg w-60"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        </div>
        <div className=
        'items-center h-8 mt-4 ml-20 text-white rounded-full bg-twitter-blue w-50'
        >
        <Button
          onClick={sendTweet}
          type="submit"
          className="text-white"
        >
          <p className=
          'ml-24 text-sm font-bold tracking-wider text-white'
          >Tweet</p>
        </Button>
        </div>
      </form>
    </div>
    
  );
}

export default TweetBox;