<template>
  <transition name="popap">
    <div class="side">
      <div class="side-ul">
        <div class="side-item" @click="closeSidenav">
          <router-link
            @click="closeSidenav"
            v-scroll-to="'#about'"
            to="/"
            active-class="active"
          >
            О центре
          </router-link>
        </div>
        <div class="side-item" @click="closeSidenav">
          <router-link v-scroll-to="'#semi'" to="/Semi" active-class="active">
            Семинары
          </router-link>
        </div>
        <div class="side-item" @click="closeSidenav">
          <router-link v-scroll-to="'#table'" to="/Table" active-class="active">
            Расписание
          </router-link>
        </div>
        <div class="side-item" @click="closeSidenav">
          <router-link v-scroll-to="'#society'" to="/Soc" active-class="active">
            Контакты
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "side",
  methods: {
    closeSidenav() {
      eventBus.$emit("close-sidenav");
    },
  },
};
</script>

<style>
</style>