<template>
  <div id="home">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <van-icon name="search" size="18" />
      </template>
      <template #title>
        <span>{{ titlePosition }}</span>
      </template>
      <template #right>
        <span class="iconfont icon-wode"></span>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar, Icon } from "vant";
// @ is an alias to /src
import { getPosiData, getEntriesData, getRestaurantsData } from "@/api/data";

export default {
  name: "Home",
  components: {
    "van-nav-bar": NavBar,
    "van-icon": Icon
  },
  data() {
    return {
      titlePosition: ""
    };
  },
  methods: {
    onClickLeft() {},
    onClickRight() {}
  },
  async mounted() {
    // let posiRes = await getPosiData();
    // console.log(posiRes);
    getPosiData()
      .then(result => {
        this.titlePosition = result.name;
      })
      .catch(err => {
        console.log(err);
      });

    // let entriesRes = await getEntriesData();
    // console.log(entriesRes);
    (async () => {
      let entriesRes = await getEntriesData();
      console.log(entriesRes);
    })();

    // let restaurantsRes = await getRestaurantsData();
    // console.log(restaurantsRes);
    getRestaurantsData()
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
#home {
  width: 100vw;
}
</style>
