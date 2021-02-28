import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Anime.css";

function AnimeItem(props) {
  return (
    <>
      <Card className="anime-item m-1">
        <Link to={`/anime/watch/${props.id}`}>
          <Card.Img variant="top" src={props.src} />
          <Card.Body>
            <Card.Text className="anime-name">{props.title}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </>
  );
}

export default AnimeItem;
