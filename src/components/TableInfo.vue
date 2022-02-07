<template>
  <div>
    <TInfoBl v-for="item in newItems" :item="item" :key="item.id" />
    <transition name="popap">
      <Modal v-if="isPopapVisible" @close-popap="showPopap()" />
    </transition>
  </div>
</template>

<script>
import TInfoBl from "./TableInfoBlock.vue";
import json from "@/components/data.json";
import Modal from "./Modal1.vue";
export default {
  name: "tinfo",
  components: {
    TInfoBl,
    Modal,
  },
  data() {
    return {
      items: json,
      isPopapVisible: false,
    };
  },
  computed: {
    newItems: function () {
      let id = this.$route.query.idblock;
      return this.items.filter((item) => item.id == id);
    },
  },
};
</script>
  
<style>
</style>