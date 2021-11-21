import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";

export const DashboardScreen = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Header />
            <div className="container mt-2">
                <Routes>
                    {/* <Route path="/marvel" element={<HomeScreen />} />
                    <Route path="/hero/:heroeId" element={<SensorScreen />} />
                    <Route path="/dc" element={<UsuariosScreen />} />
                    <Route path="/search" element={<CrudSensorScreen />} />

                    <Route path="/" element={<HomeScreen />} /> */}
                </Routes>
            </div>
            <Footer />
        </>
    );
};
