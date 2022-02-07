<template>
  <div class="decoding">
    <h3>{{ item.header }}</h3>
    <hr />
    <br />
    <div class="decoding__content">
      <div class="decoding__content-section">
        <div class="decoding__content-img">
          <img :src="item['img-foto']" alt="" />
        </div>
        <p class="decoding__content-text">{{ item.content_text }}</p>
      </div>

      <div class="decoding__content-plus">
        <div class="decoding__content-plus-ticket">
          <div class="decoding__content-plus-top">
            <div class="first">{{ item.first }}<span>Вторник</span></div>
            <div class="second">{{ item.second }}</div>
          </div>
          <div class="decoding__content-plus-bottom">
            <div class="time">{{ item.time }}</div>
            <div class="info">{{ item.info }}</div>
          </div>
        </div>
        <div class="decoding__content-plus-button" @click="showPopap">
          {{ item.plus_botton }}
        </div>
        <h5>Спикер</h5>
        <div class="decoding__content-plus-speacer">
          <div class="foto"></div>
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <br />
    <hr />
  </div>
</template>

<script>
import Modal from "./Modal1.vue";
import { eventBus } from "../main";
export default {
  name: "tinfobl",
  props: ["item"],
  components: {
    Modal,
  },
  methods: {
    showPopap() {
      eventBus.$emit("show-popap");
    },
  },
};
</script>

<style>
</style>