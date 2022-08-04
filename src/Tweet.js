import React, { forwardRef } from "react";

import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div  ref={ref}>
        <div >
          <Avatar src={avatar} />
        </div>
        <div >
          <div >
            <div >
              <h3>
                {displayName}{" "}
                <span >
                  {verified && <VerifiedUserIcon />} @
                  {username}
                </span>
              </h3>
            </div>
            <div >
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div >
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;