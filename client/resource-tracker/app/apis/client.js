import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://192.168.1.11:3000/api"
});

export default apiClient;   
