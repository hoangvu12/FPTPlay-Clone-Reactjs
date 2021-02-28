import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Fetch } from "react-request";
import AnimeItem from "./Item";

function Anime(props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Container className={loaded && "load"}>
        <Row>
          <Col xs={12} className="title mt-3 mb-2">
            {props.name}
          </Col>

          <Fetch
            url={`https://api.fptplay.net/api/v6.2_w/highlight?structure_id=${props.id}&per_page=12&page=1&st=Zi8Sr5pm5wdA8M1lkat6Ww&e=1614353417022&device=Chrome(version:84)`}
          >
            {({ fetching, failed, data }) => {
              if (fetching) {
                return (
                  <Col xs={12}>
                    <div className="pre-spinner d-flex justify-content-center">
                      <div
                        className="spinner-border text-light"
                        role="status"
                      ></div>
                    </div>
                  </Col>
                );
              }

              if (failed) {
                return (
                  <div className="text-white">The request did not succeed.</div>
                );
              }

              if (data) {
                const anime = data.result_list;

                const list = anime.map((anime) => {
                  return (
                    <Col xxl={2} lg={3} sm={6} md={4} xs={6}>
                      <AnimeItem
                        src={anime.standing_image}
                        title={anime.title_vie}
                        id={anime.referred_object_id}
                      />
                    </Col>
                  );
                });

                setLoaded(true);

                return list;
              }

              return null;
            }}
          </Fetch>
        </Row>
      </Container>
    </>
  );
}

export default Anime;
