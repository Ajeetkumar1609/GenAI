import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {   

    // here we store userdata and is user, loading or not

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <AuthContext.Provider value={{user, setUser, loading, setLoading}} >
            {children}
        </AuthContext.Provider>
    );    
}

