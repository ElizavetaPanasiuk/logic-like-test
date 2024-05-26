import axios, { type CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
  baseURL: "https://logiclike.com/docs", // I'd move it to .env file, but for this simple example left here
  headers: {
    "Content-Type": "application/json",
  },
  
};

const axiosBasic = axios.create(options);

export { axiosBasic };
