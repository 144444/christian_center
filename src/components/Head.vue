<template>
  <div>
    <HBlock v-for="item in newSemies" :item="item" :key="item.id" />
  </div>
</template>

<script>
import HBlock from "./HeadBlock.vue";
import json from "../components/data.json";
export default {
  name: "head",
  components: {
    HBlock,
  },
  data() {
    return {
      items: json,
    };
  },
  computed: {
    newSemies: function () {
      let id = this.$route.query.idblock;
      return this.items.filter((item) => item.id == id);
    },
  },
};
</script>
  
<style>
</style>