import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { API_URL, HEADER } from "@/config";

const useFetch = async ({
  domain,
  endpoint,
  feature,
  method,
  body,
  accessToken,
}: Fetch) => {
  const [response, setResponse] = useState<FetchResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const url = `${API_URL}${domain}/${
    accessToken ? "private" : "public"
  }/${feature}/${endpoint}`;

  useEffect(() => {
    const getData = async () => {
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
        setResponse(res.data as FetchResponse);
      } catch (error: any) {
        setResponse({
          status: false,
          message: "Internal server error",
          data: null,
        });
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { response, loading };
};

export default useFetch;