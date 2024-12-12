<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

const map = ref()

function initMap() {
  //初始化地图对象
  map.value = new T.Map('map-1', {
    projection: 'EPSG:4326' // 默认为百度墨卡托坐标
  })
  //设置显示地图的中心点和级别
  map.value.centerAndZoom(new T.LngLat(117.33001, 31.81325), 18)
  // map.value.centerAndZoom(new T.LngLat(117.34282, 31.81764), 18)
  //允许鼠标双击放大地图
  map.value.enableScrollWheelZoom()
}

function destroyMap() {
  map.value.destroy()
}

onMounted(() => {
  initMap()
})

onBeforeUnmount(() => {
  map.value = null
})
</script>

<template>
  <div class="basic-map-wrapper w-full h-full">
    <div id="map-1" class="w-full h-full"></div>
  </div>
</template>

<style scoped></style>
