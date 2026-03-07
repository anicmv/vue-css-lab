<template>
  <BackHome />
  <div class="container">
    <div
      v-for="(panel, index) in panels" 
      :key="index"
      class="panel"
      :class="{active: activeIndex === index}" 
      :style="{backgroundImage: `url(${panel.image})`, }"
      @click="setActive(index)"
      >
      <h3>{{ panel.title }}</h3>
    </div>
  </div>
</template>

<script setup>
import BackHome from '../components/BackHome.vue'
import { ref } from 'vue'

const panels = [
  {
    title: 'Explore The World',
    image: new URL('../assets/imgs/001.avif', import.meta.url).href
  },
  {
    title: 'Wild Forest',
    image: new URL('../assets/imgs/002.avif', import.meta.url).href
  },
  {
    title: 'Sunny Beach',
    image: new URL('../assets/imgs/003.avif', import.meta.url).href
  },
  {
    title: 'City on Winter',
    image: new URL('../assets/imgs/004.avif', import.meta.url).href
  },
  {
    title: 'Mountains - Clouds',
    image: new URL('../assets/imgs/005.avif', import.meta.url).href
  }
]

// 创建一个响应式变量 ⁠activeIndex 初始值是 ⁠0
// 0 表示默认第一个面板是激活状态（因为数组下标从 0 开始）
// ⁠ref(0) 会返回一个对象：⁠{ value: 0 }
// 在 JS 里读写要用 ⁠activeIndex.value
// 在模板里可以直接写 ⁠activeIndex（Vue 会自动解包）
const activeIndex = ref(0)

const setActive = index => {
    activeIndex.value = index
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

body {
    font-family: 'Muli', sans-serif;
    overflow: hidden;
}

.container {
  display: flex;
  width: 90vw;
  min-height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: all 500ms ease-in;
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 5;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}

</style>
