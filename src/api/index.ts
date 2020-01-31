const API_URL =
  'https://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&api_key=98a63757c7bd350beb8ff827d9274442&format=json';

function headers() {
  return {
    Accept: 'application/json'
  };
}

function parseResponse(response: any) {
  return response.json().then((json: any) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  });
}

function queryString(params: any) {
  const query = Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

export async function get(url: string, params = {}) {
  const response = await fetch(`${API_URL}${url}${queryString(params)}`, {
    method: 'GET',
    headers: headers()
  });

  return parseResponse(response);
}
