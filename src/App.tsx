import { getDatabase, push, ref, set } from "firebase/database";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const addData = () => {
    const product = {
      name: "Iphone212",
      category: "Phone212",
    };
    const db = getDatabase();
    const dbRef = ref(db, "itemsss/" + product);

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
      <MainRoutes />
      <Footer />
    </div>
  );
}
export default App;
