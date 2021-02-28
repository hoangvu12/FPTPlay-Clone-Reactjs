/* eslint-disable no-extend-native */
/* eslint-disable no-unreachable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button, Nav, Tab } from "react-bootstrap";

import "./Episode.css";
import "../../utils/index";

function Content(props) {
  const { chunks, stateSetter, state } = props;

  const handleClick = (episode) => stateSetter(episode);

  return (
    <Tab.Content>
      {chunks.map((chunk, index) => {
        const minEpisode = chunk[0]._id + 1;
        const maxEpisode = chunk[chunk.length - 1]._id + 1;

        return (
          <Tab.Pane eventKey={`ep${minEpisode}to${maxEpisode}`} key={index}>
            <Container fluid>
              <Row>
                {chunk.map((episode, index) => {
                  const id = episode._id;

                  return (
                    <div
                      className="col-lg-2 col-md-3 col-sm-4 col-6 my-3"
                      key={index}
                    >
                      <Button
                        variant="secondary"
                        className={`${state === id && "active"} episode w-100`}
                        onClick={() => handleClick(id)}
                      >
                        Tập {id + 1}
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </Container>
          </Tab.Pane>
        );
      })}
    </Tab.Content>
  );
}

function Chunk(props) {
  const { chunks } = props;

  return (
    <Nav variant="pills" className="w-100">
      {chunks.map((chunk, index) => {
        const minEpisode = chunk[0]._id + 1;
        const maxEpisode = chunk[chunk.length - 1]._id + 1;

        return (
          <Nav.Item className="chunk col-lg-3 col-md-4 col-6 mb-3" key={index}>
            <Nav.Link
              eventKey={`ep${minEpisode}to${maxEpisode}`}
              className="btn w-100 mx-auto"
            >
              Tập {minEpisode} - Tập {maxEpisode}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}

function Episode(props) {
  const [activeKey, setActiveKey] = useState("ep1to18");
  const [chunks, setChunks] = useState([]);

  useEffect(() => {
    async function getInfo() {
      if (!props.url) return;

      const { data } = await axios.get(props.url);

      const response = data.result;

      response.episodes = response.episodes.filter(
        (episode) => !episode.is_trailer
      );

      const chunks = response.episodes.chunk(18);

      chunks.forEach((chunk) => {
        const minEpisode = chunk[0]._id + 1;
        const maxEpisode = chunk[chunk.length - 1]._id + 1;
        const episode = props.state + 1;

        if (episode >= minEpisode && episode <= maxEpisode) {
          setActiveKey(`ep${minEpisode}to${maxEpisode}`);
        }
      });

      setChunks(chunks);
    }

    getInfo();
  }, []);

  return (
    <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
      <Row>
        <Col xs={12}>
          <Chunk chunks={chunks} />
        </Col>
        <Col xs={12}>
          <Content {...props} chunks={chunks} />
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Episode;
