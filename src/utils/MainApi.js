import { CHARACTER_URL, EPISODES_URL, LOCATION_URL } from "./Constatnt";

function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status} ${res.statusText}`);
  }

  export const getCharacterInfo = async () => {
    const res = await fetch(`${CHARACTER_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  };

  export const getLocationInfo = async () => {
    const res = await fetch(`${LOCATION_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  };

  export const getEpisodesInfo = async () => {
    const res = await fetch(`${EPISODES_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  };

  export const getCharacterPagination = async (count) => {
    const res = await fetch(`${CHARACTER_URL}/?page=${count}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  };

  export const getCharacterId = async (id) => {
    const res = await fetch(`${CHARACTER_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  };

  export const getCharacterFilter = async (name, value) => {
    const res = await fetch(`${CHARACTER_URL}/?${name}=${value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  };

  