import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "../context";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Home from "../pages/Home";
import Country from "../pages/Country";
import NotFound from "../pages/NotFound";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Context>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="country/:code" element={<Country />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Context>
        </BrowserRouter>
    );
};

export default RoutesApp;
