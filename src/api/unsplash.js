import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6da20d43ce57c31d81ff65ce36da08d99efc404bb8992e40da199187f4b72fff'
  }
});

