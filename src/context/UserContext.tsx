import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { UserContext as UserType } from "../types/User.type";

type UserContextType = {
     user: UserType | null;
     setUser: (user: UserType | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {

     // Load saved user only on first render
     const [user, setUser] = useState<UserType | null>(() => {
          try {
               const saved = localStorage.getItem("user");
               return saved ? JSON.parse(saved) : null;
          } catch (e) {
               console.error("Failed to parse user from localStorage", e);
               return null;
          }
     });

     // Sync LocalStorage whenever user changes
     useEffect(() => {
          if (user) {
               localStorage.setItem("user", JSON.stringify(user));
          } else {
               localStorage.removeItem("user"); // clear on logout
          }
     }, [user]);

     return (
          <UserContext.Provider value={{ user, setUser }}>
               {children}
          </UserContext.Provider>
     );
};

export const useUser = () => {
     const context = useContext(UserContext);
     if (!context) throw new Error("useUser must be used within a UserProvider");
     return context;
};
