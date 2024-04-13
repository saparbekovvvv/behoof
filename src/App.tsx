import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
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
