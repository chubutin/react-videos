import axios from 'axios';

const KEY = 'AIzaSyAe4riBdnbUR6e6__fTJea1_UAhQkAJEkE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
})
