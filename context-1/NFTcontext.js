import React, { useState, useEffect } from "react";
import axios from "axios";

export const NFTcontext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
    //const [nfts, setNFTs] = useState([]);

    const getDate = async () => {
        const URL = "http://localhost:4000/api/v1/nfts";
        axios.get(URL).then((res) => {
            //const persons = JSON.parse(res.data);
            const data = res.data;
            console.log(data);
        });
    };

    useEffect(() => {
        getDate();
    }, []);
    return <NFTcontext.Provider value={{}}>{children}</NFTcontext.Provider>;
};