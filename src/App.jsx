// Components
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";

// Others
import "./assets/css/App.css";

// Making the component (Using Arrow function)
const App = () => {

    return (
        <div>
            <Navigation/>
            <HeroSection/>
        </div>
    );
};

// Export, so it could be used in main.jsx
export default App;