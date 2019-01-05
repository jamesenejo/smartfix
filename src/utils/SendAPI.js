import request from 'request';
import axios from 'axios';

class SendAPI {
  constructor() {
    if (SendAPI.exists) {
      return SendAPI.instance;
    }
    this.sendURI = 'https://graph.facebook.com/v2.6/me/messages';
    this.profileURI = 'https://graph.facebook.com';
    SendAPI.instance = this;
    SendAPI.exists = true;
  }

  send(message) {
    return axios.post(
      `${this.sendURI}?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
      message
    );
  }

  fetchUserProfile(recipient) {
    return axios.get(
      `${this.profileURI}/${recipient}?access_token=${process.env.PAGE_ACCESS_TOKEN}`
    );
  }
}

export default SendAPI;
