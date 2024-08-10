type Icon = {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
};

type Fetch = {
  domain: "general" | "mobile";
  accessToken?: string;
  feature: "auth" | "client";
  endpoint: "login" | "register" | "refresh" | "profile" | "update" | "delete";
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
};

type FetchResponse<T> = {
  status: boolean;
  message: string;
  data: T;
};

type accessToken = {
  accessToken: string;
};

type Client = {
  id: string;
  email: string;
  name: string;
  image: string | null;
  createdAt: string;
};
