<template>
  <BackHome />
  <div class="wrapper">
    <div v-for="(src, index) in images" :key="index">
      <img :src="src" :alt="`image ${index + 1}`" />
    </div>
  </div>
</template>

<script setup>
import BackHome from '../components/BackHome.vue'

const modules = import.meta.glob(
    '@/assets/imgs/MultiColumnWaterfall/*.jpeg',
    { eager: true }
)

// 按文件名中的数字排序
const images = Object.entries(modules)
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/\((\d+)\)/)?.[1])
      const numB = parseInt(b.match(/\((\d+)\)/)?.[1])
      return numA - numB
    })
    .map(([, mod]) => mod.default)
</script>

<style scoped>
.wrapper {
  width: 100%;
  column-count: 4;
  column-gap: 5px;
  padding: 5px;
}

.wrapper img {
  width: 100%;
}

@media (max-width: 980px) {
  .wrapper {
    column-count: 3;
  }
}

@media (max-width: 750px) {
  .wrapper {
    column-count: 2;
  }
}
</style>
