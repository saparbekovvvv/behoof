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
}

export default App;
