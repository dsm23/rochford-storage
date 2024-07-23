<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import L from "leaflet";

  import "leaflet/dist/leaflet.css";
  import "leaflet.fullscreen";
  import "leaflet.fullscreen/Control.FullScreen.css";

  const refMap = ref<HTMLDivElement>();

  let config = {
    fullscreenControl: true,
    fullscreenControlOptions: {
      forceSeparateButton: true,
    },
    minZoom: 7,
    maxZoom: 18,
  } satisfies L.MapOptions;

  const initializeMap = () => {
    const map = L.map(refMap?.value as HTMLDivElement, config).setView(
      [51.57784, 0.71992],
      16,
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.57784, 0.71992]).addTo(map).bindPopup("Rochford Storage");

    map.addControl(new L.Control.Fullscreen());
  };

  onMounted(() => {
    if (window) {
      initializeMap();
    }
  });
</script>

<template>
  <div class="map" ref="refMap" />
</template>

<style>
  .map {
    width: 100%;
    height: 500px;
  }
</style>
