import axios from "@/api/axios";

// 测试banner
export const getBannerData = () => {
  return axios.request({
    url: "banner",
    method: "get"
  });
};

// 测试user
export const getUserData = () => {
  return axios.request({
    // url: "user",
    url: "username",
    method: "get"
  });
};

// elm position
export const getPosiData = () => {
  return axios.request({
    url: "posi",
    method: "get"
  });
};

// elm entries
export const getEntriesData = () => {
  return axios.request({
    url: "entries",
    method: "get"
  });
};

// elm restaurants
export const getRestaurantsData = () => {
  return axios.request({
    url: "restaurants",
    method: "get"
  });
};
