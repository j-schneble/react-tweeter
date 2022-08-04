import React from "react";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="">
      <div className="mt-2 rounded-full ml-6 p-5 bg-twitter-white">
        <SearchIcon className='ml-10 text-black' />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className=" text-black font-bold text-xl text-center bg-twitter-white mt-4 ml-5 rounded-lg pt-2 px-20">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1555298046254120966"} />

        <TwitterTimelineEmbed className='rounded-lg '
          sourceType="profile"
          screenName="js_developer_"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/js_developer_"}
          options={{ text: "#code", via: "js_developer_" }}
        />
      </div>
    </div>
  );
}

export default Widgets;