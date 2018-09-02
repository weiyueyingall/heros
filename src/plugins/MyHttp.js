import axios from 'axios';

const MyHttp = {};

MyHttp.install = function(Vue) {
    axios.defaults.baseURL = 'http://localhost:3001/';
    Vue.prototype.$axios = axios;
}

export default MyHttp;