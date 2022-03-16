import { check } from 'k6';
import http from 'k6/http';

export default class Login {
  constructor() {
    this.params = {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-csrf-token': '993309fccad42c1a5d8247e813ee3bea',
        cookie:
          '__tesu=2bd07640-1a34-49b8-9282-d6da7f21b186;csrf=993309fccad42c1a5d8247e813ee3bea;',
      },
    };
    this.token = '';
  }

  access() {
    let payload = JSON.stringify({
      appId: '0bf8ffca-6026-41a0-b1a0-24350ef7c13d',
      identification: `${__ENV.USER_EMAIL}`,
      password: `${__ENV.USER_PASSWORD}`,
    });
    let response = http.post(
      `https://www.tes.com/api/authn/sign-in-redirect`,
      payload,
      this.params
    );
    this.token = response.json('authorization');
    check(response, {
      'is status 204': (r) => r.status === 204,
    });
  }

  getToken() {
    return this.token;
  }
}
