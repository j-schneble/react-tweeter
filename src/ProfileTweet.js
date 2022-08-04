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

        <div className="flex p-2 mt-4">
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
          className=" p-4 ml-20 w-60 rounded-lg"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        </div>

        <div className='bg-twitter-blue items-center text-white w-50 h-8 ml-20 mt-4 rounded-full'>
        <Button
          onClick={sendTweet}
          type="submit"
          className="text-white"
        >
          <p className='text-white ml-24 tracking-wider text-sm'>Tweet</p>
        </Button>
        </div>

      </form>
    </div>
  );
}

export default TweetBox;