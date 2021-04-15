import { HTTPMethod } from '../interface';

const BASE_URL = 'https://my-json-server.typicode.com/abiyogaaron/teaching-react-app/db.json'

class APIService {
  public static async request<Body>(method: HTTPMethod, body?: Body, id?: string) {
    let url = BASE_URL;
    if (id) {
      url = `${url}/id`;
    }

    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  }
}

export default APIService;