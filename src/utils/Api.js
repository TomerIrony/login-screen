class Api {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  login(email, password) {
    return fetch(`${this._url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'https://dev-api.wideview.io/auth/login',
});

export default api;
