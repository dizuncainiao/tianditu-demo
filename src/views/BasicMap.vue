<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

const map = ref()

function initMap() {
  //初始化地图对象
  map.value = new T.Map('map-1')
  //设置显示地图的中心点和级别
  map.value.centerAndZoom(new T.LngLat(116.40769, 39.89945), 12)
  // map.value.centerAndZoom(new T.LngLat(117.34282, 31.81764), 18)
  //允许鼠标双击放大地图
  map.value.enableScrollWheelZoom()
}

// IP城市定位 fixme 官网例子的中接口都报错
function getLocationOfIP() {
  const lc = new T.LocalCity()
  console.log(new T.LocalCityResult())
  lc.location(function (e) {
    alert(e.cityName)
  })
}

// H5 定位
function getLocationOfH5() {
  const lo = new T.Geolocation()
  console.log(lo, 'lo')
  lo.getCurrentPosition(e => {
    console.log(e, 'h5 定位')
  })
}

function setMapCenter() {
  map.value.centerAndZoom(new T.LngLat(117.33001, 31.81325), 12)
}

function handleClick() {
  console.log('click')
  setMapCenter()
}

onMounted(() => {
  initMap()
})

onBeforeUnmount(() => {
  map.value = null
})
</script>

<template>
  <div class="basic-map-wrapper w-full h-full relative">
    <div id="map-1" class="w-full h-full"></div>
    <div class="toolbar absolute top-20px left-20px z-9999 flex gap-col-6px">
      <button @click="handleClick">手动设置一个位置</button>
    </div>
  </div>
</template>

<style scoped></style>
