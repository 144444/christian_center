<template>
  <div class="v-select">
    <div class="title">
      <p>{{ title }}</p>
      <i class="material-icons">arrow_drop_down</i>
    </div>

    <div class="options">
      <router-link :to="link.href" v-for="(link, index) in optionLinks" :key="index">{{
        link.name
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    title: {
      type: String,
    },
    optionLinks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.v-select p {
  margin: 0;
  padding-left: 12px;
}
.v-select {
  width: 250px;
  position: relative;
  display: inline-block;
  height: 64px;
}
.title {
  cursor: pointer;
  display: flex;
}
.options {
  width: 100%;
  background-color: rgba(36, 34, 34, 0.678);

  flex-direction: column;
  position: absolute;
  top: 65px;
  opacity: 0.1;
  transition: all 1s;
  visibility: hidden;
}
.v-select:hover .options {
  visibility: visible;
  opacity: 1;
}
.options a {
  width: 250px;
  transition: background 0.5s;
}
.options a:hover {
  width: 100%;
  background: #868383;
}
</style>
