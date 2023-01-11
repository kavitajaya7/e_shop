 import { createContext , useState } from "react";


 export const UserContext = createContext({

  CurrentUser : null,
  setCurrentUser : () => {}

 });

 export const UserProvider = ({children}) => {

 const [CurrentUser , setCurrentUser] = useState(null);
 const value = {CurrentUser , setCurrentUser};

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
 }