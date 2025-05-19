import { createContext, useEffect, useState, useContext } from 'react';

const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
    const [liked, setLiked] = useState(JSON.parse(localStorage.getItem('liked')) || []);

    useEffect(() => {
        localStorage.setItem('liked', JSON.stringify(liked));
    }, [liked]);

    return (
        <LikedContext.Provider value={{ liked, setLiked }}>
        {children}
        </LikedContext.Provider>
    );
};

export const useLiked = () => useContext(LikedContext);