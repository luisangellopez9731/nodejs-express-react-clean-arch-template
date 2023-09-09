import axios, { AxiosError } from "axios";
import { ServerControlledError, ServerError } from "common/errorTypes";

export const post = async (...params: Parameters<typeof axios.post>) => {
  try {
    const response = await axios.post(...params);

    return response.data;
  } catch (error: Error | AxiosError | any) {
    if (axios.isAxiosError(error) && error.response?.data?.error_code) {
      const data = error.response.data;
      throw new ServerControlledError({
        name: error.name,
        error_code: data.error_code,
        message: error.message,
        cause: error,
      });
    } else {
      throw new ServerError({
        name: error.name,
        message: error.message,
        cause: error,
      });
    }
  }
};
