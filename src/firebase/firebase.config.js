import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyASZZQxCXbjKhUHzEa6Kl9Bx8jaVkl5Um8",
  authDomain: "thai-master-chef.firebaseapp.com",
  projectId: "thai-master-chef",
  storageBucket: "thai-master-chef.appspot.com",
  messagingSenderId: "245013522677",
  appId: "1:245013522677:web:0572b592d6b3880ce3fdbc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);