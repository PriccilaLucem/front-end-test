import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://h1u252zx2f.execute-api.us-east-1.amazonaws.com/sessions',
  });

export default apiClient;