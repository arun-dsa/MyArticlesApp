const envConfig = import.meta.env;

const { VITE_API_URL: API_URL } = envConfig;

export { API_URL };
