import React from "react";
import Menu from "../component/Menu"

const HomeScreen: React.FC = () => {
    return (
        <div className="HomeScreen">
            <h1>Wordle </h1>
            <Menu />
        </div>
    );
}
export default HomeScreen;