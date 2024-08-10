import axios, { AxiosRequestConfig } from "axios";
import { API_URL, HEADER } from "@/config";

const useAxios = async ({
  domain,
  endpoint,
  feature,
  method,
  body,
  accessToken,
}: Fetch) => {
  const url = `${API_URL}${domain}/${
    accessToken ? "private" : "public"
  }/${feature}/${endpoint}`;

  try {
    const axiosConfig: AxiosRequestConfig = {
      method: method,
      url,
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && { [HEADER]: accessToken }),
      },
      data: body,
    };

    const res = await axios(axiosConfig);

    return res.data ;
  } catch (error: any) {
    console.error("Error in useAxios:", error);

    return {
      status: false,
      message: error.response?.data?.message || "Internal server error",
      data: null,
    };
  }
};

export default useAxios;
