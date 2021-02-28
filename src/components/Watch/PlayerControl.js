import React from "react";
import { Fetch } from "react-request";
import Player from "./Player";

function PlayerControl(props) {
  return (
    <>
      <Fetch url={props.src}>
        {({ data: response }) => {
          if (response) {
            const options = {
              ...props,
              sources: {
                src: response.data.url,
                type: "application/x-mpegURL",
              },
            };

            return <Player {...options} onReady={props.onReady} />;
          }
        }}
      </Fetch>
    </>
  );
}

export default PlayerControl;
