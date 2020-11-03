<template>
  <div id="home">
    <h1 class="h1"><span class="iconfont icon-changyonglogo40"></span>home</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
// import Button from "vant/lib/button"; //全部导入方式不推荐
import { Button } from "vant";
// @ is an alias to /src
import {
  // getBannerData,
  // getUserData,
  getPosiData,
  getEntriesData,
  getRestaurantsData
} from "@/api/data";

export default {
  name: "Home",
  components: {
    "van-button": Button
  },
  async mounted() {
    // let BannerRes = await getBannerData();
    // console.log(BannerRes);
    // let userRes = await getUserData();
    // console.log(userRes);

    let posiRes = await getPosiData();
    console.log(posiRes);
    let entriesRes = await getEntriesData();
    console.log(entriesRes);
    let restaurantsRes = await getRestaurantsData();
    console.log(restaurantsRes);
  }
};
</script>

<style lang="scss" scoped>
#home {
  .h1 {
    // display: inline-flex; //不占满一行，占满内容
    display: flex; //占满一行
    align-items: center;
    width: 3.75rem;
    height: 1rem;
    background-color: skyblue;
    text-align: center;
  }

  .iconfont {
    font-size: 50px;
  }
}
</style>
