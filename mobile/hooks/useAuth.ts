import { Auth } from "@/providers/AuthProvider";
import { useContext } from "react";

const useAuth = () => useContext(Auth);

export default useAuth;
