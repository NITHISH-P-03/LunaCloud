


import axios from "axios";

const API = axios.create({
  baseURL: "https://lunacloud.onrender.com", // backend base URL
});

// Auth token helper
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete API.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

const existingToken = localStorage.getItem("token");
if (existingToken) setAuthToken(existingToken);

// Auth APIs
export const registerUser = (payload) => API.post("/auth/register", payload);
export const loginUser = (payload) => API.post("/auth/login", payload);

// File APIs
export const getFiles = () => API.get("/files/");
export const deleteFile = (id) => API.delete(`/files/${id}`);
export const uploadFile = (formData) =>
  API.post("/files/upload", formData, { headers: { "Content-Type": "multipart/form-data" } });
export const renameFile = (id, newName) => API.put(`/files/rename/${id}`, { newName });

// Download file (forces download)
export const downloadFile = async (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename || "file");
  document.body.appendChild(link);
  link.click();
  link.remove();
};

// Open file in new tab
export const openFile = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};


// Delete account
export const deleteAccount = (id) => {
  return API.delete(`/users/delete-account/${id}`);
};

export default API;

