import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar"; // Assuming Navbar component is located here
import { Outlet } from "react-router-dom";
import { fetchTopAlbums, fetchSongs, fetchNewAlbums } from "./api/api"; // Assuming api functions are correctly located in this file

function App() {
    const [data, setData] = useState({});

    const generateData = (key, source) => {
        source().then((data) => {
            setData((prevData) => {
                return { ...prevData, [key]: data }; // Updating data object dynamically
            });
        });
    };

    useEffect(() => {
        generateData("topAlbums", fetchTopAlbums);   // Fetching Top Albums
        generateData("newAlbums", fetchNewAlbums);   // Fetching New Albums
        generateData("songs", fetchSongs);           // Fetching Songs
    }, []);

    const { topAlbums = [], newAlbums = [], songs = [] } = data; // Default values if data is empty

    return (
        <>  
            <div>
                <Navbar /> {/* Assuming Navbar is a valid component */}
                <Outlet context={{ data: { topAlbums, newAlbums, songs } }} /> {/* Passing the fetched data to Outlet */}
            </div>
        </>
    );
}

export default App;
