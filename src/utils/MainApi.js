import { BASE_URL } from "./Constatnt";

function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status} ${res.statusText}`);
  }

  export const getCharacterInfo = async () => {
    const res = await fetch(`${BASE_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  };

  export const getCharacterPagination = async (count) => {
    const res = await fetch(`${BASE_URL}/?page=${count}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  };

  export const getCharacterId = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  };

  export const getCharacterFilter = async (name, value) => {
    console.log(name, value)
    const res = await fetch(`${BASE_URL}/?${name}=${value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  };