import axios from 'axios';

function get(url: string) {
  return axios.get(url)
    .then((data) => data)
    .catch((error) => ({ error }));
}

export default {
  get,
};
