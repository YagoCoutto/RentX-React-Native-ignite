//criar base url e depois exportar {}

import axios from "axios";

const instanceAPI = axios.create({
    baseURL: 'http://192.168.10.115:3333'
});

export default instanceAPI;