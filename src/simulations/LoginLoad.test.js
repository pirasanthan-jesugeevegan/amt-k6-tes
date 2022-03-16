import Login from '../requests/login.request.js';
import { group } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 5 }, // simulate ramp-up of traffic from 1 to 20 users over 10 seconds.
    { duration: '1m', target: 10 }, // stay at 100 users for 10 minutes
    { duration: '30s', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

export default function () {
  let login = new Login();

  group('Login With a Candidate User', () => {
    login.access();
  });
}
