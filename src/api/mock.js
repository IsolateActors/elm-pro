// 使用 Mock
var Mock = require("mockjs");

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

// var data = Mock.mock({
//   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//   "list|1-10": [
//     {
//       // 属性 id 是一个自增数，起始值为 1，每次增 1
//       "id|+1": 1
//     }
//   ]
// });
// // 输出结果
// console.log(JSON.stringify(data, null, 4));
