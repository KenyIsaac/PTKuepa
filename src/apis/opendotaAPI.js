import axios from "axios";

export default axios.create({
  baseURL: "https://api.opendota.com/api"
});


//Se usa axios para el llamado de la api externa de Defense of the Ancients