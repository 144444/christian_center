<template>
  <div>
    <div class="society" id="society">
      <div class="society__where">
        <div class="society__h3">
          <h3>Как нас найти</h3>
        </div>
        <hr />
        <p class="society__where-text">
          Россия, г. Москва, ул. Таежная, дом 2А,Церковь "На Лосинке", Email:
          church@slovo.org, Телефон: (360) 687-3962
        </p>
      </div>
      <div class="society__map">
        <div id="map"></div>
      </div>
      <br />
      <br />
      <br />
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "soc",
  mounted() {
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 55.8822, lng: 37.70044 },
      zoom: 8,
    });
    let marker = new google.maps.Marker({
      position: { lat: 55.8822, lng: 37.70044 },
      map: map,
      title: "Церковь: На Лосинке",
    });
  },
};
</script>

<style>
</style>