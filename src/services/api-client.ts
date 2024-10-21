import axios from "axios";
// const apikey = import.meta.env.REACT_APP_API_KEY;
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "da93dd69efdd4e21a620d7164b72ed75",
  },
});
