class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getKey(path) {
    const response = await fetch(`${this.baseURL}${path}`);
    const data = await response.json();
    return data[0].Key;
  }

  async getInfos(path) {
    const response = await fetch(`${this.baseURL}${path}`);
    const data = await response.json();
    return data;
  }
}

export default HttpClient;
