import HttpClient from './utils/HttpClient';

class WeatherService {
  constructor() {
    this.httpClient = new HttpClient('https://dataservice.accuweather.com/');
  }

  async getCityKey(city, APIKey) {
    return this.httpClient.getKey(`locations/v1/cities/search?apikey=${APIKey}&q=${city}&language=pt-br`);
  }

  async getCityName(city, APiKey) {
    return this.httpClient.getInfos(`/locations/v1/cities/autocomplete?apikey=${APiKey}&q=${city}&language=pt-br`);
  }

  async listInfos(cityKey, APIKey) {
    return this.httpClient.getInfos(`currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br&details=true`);
  }

  async probalityInfo(cityKey, APIKey) {
    return this.httpClient.getInfos(`/forecasts/v1/daily/1day/${cityKey}?apikey=${APIKey}&language=pt-br&details=true&metric=true`);
  }

  async probalityNext5Days(cityKey, APIKey) {
    return this.httpClient.getInfos(`/forecasts/v1/daily/5day/${cityKey}?apikey=${APIKey}&language=pt-br&details=true&metric=true`);
  }
}

export default new WeatherService();
