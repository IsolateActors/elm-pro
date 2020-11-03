<template>
  <div id="home">
    <h1 class="h1">home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { getBannerData, getUserData } from "@/api/data";

export default {
  name: "Home",
  components: {},
  async mounted() {
    let BannerRes = await getBannerData();
    console.log(BannerRes);
    let userRes = await getUserData();
    console.log(userRes);
  }
};
</script>

<style lang="scss" scoped>
#home {
  .h1 {
    width: 3.75rem;
    height: 1rem;
    background-color: skyblue;
  }
}
</style>
