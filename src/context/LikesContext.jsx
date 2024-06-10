import React, { createContext, useState } from 'react';

export const LikesContext = createContext();

const LikesProvider = ({ children }) => {
    const [likes, setLikes] = useState([]);

    return (
        <LikesContext.Provider value={{ likes, setLikes }}>
            {children}
        </LikesContext.Provider>
    );
};

export default LikesProvider;
