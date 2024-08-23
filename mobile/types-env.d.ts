type Icon = {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
};

type Fetch = {
  domain: "general" | "mobile";
  accessToken?: string;
  feature: "auth" | "client" | "accounts" | "favorite" | "collection"|"recent";
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
  includeToken?: boolean;
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

type Account = {
  category: "PERSONAL" | "FINANCE" | "PROFESSIONAL";
  createdAt: string;
  credential: string;
  flag:
    | "SOCIAL_MEDIA"
    | "STREAMING_SERVICE"
    | "ONLINE_SHOPPING"
    | "FINANCE"
    | "WORK"
    | "GAMING";
  globalCategory: "SAVED_PASSWORD" | "SAVED_CREDENTIALS";
  id: string;
  image: string | null;
  lastUsedAt: string | null;
  note: string;
  password: string;
  title: string;
  updatedAt: string;
  userId: string;
};

type Accounts = {
  category: string;
  credential: string;
  flag:
    | "SOCIAL_MEDIA"
    | "STREAMING_SERVICE"
    | "ONLINE_SHOPPING"
    | "FINANCE"
    | "WORK"
    | "GAMING";
  globalCategory: "SAVED_PASSWORD" | "SAVED_CREDENTIALS";
  id: string;
  image: string | null;
  note:string;
  password:string;
  title: string;
};
