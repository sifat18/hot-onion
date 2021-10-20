import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initAuthor = () => {

    initializeApp(firebaseConfig);

}
export default initAuthor;