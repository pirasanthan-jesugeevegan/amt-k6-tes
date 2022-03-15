import { check } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 1,
  duration: '3s',
};

export default function () {
  const url = 'https://www.tes.com/api/authn/sign-in-redirect';
  const payload = JSON.stringify({
    appId: '0bf8ffca-6026-41a0-b1a0-24350ef7c13d',
    identification: `${__ENV.USER_EMAIL}`,
    password: `${__ENV.USER_PASSWORD}`,
  });

  const params = {
    headers: {
      accept: 'application/json',
      'accept-language': 'en-US,en;q=0.9,fr;q=0.8,es;q=0.7',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      pragma: 'no-cache',
      'sec-ch-ua':
        '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'x-auth-api-version': '2',
      'x-csrf-token': '993309fccad42c1a5d8247e813ee3bea',
      cookie:
        'siteCountry=GB; siteInternational=GB; siteCurrency=GBP; __tesu=2bd07640-1a34-49b8-9282-d6da7f21b186; _ga=GA1.2.409848652.1645696641; _fbp=fb.1.1645696641578.800927912; __gads=ID=68ba1d2bb5d04b56:T=1645711098:S=ALNI_MYCamfxhhR5yghGrZwm4gPYvw3vFg; _hjSessionUser_266940=eyJpZCI6ImEyYjZkZjY5LTVjZWYtNThiNi1hZDU0LWVjOTVjMmViY2UyYSIsImNyZWF0ZWQiOjE2NDU3MTEwOTc4NjYsImV4aXN0aW5nIjp0cnVlfQ==; has_js=1; aucp13n=89uhhb; geoCountry=GB; geoCurrency=GBP; _clck=c1qi1s|1|ezh|0; fs_uid=rs.fullstory.com#15D7K#4882461681573888:5678950549610496/1677232641; _uetvid=28bd7c70955811ec9019c367e300ea46; __tess=account-sign-in%7C%7C1; lastLogin=1647249912219; csrf=993309fccad42c1a5d8247e813ee3bea; __tese=0cf4b820-360a-4328-93c8-b515a4745849; __tesv=7197d0ec-777a-451f-abaf-042b76adca5e',
      Referer:
        'https://www.tes.com/authn/sign-in?rtn=https%3A%2F%2Fwww.tes.com%2Fschools%2Femployers%2Fschool-chooser',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  };

  const res = http.post(url, payload, params);
  console.log(res);
  check(res, {
    'is status 204': (r) => r.status === 204,
  });
}
