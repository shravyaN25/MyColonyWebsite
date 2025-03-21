import React from "react";
import Home from "./components/Home"; // Import Home component

const App: React.FC = () => {
    return (
        <div>
            <Home /> {/* Now Home will handle ContactForm */}
        </div>
    );
};

export default App;
