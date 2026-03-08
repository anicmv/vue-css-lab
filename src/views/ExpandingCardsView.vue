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

// 创建一个响应式变量 activeIndex 初始值是 0
// 0 表示默认第一个面板是激活状态（因为数组下标从 0 开始）
// ref(0) 会返回一个对象：{ value: 0 }
// 在 JS 里读写要用 activeIndex.value
// 在模板里可以直接写 activeIndex（Vue 会自动解包）
const activeIndex = ref(0)

const setActive = index => {
    activeIndex.value = index
}
</script>

<style scoped> /* 使用 scoped，样式只作用于当前组件 */
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap'); /* 导入 Muli 字体 */

body { /* 设置页面 body 的全局样式 */
  font-family: 'Muli', sans-serif; /* 设置默认字体为 Muli，后备字体 sans-serif */
  overflow: hidden; /* 隐藏滚动条，防止页面滚动 */
} /* body 样式结束 */

.container { /* 外层容器样式 */
  display: flex; /* 使用弹性布局，子元素横向排列 */
  width: 90vw; /* 容器宽度为视口宽度的 90% */
  min-height: 100vh; /* 容器最小高度为 100% 视口高度 */
  margin: 0 auto; /* 水平居中容器 */
  align-items: center; /* 交叉轴（纵向）居中子元素 */
  justify-content: center; /* 主轴（横向）居中子元素 */
} /* container 样式结束 */

.panel { /* 单个面板的基础样式 */
  background-size: cover; /* 背景图覆盖整个面板区域，保持比例 */
  background-position: center; /* 背景图居中显示 */
  background-repeat: no-repeat; /* 背景图不重复 */
  height: 80vh; /* 面板高度为视口高度的 80% */
  border-radius: 50px; /* 圆角 */
  color: #fff; /* 面板内文字颜色为白色 */
  cursor: pointer; /* 鼠标移入显示手型，提示可点击 */
  flex: 0.5; /* 默认占比较小，未激活状态 */
  margin: 10px; /* 面板外边距 */
  position: relative; /* 建立定位上下文，供 h3 绝对定位 */
  transition: all 500ms ease-in; /* 所有可过渡属性在 500ms 内平滑变化 */
} /* panel 样式结束 */

.panel h3 { /* 面板标题样式 */
  font-size: 24px; /* 标题字号 */
  position: absolute; /* 绝对定位标题 */
  bottom: 20px; /* 距离面板底部 20px */
  left: 20px; /* 距离面板左侧 20px */
  margin: 0; /* 清除默认外边距 */
  opacity: 0; /* 默认隐藏标题 */
} /* panel h3 样式结束 */

.panel.active { /* 激活状态的面板样式 */
  flex: 5; /* 激活时占据更多宽度 */
} /* panel.active 样式结束 */

.panel.active h3 { /* 激活状态下面板标题样式 */
  opacity: 1; /* 激活后显示标题 */
  transition: opacity 0.3s ease-in 0.4s; /* 标题透明度动画：时长 0.3s，延迟 0.4s */
} /* panel.active h3 样式结束 */

@media (max-width: 480px) { /* 小屏幕适配：屏宽 <= 480px 时生效 */
  .container { /* 小屏幕下容器样式 */
    width: 100vw; /* 容器宽度占满视口 */
  } /* 小屏幕 container 样式结束 */

  .panel:nth-of-type(4), /* 选中第 4 个面板 */
  .panel:nth-of-type(5) { /* 选中第 5 个面板 */
    display: none; /* 小屏幕隐藏第 4、5 个面板，避免过挤 */
  } /* 小屏幕面板隐藏规则结束 */
} /* 媒体查询结束 */
</style>

