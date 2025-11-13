import axios from "axios";

const apiService = axios.create({
     baseURL: 'http://localhost:5000/sound-crafters/api/v1',
     withCredentials: true,
     headers: {
          'Content-Type': 'application/json',
     }
});

export default apiService;