import { getDatabase, push, ref, set } from "firebase/database";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainRoutes from "./routes/MainRoutes";
import { v4 as uuidv4 } from "uuid";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

function App() {
<<<<<<< HEAD
    return (
        <div>
            <Header />
            <MainRoutes />
            <Footer />
        </div>
    );
=======
  const register = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    const auth = getAuth();
    auth.languageCode = "it";

    provider.setCustomParameters({
      login_hint: "hamzasaparbekov123@gmail.com",
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
      name: "Iphone212",
      category: "Phone212",
    };
    const db = getDatabase();
    const dbRef = ref(db, "itemsss/" + product.id);

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
>>>>>>> 7e0de1e203051d470d1e84f265a9a2f21b0ae4e6
}
export default App;
