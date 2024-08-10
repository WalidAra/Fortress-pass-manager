import { HEADER } from "@/config";
import { asyncStorage } from "@/lib";
import { createContext, useEffect, useState } from "react";

type Props = {
  token: string;
  setToken: (token: string) => void;
  isLoading: boolean;
};

export const Auth = createContext<Props>({
  token: "",
  setToken: () => {},
  isLoading: true,
});
import React from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getToken = async () => {
      const storedToken = await asyncStorage.getItem(HEADER);

      if (storedToken) {
        setToken(storedToken);
      }

      setIsLoading(false);
    };

    getToken();
  }, []);

  return (
    <Auth.Provider value={{ token, setToken, isLoading }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;
