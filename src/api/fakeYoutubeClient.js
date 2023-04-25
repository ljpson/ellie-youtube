import axios from 'axios';

export default class FakeYoutubeClient {

  async search(params) {
    
    // return params.relatedTpVideoId
    // ? axios.get(`/videos/related.json`)
    // : axios.get(`/videos/search.json`);

    return axios.get(`/videos/${params.relatedTpVideoId ? 'related' : 'search'}.json`);
  }

  async videos() {
    return axios.get(`/videos/popular.json`);
  }

  async channels() {
    return axios.get(`/videos/channel.json`);
  }
}
