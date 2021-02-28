import videojs from "video.js";

const previousButton = videojs.getComponent("Button");
const builtPreviousButton = videojs.extend(previousButton, {
  constructor: function () {
    previousButton.apply(this, arguments);
    this.addClass("vjs-icon-previous-item");
    /* initialize your button */
  },
  handleClick: function () {},
});

videojs.registerComponent("previousEpisode", builtPreviousButton);
