import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchTopAlbums, fetchSongs, fetchNewAlbums } from "../src/api/api";

function App() {
    const [data, setData] = useState({});

    const generateData = (key, source) => {
        source().then((data) => {
            setData((prevData) => {
                return{...prevData, [key]: data}; 
            })
        })
    }

    useEffect(() => {
        generateData("topAlbums", fetchTopAlbums);
        generateData("newAlbums", fetchNewAlbums);
        generateData("songs", fetchSongs);
    }, []);

    const {topAlbums = [], newAlbums = [], songs = []} = data;
  return (
    <>  
      <div>
      <Navbar/>
      <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
      </div>
    </>
  );
}

export default App;
