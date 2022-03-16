import Login from '../requests/login.request.js';
import { group } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 1 },
    { duration: '30s', target: 2 },
    { duration: '30s', target: 4 },
    { duration: '30s', target: 6 },
    { duration: '30s', target: 0 },
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
