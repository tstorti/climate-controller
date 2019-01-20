import Vue from 'vue';
import App from './App.vue';
import config from './../config';
import * as firebase from 'firebase';

const firebaseConfig = config.firebase;

firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
//const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
