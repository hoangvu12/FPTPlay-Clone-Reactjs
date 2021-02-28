import React, { useRef, useEffect } from "react";
import videojs from "video.js";

import "videojs-contrib-quality-levels";
import "videojs-max-quality-selector";

import "video.js/dist/video-js.css";
import "videojs-max-quality-selector/dist/videojs-max-quality-selector.css";

import "./components/nextEpisode";
import "./components/previousEpisode";

const proxyUrl = "https://8ab1725659e8.au.ngrok.io/api/v1/proxy/video";
let globalHostname;

videojs.Vhs.xhr.beforeRequest = function (options) {
  let url = options.uri;

  let hostname = getHostname(url);

  if (hostname !== proxyUrl) {
    globalHostname = hostname;
  }

  url = url.replace(`${proxyUrl}/`, `${globalHostname}/`);

  let encodedUrl = encodeURIComponent(url);

  options.uri = `${proxyUrl}/${encodedUrl}`;

  return options;
};

function Player(props) {
  let videoRef = useRef(null);

  const player = videojs.getPlayers()[`player`];

  useEffect(() => {
    let removePlayer = () => {
      player && player.dispose();
    };

    const { sources, ...options } = props;

    removePlayer();

    videojs(videoRef.current, options, function () {
      window.addEventListener("beforeunload", removePlayer);

      props.onReady(this);

      this.src(sources);

      this.maxQualitySelector({
        defaultQuality: 2,
      });
    });

    return () => removePlayer;
  }, []);

  if (player) {
    player.src(props.sources);
    player.currentTime(props.time);
  }

  return (
    <video
      ref={videoRef}
      id="player"
      className="video-js vjs-big-play-centered vjs-fluid"
    />
  );
}

function getHostname(url) {
  url = url.split("?")[0].split("/");
  url.pop();
  let hostname = url.join("/");

  return hostname;
}

export default Player;
