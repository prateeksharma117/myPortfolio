import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsReddit } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/prateek-sharma-/" target="_blank" rel="noreferrer">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://twitter.com/prateek1173" target="_blank" rel="noreferrer">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://www.instagram.com/prateek_sharma_117/" target="_blank" rel="noreferrer">
        <div>
          <BsInstagram />
        </div>
      </a>
      <a href="https://www.reddit.com/user/prateeksharma117" target="_blank" rel="noreferrer">
        <div>
          <BsReddit />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
