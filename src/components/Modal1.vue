<template>
  <transition name="popap">
    <div class="popap">
      <div class="popap__body">
        <div class="popap__content">
          <div class="logo-present">
            <div class="logo-img">Logo</div>
          </div>
          <div class="popap__close">
            <h5>Закрыть</h5>
            <a href="#" class="popap__close-icon"
              ><i class="material-icons" @click="closePopap">close</i></a
            >
          </div>

          <h2 class="popap__title">Напишите нам</h2>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="icon_prefix" type="text" class="validate" />
                  <label for="icon_prefix" class="prefix">Ваше имя</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">phone</i>
                  <input id="icon_telephone" type="tel" class="validate" />
                  <label for="icon_telephone" class="telephone">Телефон</label>
                </div>
              </div>
              <div class="row" id="extop">
                <div class="input-field col s12">
                  <textarea
                    id="textarea1"
                    class="materialize-textarea"
                  ></textarea>
                  <label for="textarea1" class="textarea1"
                    >Ваше соообщение</label
                  >
                </div>
              </div>
            </form>
          </div>
          <transition name="popap__button">
            <button class="popap__button">
              <i class="material-icons">exit_to_app</i>
              Отправить
            </button>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  methods: {
    closePopap() {
      this.$emit("close-popap");
    },
  },
};
</script>

<style scoped>
.popap-enter-active,
.popap-leave-active {
  transition: opacity 0.5s;
}
.popap-enter,
.popap-leave-to {
  opacity: 0;
}
.logo-present {
  color: darkgray;
  width: 510px;
  margin-bottom: 95px;
}
nav i.material-icons {
  font-size: 2rem !important;
  color: #000 !important;
  height: 64px;
  display: flex;
  align-items: center;
}
</style>
