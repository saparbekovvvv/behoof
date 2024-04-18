import React from "react";
import Hero from "../../components/hero/Hero";
import Auth from "../../components/auth/Auth";
import Favorite from "../../favorite/favorite";

const Main: React.FC = () => {
    return (
        <>
            <Hero />
            <Auth />
            <Favorite />
        </>
    );
};

export default Main;
