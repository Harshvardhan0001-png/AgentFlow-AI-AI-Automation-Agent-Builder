import api from "@/api";



export const fetchMeApi = async () => {
  const response = await api.get("/api/auth/me");
  return response.data.user;
};

export const loginApi = async (token) => {
  const response = await api.post(
    "/api/auth/login",
    { token },
    { withCredentials: true } // Yeh zaroori hai agar backend cookie set kar raha hai
  );
  console.log(response);
  
  // Agar backend response mein koi token bhej raha hai, toh use yahan save karein:
  // if (response.data.token) {
  //   localStorage.setItem("token", response.data.token);
  // }
  
  return response.data;
};

export const logoutApi = async () => {
  const response = await api.post("/api/auth/logout");
  return response.data;
};
