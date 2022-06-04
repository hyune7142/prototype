import axios from "axios";

function* getAxios(fullUrl, payload, headers) {
  try {
    const response = yield Promise.resolve(
      axios({
        method: "get",
        url: fullUrl,
        param: { ...payload },
        headers: { ...headers },
      })
    );

    if (response.status !== 200) {
      return Promise.reject(response.data);
    }
    return response.data;
  } catch (error) {
    console.debug(error);
  }
  return {};
}

function* postAxios(fullUrl, payload, headers) {
  try {
    const response = yield Promise.resolve(
      axios({
        method: "post",
        url: fullUrl,
        data: { ...payload },
        headers: { ...headers },
      })
    );

    if (response.status !== 200) {
      return Promise.reject(response.data);
    }
    return response.data;
  } catch (error) {
    console.debug(error);
  }
  return {};
}

function* putAxios(fullUrl, payload, headers) {
  try {
    const response = yield Promise.resolve(
      axios({
        method: "put",
        url: fullUrl,
        data: { ...payload },
        headers: { ...headers },
      })
    );

    if (response.status !== 200) {
      return Promise.reject(response.data);
    }
    return response.data;
  } catch (error) {
    console.debug(error);
  }
  return {};
}
function* deleteAxios(fullUrl, payload, headers) {
  try {
    const response = yield Promise.resolve(
      axios({
        method: "delete",
        url: fullUrl,
        data: { ...payload },
        headers: { ...headers },
      })
    );

    if (response.status !== 200) {
      return Promise.reject(response.data);
    }
    return response.data;
  } catch (error) {
    console.debug(error);
  }
  return {};
}

export const Axios = {
  get: (fullUrl, payload, headers) => getAxios(fullUrl, payload, headers),
  post: (fullUrl, payload, headers) => postAxios(fullUrl, payload, headers),
  put: (fullUrl, payload, headers) => putAxios(fullUrl, payload, headers),
  delete: (fullUrl, payload, headers) => deleteAxios(fullUrl, payload, headers),
};

export default Axios;
