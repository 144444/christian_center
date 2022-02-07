<template>
  <div class="table" id="table">
    <h3>Расписание</h3>
    <hr />
    <br />
    <br />
    <div class="table_block">
      <tBlock v-for="item in newTables" :item="item" :key="item.id" />
    </div>
    <br />
    <hr />
  </div>
</template>

<script>
import TInfo from "../components/TableInfo.vue";
import tBlock from "@/components/TableBlock.vue";
import json from "@/components/data.json";
import { eventBus } from "../main";
export default {
  name: "tble",
  components: {
    TInfo,
    tBlock,
  },
  data() {
    return {
      items: json,
      isPopapVisible: false,
    };
  },
  computed: {
    newTables: function () {
      return this.items.filter((item) => item.is_time_table == true);
    },
  },
  created() {
    eventBus.$on("show-popap", (data) => {
      this.isPopapVisible = !this.isPopapVisible;
    });
  },
};
</script>

<style>
.popap-enter-active,
.popap-leave-active {
  transition: opacity 0.5s;
}
.popap-enter,
.popap-leave-to {
  opacity: 0;
}
</style>