
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import mitt from 'mitt';


import { createApp } from 'vue'
// import findForm from './components/form/findForm'
import App from './App.vue'
const emitter = mitt();
// library.add(faPhone);
// // createApp(App).mount('#app')
// library.add(faPhone)
// app.config.globalProperties.emitter = emitter;
// createApp(findForm).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');