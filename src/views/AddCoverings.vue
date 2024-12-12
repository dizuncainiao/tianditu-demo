<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

const map = ref()
const lngLat = new T.LngLat(117.33001, 31.81325)
//创建标注对象
const marker = new T.Marker(lngLat)
//创建信息窗口对象
const infoWin = new T.InfoWindow()
infoWin.setLngLat(new T.LngLat(117.33001, 31.81345))
//设置信息窗口要显示的内容
infoWin.setContent('数企（中国）总部')

function initMap() {
  //初始化地图对象
  map.value = new T.Map('map-2')
  //设置显示地图的中心点和级别
  map.value.centerAndZoom(lngLat, 18)
  //允许鼠标双击放大地图
  map.value.enableScrollWheelZoom()
  //向地图上添加标注
  map.value.addOverLay(marker)
  //向地图上添加信息窗口
  map.value.addOverLay(infoWin)
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
