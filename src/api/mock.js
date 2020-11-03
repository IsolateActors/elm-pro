// 使用 Mock
var Mock = require("mockjs");
import position from "@/api/mockServeData/position";
import entries from "@/api/mockServeData/entries";
import restaurants from "@/api/mockServeData/restaurants";

// 配置请求延迟
Mock.setup({
  timeout: 1000
});

// // 可使用字符串匹配路劲
// Mock.mock("/api/user", {
//   username: "老周",
//   gender: "男",
//   age: 20,
//   type: "帅"
// });

// // 使用正则
// Mock.mock(/\/api\/user/gis, {
//   username: "老周",
//   gender: "男",
//   age: 20,
//   type: "帅"
// });

Mock.mock(/\/api\/user/gis, {
  username: "老周",
  mtime: "@datetime",
  "score|1-800": 800,
  "rank|1-100": 100,
  nickname: "@cname",
  address: "@url",
  imgUrl: "@image",
  email: "@email"
});

// posi
Mock.mock("/api/posi", position);
Mock.mock("/api/entries", entries);
Mock.mock("/api/restaurants", restaurants);
