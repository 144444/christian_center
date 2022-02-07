<template>
  <nav class="nav">
    <transition name="anim">
      <div class="nav-wrapper" v-scroll="testScroll">
        <div class="nav-top">
          <Logo @show-popap="showPopap" />
        </div>
        <hr />
        <ul class="nav-ul">
          <li>
            <router-link v-scroll-to="'#about'" to="/" active-class="active">
              О центре
            </router-link>
          </li>
          <li>
            <router-link v-scroll-to="'#semi'" to="/Semi" active-class="active">
              Семинары
            </router-link>
          </li>
          <li>
            <router-link
              v-scroll-to="'#table'"
              to="/Table"
              active-class="active"
            >
              Расписание
            </router-link>
          </li>
          <li>
            <router-link
              v-scroll-to="'#society'"
              to="/Soc"
              active-class="active"
            >
              Контакты
            </router-link>
          </li>
          <transition name="popap" mode="out-in">
            <i
              class="material-icons menu"
              v-if="!showSideVisible"
              @click="showSidenav"
              key="menu"
              >menu</i
            >
            <i
              class="material-icons clear"
              v-else
              @click="closeSidenav"
              key="clear"
              >clear</i
            >
          </transition>
        </ul>
        <hr />
        <transition name="sidemenu">
          <Sidenav v-if="showSideVisible" @close-sidenav="closeSidenav" />
        </transition>
      </div>
    </transition>
    <transition name="popap">
      <Modal v-if="isPopapVisible" @close-popap="showPopap" />
    </transition>
    <transition>
      <div class="nav-text1">
        Ибо так Бог возлюбил мир,<br />что отдал Сына Своего Единородного,<br />дабы
        всякий, верующий в Него, имел жизнь вечную.<br /><span
          >Библия, Ин.3,16</span
        >
      </div>
    </transition>
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";
import vSelect from "@/components/v-select.vue";
import VSelect from "./v-select.vue";
import Modal from "./Modal1.vue";
import { eventBus } from "../main";
import Sidenav from "./Sidenav.vue";
export default {
  name: "navbar",
  components: {
    Logo,
    vSelect,
    Modal,
    Sidenav,
  },
  data: () => {
    return {
      showSideVisible: false,
      // optionLinks1: [
      //   {
      //     href: "/mylink1",
      //     name: "Аудиопроповеди",
      //   },
      //   {
      //     href: "/mylink2",
      //     name: "Видеопроповеди",
      //   },
      //   {
      //     href: "/mylink3",
      //     name: "Конференции",
      //   },
      //   {
      //     href: "/mylink4",
      //     name: "Вопросы и ответы",
      //   },
      // ],
      // optionLinks2: [
      //   {
      //     href: "/high",
      //     name: "Приглашение",
      //   },
      //   {
      //     href: "/mylink2",
      //     name: "Символ веры",
      //   },
      //   {
      //     href: "/believe",
      //     name: "Во что мы верим?",
      //   },
      // ],
      // optionLinks3: [
      //   {
      //     href: "/mylink1",
      //     name: "Расписание",
      //   },
      //   {
      //     href: "/mylink2",
      //     name: "Мероприятия",
      //   },
      //   {
      //     href: "/mylink3",
      //     name: "События",
      //   },
      // ],
      isPopapVisible: false,
    };
  },
  methods: {
    testScroll: (evt, el) => {
      if (window.scrollY > 30) {
        el.classList.add("fixed");
      } else {
        el.classList.remove("fixed");
      }
    },
    showPopap() {
      this.isPopapVisible = !this.isPopapVisible;
    },
    showSidenav() {
      this.showSideVisible = !this.showSideVisible;
    },
    closeSidenav() {
      this.showSideVisible = false;
    },
  },
  created() {
    eventBus.$on("show-popap", (data) => {
      this.isPopapVisible = !this.isPopapVisible;
    });
    eventBus.$on("close-sidenav", (data) => {
      this.showSideVisible = !this.showSideVisible;
    });
  },
  //  eventBus.$on("close-sidenav", (data) => {
  //     this.showSideVisible = !this.showSideVisible;
  //   });
};
</script>

<style lang="scss" scoped>
.menu {
  font-size: 40px;
}
.popap-enter-active,
.popap-leave-active {
  transition: opacity 0.5s;
}
.popap-enter,
.popap-leave-to {
  opacity: 0;
}
.sidemenu-enter-active,
.sidemenu-leave-active {
  transition: opacity 0.5s;
}
.sidemenu-enter,
.sidemenu-leave-to {
  animation: 1s menu-slade forwards;
  opacity: 0;
}
@keyframes menu-slade {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(100px);
  }
}
</style>
