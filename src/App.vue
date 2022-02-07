
 <template>
  <div id="app">
    <NavBar />
    <div class="container" id="container">
      <transition name="fade"><router-view /></transition>
    </div>
    <!-- <Modal ref="modal" /> -->
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Modal from "./components/Modal1.vue";
export default {
  name: "app",
  components: {
    NavBar,
    Footer,
    Modal,
  },
};
</script>

<style lang="scss" scoped>
@import "~materialize-css/dist/css/materialize.min.css";
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }
</style>
