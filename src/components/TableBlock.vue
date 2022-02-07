<template>
  <div class="table_block-item">
    <div class="table_block-item_present">
      <div class="line_date">
        <div class="date">
          <span class="date_number">{{ item.date_number }}</span>
          <!-- <span class="date_week">{{ item.date_week }}</span> -->
        </div>
        <div class="title">
          {{ item.title }}
        </div>
      </div>
      <div class="line_speaker">
        <div class="time">
          <div class="time_place">{{ item.time_place }}</div>
          <div class="time_when">{{ item.time_when }}</div>
          <div class="sign_up" @click="showPopap()">{{ item.sign_up }}</div>
        </div>
        <div class="speaker">
          <div class="speaker_foto"></div>
          <div class="speaker_text">{{ item.speaker_text }}</div>
        </div>
      </div>
    </div>
    <div
      class="table_block-item_click"
      @click="$router.push({ path: 'tinfo', query: { idblock: item.id } })"
    >
      <span>{{ item.vebinar }}</span>
    </div>
  </div>
</template>

<script>
import TInfo from "@/components/TableInfo.vue";
import Modal from "./Modal1.vue";
import { eventBus } from "../main";
export default {
  name: "tblock",
  methods: {
    showPopap() {
      eventBus.$emit("show-popap");
    },
  },
  components: {
    TInfo,
    Modal,
  },
  props: ["item"],
};
</script>

<style>
</style>