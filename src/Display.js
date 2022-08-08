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
      <div className="p-5 mt-2 ml-6 rounded-full bg-twitter-white">
        <SearchIcon className='p-5 ml-10 text-black bg-twitter-white' />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="px-20 pt-2 mt-4 ml-5 text-xl font-bold text-center text-black rounded-lg bg-twitter-white">
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