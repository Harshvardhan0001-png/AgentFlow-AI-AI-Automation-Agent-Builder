
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL || "https://agentflow-ai-ai-automation-agent-builder-ncl4.onrender.com/",
  withCredentials: true,
});

export default api;
