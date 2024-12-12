<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

const map = ref()
const circleTool = ref()

function onLoad() {
  //初始化地图对象
  map.value = new T.Map('map-3', {
    projection: 'EPSG:4326' // 默认为百度墨卡托坐标
  })
  //设置显示地图的中心点和级别
  map.value.centerAndZoom(new T.LngLat(117.33001, 31.81325), 18)
  //允许鼠标滚轮放大地图
  map.value.enableScrollWheelZoom()
  circleTool.value = new T.CircleTool(map.value, {
    color: 'blue',
    weight: 3,
    opacity: 0.5,
    fillColor: '#FFFFFF',
    fillOpacity: 0.5
  })
  circleTool.value.on('drawend', function (e) {
    onDrawCircle(e.currentCenter, e.currentRadius)
  })
}

function onDrawCircle(center, radius) {
  console.log(center, radius)
}

onMounted(() => {
  onLoad()
})

onBeforeUnmount(() => {
  map.value = null
  circleTool.value = null
})
</script>

<template>
  <div class="circle-tool-wrapper w-full h-full relative">
    <div id="map-3" class="w-full h-full"></div>
    <div class="toolbar absolute top-20px left-20px z-9999 flex gap-col-6px">
      <button @click="circleTool.open">开启绘制</button>
      <button @click="circleTool.close">关闭绘制</button>
      <button @click="circleTool.clear">清除</button>
    </div>
  </div>
</template>

<style scoped></style>
