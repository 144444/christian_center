<template>
  <div class="sked">
    <div class="sked__body">
      <div class="sked__content">
        <div class="sked__content-section">
          <h3>{{ item.header }}</h3>
          <hr />
          <p class="sked__content-text">{{ item.content_text }}</p>
          <div class="sked__content-img">
            <iframe
              width="100%"
              height="500px"
              :src="item['img-src']"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <a
              href="https://youtu.be/VbV01DZzS18"
              class="sked__content-img__button"
              >Подписывайтесь на наш канал</a
            >
          </div>
          <br />
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hblock",
  props: ["item"],
};
</script>

<style>
</style>