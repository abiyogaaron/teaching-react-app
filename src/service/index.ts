import { HTTPMethod } from '../interface';

const BASE_URL = 'https://my-json-server.typicode.com/abiyogaaron/teaching-react-app/'

class APIService {
  public static request<Body>(method: HTTPMethod, doc: string, body?: Body, id?: string) {
    return new Promise((resolve, reject) => {
      let url = `${BASE_URL}/${doc}`;
      if (id) {
        url = `${url}/id`;
      }
      fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(res => {
        if (res) {
          resolve(res.json());
        }
      }).catch(err => {
        reject(err);
      })
    })
  }
}

export default APIService;