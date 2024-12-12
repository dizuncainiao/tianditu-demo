<script setup lang="ts">
import { RouterView } from 'vue-router'
import { BcLayout } from 'bdsaas-bc'

const options = ref<any>({
  menuData: [
    {
      groupName: '基础功能',
      showGroup: true,
      children: [
        {
          title: '基础地图',
          routeName: 'BasicMap',
          showItem: true,
          authKeys: []
        },
        {
          title: '添加覆盖物',
          routeName: 'AddCoverings',
          showItem: true,
          authKeys: []
        },
        {
          title: '画圆工具',
          routeName: 'CircleTool',
          showItem: true,
          authKeys: []
        }
      ]
    }
  ],
  showMenu: true
})
</script>

<template>
  <BcLayout :options="options">
    <RouterView />
  </BcLayout>
</template>

<style scoped></style>
