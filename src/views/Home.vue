<template>
  <div class="home">
    <h1>用 Vue 做 CSS 小实验的项目</h1>
    <p class="subtitle">点击卡片进入对应练习页</p>
    <div class="grid">
      <router-link
        v-for="page in pages"
        :key="page.name"
        :to="page.path"
        class="card"
      >
        <span class="num">{{ page.index }}</span>
        <span class="title">{{ page.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { pages } from '../router/index.js'

const pageList = pages.map((p, i) => ({
  ...p,
  index: String(i + 1).padStart(2, '0'),
}))
</script>

<!-- 注意：这里故意用 scoped 样式，练习 CSS -->
<style scoped>
.home {
  min-height: 100vh;
  padding: 40px 20px;
  background: #0f0f1a;
  color: #fff;
  font-family: sans-serif;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 8px;
}

.subtitle {
  text-align: center;
  color: #888;
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  background: #1e1e2e;
  border: 1px solid #333;
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  transition: transform 0.2s, border-color 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  border-color: #7c6af7;
}

.num {
  font-size: 2rem;
  font-weight: bold;
  color: #7c6af7;
}

.title {
  font-size: 0.95rem;
  color: #ccc;
}
</style>
