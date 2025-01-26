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
    if (name.length === 1 && value.length === 1) {
      const stringPath = `${name[0]}=${value[0]}`;
      
      const res = await fetch(`${CHARACTER_URL}/?${stringPath}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return checkResponse(res);
    } 
    
    const queryParams = name.map((itemName, index) => {
      return `${itemName}=${value[index]}`;
    }).join('&');
  
    const res = await fetch(`${CHARACTER_URL}/?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  };

  