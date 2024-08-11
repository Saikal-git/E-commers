import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAciEpigbW1Q89lWq-Fvo-Mg6UGWLphbwQ",
  authDomain: "organickauth-d2126.firebaseapp.com",
  projectId: "organickauth-d2126",
  storageBucket: "organickauth-d2126.appspot.com",
  messagingSenderId: "586094321995",
  appId: "1:586094321995:web:0cf8391864ed1d05cb48ce"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
