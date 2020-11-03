import axios from "@/api/axios";

export const getBannerData = () => {
  return axios.request({
    url: "banner",
    method: "get"
  });
};

export const getUserData = () => {
  return axios.request({
    // url: "user",
    url: "username",
    method: "get"
  });
};
