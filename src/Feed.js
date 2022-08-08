import React, { useState, useEffect } from "react";
import TweetBox from "./ProfileTweet";
import Post from "./Tweet";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="no-scrollbar grow border-right border-color-#F5F8FA overflow-y-scroll min-w-fit ">
      <div className="sticky top-0  z-100 pl-3.5 pr-2   ">
        <h2 className='px-5 pt-5 pb-5 text-2xl font-bold text-center text-md'>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />

        ))}
        
      </FlipMove>
    </div>
  );
}

export default Feed;