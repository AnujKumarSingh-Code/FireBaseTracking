// firebase-config.js

// Firebase SDK initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyC9Ow3uTR47FoPQu_v31_1LwtqatjxkrBw",
    authDomain: "fir-testing-d1e78.firebaseapp.com",
    projectId: "fir-testing-d1e78",
    storageBucket: "fir-testing-d1e78.appspot.com",
    messagingSenderId: "493480488403",
    appId: "1:493480488403:web:f49a03878a7c91220c5326",
    measurementId: "G-LW84ZDN19Z"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
