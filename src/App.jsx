import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/about";
import Home from "./components/home/home";
import Work from "./components/work/work";
import Navigation from "./components/everypage/navbar";
import Quote from "./components/quote/quote";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Work" element={<Work />} />
                    <Route path="Quote" element={<Quote />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
