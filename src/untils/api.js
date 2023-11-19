class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }
  getInitialCards() {
    return fetch(`${this._baseUrl}`, {
      ...this._headers,
    }).then(this._checkRes);
  }

  createTask(item) {
    return fetch(`${this._baseUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: item.task,
        priorities: item.priorities,
        inprogress: item.inprogress,
        description: item.description,
        complite: new Date().toLocaleString('default', { month: 'long' })
      }),
    }).then(this._checkRes);
  }

  updateTask(item, id) {
    return fetch(`${this._baseUrl}${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inprogress: item.inprogress,
        complite: new Date().toLocaleString('default', { month: 'long' })
      }),
    }).then(this._checkRes);
  }
}

const api = new Api({
  baseUrl: 'https://api.tafontend.online/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
