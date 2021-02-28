import videojs from "video.js";

const nextButton = videojs.getComponent("Button");
const builtNextButton = videojs.extend(nextButton, {
  constructor: function () {
    nextButton.apply(this, arguments);
    this.addClass("vjs-icon-next-item");
    /* initialize your button */
  },
  handleClick: function () {},
});

videojs.registerComponent("nextEpisode", builtNextButton);
