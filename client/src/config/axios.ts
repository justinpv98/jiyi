import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
});

axiosInstance.interceptors.response.use(
  (res) => {
    
    // Return the response if it is successful
    return res;
  },
  async (err) => {
    // Get the original config object from the error object

    const originalConfig = err.config;

    // Check if the request is not a login request and there is an error response
    if (originalConfig.url !== "/auth/login" && err.response) {

      // If the request has not been retried yet
      if (err.response.status === 401 && !originalConfig._retry) {

        // Mark the request as having been retried
        originalConfig._retry = true;

        // Try refreshing with the refresh token
        try {
          const res = await axiosInstance.post("/auth/refresh");

          // If the token refresh is successful, retry the original request
          return axiosInstance(originalConfig);
        } catch (error) {

          // If the token refresh fails, reject the error
          return Promise.reject(error);
        }
      }
    }

    // Reject the error if it is not handled by the interceptor

    return Promise.reject(err);
  }
);

export default axiosInstance;
