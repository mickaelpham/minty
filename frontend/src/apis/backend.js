import axios from "axios";

export default axios.create({
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json"
  }
});
