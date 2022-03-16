export default class Utils {
  static getBaseUrl() {
    switch (process.env.NODE_ENV) {
      case 'production':
        return 'https://www.tes.com';
      default:
        console.error('Url or env not defined');
    }
  }
}
