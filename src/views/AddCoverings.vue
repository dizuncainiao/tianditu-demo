<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

const map = ref()
//创建标注对象
const marker = new T.Marker(new T.LngLat(117.33001, 31.81325))

function initMap() {
  //初始化地图对象
  map.value = new T.Map('map-2', {
    projection: 'EPSG:4326' // 默认为百度墨卡托坐标
  })
  //设置显示地图的中心点和级别
  map.value.centerAndZoom(new T.LngLat(117.33001, 31.81325), 18)
  //允许鼠标双击放大地图
  map.value.enableScrollWheelZoom()
  //向地图上添加标注
  map.value.addOverLay(marker)
}

onMounted(() => {
  initMap()
})

onBeforeUnmount(() => {
  map.value = null
})
</script>

<template>
  <div class="add-coverings-wrapper w-full h-full">
    <div id="map-2" class="w-full h-full"></div>
  </div>
</template>

<style scoped></style>
