<template>
  <div class="semi" id="semi">
    <h3>Смотрите семинары</h3>
    <hr />
    <br />
    <div class="semi_block">
      <sBlock v-for="item in items" :item="item" :key="item.id" />
    </div>
    <br />
    <hr />
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import sBlock from "@/components/SemiBlock.vue";
import json from "@/components/data.json";

export default {
  name: "semi",
  components: {
    Head,
    sBlock,
  },
  data() {
    return {
      items: json,
    };
  },
};
</script>

<style lang="scss" scoped>
.sked-enter-active,
.sked-leave-active {
  transition: opacity 0.5s;
}
.sked-enter,
.sked-leave-to {
  opacity: 0;
}
// #scroll {
//   max-width: 100%;
//   height: 2px;
// }
</style>