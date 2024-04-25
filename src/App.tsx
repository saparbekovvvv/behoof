<<<<<<< HEAD
import { getDatabase, push, ref, set } from "firebase/database";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainRoutes from "./routes/MainRoutes";
import { v4 as uuidv4 } from "uuid";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

function App() {
  const register = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    const auth = getAuth();
    auth.languageCode = "it";

    provider.setCustomParameters({
      login_hint: "hamzasaparbekov4@gmail.com",
    });

    // createUserWithEmailAndPassword(
    //   auth,
    //   "hamzasaparbekov0@gmail.com",
    //   "hamza2006"
    // ).then(() => {
    //   console.log("registered");
    // });
  };
  const addData = () => {
    const id = uuidv4();
    const product = {
      id,
      name: "Iphone21",
      category: "Phone",
    };
    const db = getDatabase();
    const dbRef = ref(db, "item/" + product.id);

    const newProductRef = push(dbRef);
    set(newProductRef, product).then(() => {
      console.log("success");
    });
  };
  return (
    <div>
      <Header />
      <input onChange={(e) => console.log(e.target.value)} type="text" />
      <button onClick={addData}>Add</button>
      <button onClick={register}>Register</button>
      <MainRoutes />
      <Footer />
    </div>
  );
=======
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainRoutes from "./routes/MainRoutes";

function App() {
    return (
        <div>
            <Header />
            <MainRoutes />
            <Footer />
        </div>
    );
>>>>>>> develop
}

export default App;
