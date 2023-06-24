import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Contact from "./components/Contact";

function App() {
    const [darkMode, doSetDarkMode] = useState(false);

    const setDarkMode = (value) => {
        document.documentElement.classList.toggle("dark", value);
        doSetDarkMode(value);
    };

    return (
        <div className={` ${darkMode ? "dark" : ""}  `}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <main className="pt-3 md:pt-10 text-agblack dark:text-white">
                <Routes>
                    <Route path="/" element={<Intro />} />
                    {/* <Route path="/resume" element={<Resume />} /> */}
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
