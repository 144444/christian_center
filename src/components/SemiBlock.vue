<template>
  <div class="semi_block-item">
    <div class="semi_block-item_present">
      <div class="title">{{ item.header }}</div>
      <div class="date">{{ item.date }}</div>
      <div class="speaker">
        <div class="speaker_foto"></div>
        <div class="speaker_name">{{ item.speaker }}</div>
      </div>
    </div>
    <div
      class="semi_block-item_click"
      @click="$router.push({ path: 'head', query: { idblock: item.id } })"
    >
      <span>Смотрeть</span>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
export default {
  name: "block",
  components: {
    Head,
  },
  props: ["item"],
};
</script>

<style>
</style>