<template>
  <div class="logo">
    <div class="logo-present">
      <div class="logo-img">Logo</div>
      <p class="logo-text">
        Мы проповедуем Христа и при том распятого,<br />воскресшего и вновь
        грядущего
      </p>
    </div>
    <div class="logo-icon">
      <div class="phone">
        <i class="material-icons">local_phone</i>
        <div class="logo-tele">
          <a href="tel:+79106410556">+7(910)641-05-56</a>
        </div>
      </div>
      <div class="office">
        <i class="material-icons">local_post_office</i>
        <div class="logo-letter">
          <a class="logo-link" href="mailto:victor_ternovsky@mail.ru"
            >Напишите нам</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logo",
  methods: {
    showPopap() {
      this.$emit("show-popap");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>