import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import AnimeModel from "../../models/Anime";
import PlayerControl from "./PlayerControl";
import Episode from "./Episode";
import "./Watch.css";

const videoOptions = {
  autoplay: true,
  controls: true,
  controlBar: {
    children: {
      playToggle: {},
      volumePanel: {
        inline: true,
      },
      previousEpisode: {},
      nextEpisode: {},
      ProgressControl: {},
      RemainingTimeDisplay: {},
      fullscreenToggle: {},
    },
  },
  html5: {
    hls: {
      overrideNative: true,
    },
    nativeAudioTracks: false,
    nativeVideoTracks: false,
  },
};

function Watch() {
  const { id } = useParams();

  const [player, setPlayer] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [episode, setEpisode] = useState(() => getRecentEpisode(id));
  const [time] = useState(() => getTime(id, episode));
  const [url, setUrl] = useState(() => getUrls(id, episode));

  let handleUpdateUrl = () => {
    setUrl(getUrls(id, episode));
  };

  let handleReady = (player) => {
    setPlayer(player);
    setLoaded(true);
  };

  useEffect(() => {
    handleUpdateUrl();
  }, [episode]);

  if (player) {
    player.off("timeupdate");

    player.on("timeupdate", function () {
      const rawEpisodes = localStorage[id] || "{}";
      const episodes = JSON.parse(rawEpisodes);

      const currentPlayTime = player.currentTime();

      episodes.recent = episode;
      episodes[episode] = { time: currentPlayTime };

      localStorage[id] = JSON.stringify(episodes);
    });
  }

  return (
    <>
      <Container className={`${loaded && "load"} my-5`}>
        <Row className="player mb-4">
          <Col xs={12}>
            <PlayerControl {...url.options} time={time} onReady={handleReady} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="title text-white fs-4 mb-4">
            Tập phim
          </Col>
        </Row>
        <Episode
          url={url.info}
          stateSetter={setEpisode}
          state={episode}
          updateUrl={handleUpdateUrl}
        />
      </Container>
    </>
  );
}

function getUrls(id, episode) {
  const infoUrl = AnimeModel.getInfoUrl({ id });
  const videoSourceUrl = AnimeModel.getVideoSourceUrl({ id, episode });

  return {
    info: infoUrl,
    video: videoSourceUrl,
    options: { ...videoOptions, src: videoSourceUrl },
  };
}

function getRecentEpisode(id) {
  const savedInfo = localStorage[id];

  if (!savedInfo) {
    return 0;
  }

  const animeInfo = JSON.parse(savedInfo);

  animeInfo.date = Date.now();

  localStorage[id] = JSON.stringify(animeInfo);

  return animeInfo.recent;
}

function getTime(id, episode) {
  const savedInfo = localStorage[id];

  if (!savedInfo) {
    return 0;
  }

  const animeInfo = JSON.parse(savedInfo);

  return animeInfo[episode].time;
}

export default Watch;
