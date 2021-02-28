import FPTPlay from "../utils/fptplay";

const structureIds = {
  trending: "55a77da717dc136d93bd3988",
  total: "5587c83b17dc1353a3624a22",
  winter2021: "5587c8ed17dc1353a2624a12",
  action: "578c8c8817dc1326a5b202c6",
  scifi: "578c8ca217dc1326a6b1ffbd",
  romantic: "578c8cb017dc1326a3b1ff00",
  chinese: "59796ffe5583207ceb4f0cfd",
};

class Anime {
  static getInfoUrl({ id }) {
    const endpoint = `vod/${id}`;
    const URL = FPTPlay.getUrl(endpoint);

    return URL;
  }

  static getVideoSourceUrl({ id, episode = 0, quality = "auto_vip" }) {
    const endpoint = `stream/vod/${id}/${episode}/${quality}`;
    const URL = FPTPlay.getUrl(endpoint);

    return URL;
  }
}

export default Anime;
