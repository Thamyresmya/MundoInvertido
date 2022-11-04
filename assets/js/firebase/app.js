  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyByv5ECl_q10ej5fl8O5ep0yLBQ4h2UpHM",
    authDomain: "projeto-mundo-invertido-c6c6e.firebaseapp.com",
    projectId: "projeto-mundo-invertido-c6c6e",
    storageBucket: "projeto-mundo-invertido-c6c6e.appspot.com",
    messagingSenderId: "171536273161",
    appId: "1:171536273161:web:73eb729a6dc17f609d0dd8",
    measurementId: "G-MJVFJ6VLTX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;
