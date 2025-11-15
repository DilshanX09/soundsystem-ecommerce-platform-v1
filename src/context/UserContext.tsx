import {
     createContext,
     useContext,
     useState,
     useEffect,
     type ReactNode,
} from "react";
import type { UserContext as UserType } from "../types/User.type";

type UserContextType = {
     user: UserType | null;
     setUser: (user: UserType | null, staySignedIn?: boolean) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {

     // Load ONLY if staySignedIn was enabled
     const [user, setUserState] = useState<UserType | null>(() => {
          try {
               const shouldPersist = localStorage.getItem("staySignedIn");
               if (shouldPersist === "true") {
                    const saved = localStorage.getItem("user");
                    return saved ? JSON.parse(saved) : null;
               }
               return null;
          } catch (e) {
               console.error("Failed to parse user from localStorage", e);
               return null;
          }
     });

     const setUser = (user: UserType | null, staySignedIn = false) => {
          setUserState(user);

          if (user && staySignedIn) {
               localStorage.setItem("staySignedIn", "true");
               localStorage.setItem("user", JSON.stringify(user));
          } else {
               // remove persistence
               localStorage.removeItem("staySignedIn");
               localStorage.removeItem("user");
          }
     };

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
