"use client";

import { createContext, useContext } from "react";

const AuthContext = createContext(null);

// Custom hook
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
