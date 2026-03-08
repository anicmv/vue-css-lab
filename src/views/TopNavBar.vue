<template>
  <BackHome /> <!-- 返回首页组件 -->
  <header class="site-header"> <!-- 顶部导航栏容器 -->
    <div class="site-header__inner"> <!-- 导航内容的最大宽度居中容器 -->
      <a class="brand" href="#">MySite</a> <!-- 左侧品牌 Logo / 站点名 -->

      <nav aria-label="Main navigation"> <!-- 语义化导航 -->
        <ul class="nav-list"> <!-- 导航列表 -->
          <li><a class="nav-link is-active" href="#" aria-current="page">Home</a></li> <!-- 当前页 -->
          <li><a class="nav-link" href="#">About</a></li>
          <li><a class="nav-link" href="#">Services</a></li>
          <li><a class="nav-link" href="#">Portfolio</a></li>
          <li><a class="nav-link" href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import BackHome from "@/components/BackHome.vue"; // 引入返回首页组件
</script>

<style scoped>
.site-header {
  position: sticky; /* 吸顶定位（滚动时停在顶部） */
  top: 0; /* 吸顶偏移为 0，贴顶部 */
  z-index: 100; /* 提高层级，避免被正文盖住 */
  width: 100%; /* 占满整行宽度 */
  background: #fff; /* 顶栏背景白色 */
  border-bottom: 1px solid #eaeaea; /* 底部分割线 */
}

.site-header__inner {
  max-width: 1200px; /* 内容最大宽度，主流布局常用 */
  height: 64px; /* 顶栏高度 */
  margin: 0 auto; /* 水平居中容器 */
  padding: 0 24px; /* 左右内边距 */
  display: flex; /* 使用弹性布局 */
  align-items: center; /* 垂直居中对齐 */
  justify-content: space-between; /* 左右两端分布（品牌在左，导航在右） */
}

.brand {
  color: #111827; /* 品牌文字颜色 */
  text-decoration: none; /* 去掉默认下划线 */
  font-size: 20px; /* 品牌字号 */
  font-weight: 700; /* 品牌加粗 */
  letter-spacing: 0.2px; /* 轻微字间距 */
  white-space: nowrap; /* 防止品牌文字换行 */
}

nav {
  overflow-x: visible; /* 小屏时允许横向滚动，防止菜单挤压换行 */
}

.nav-list {
  display: flex; /* 导航项横向排列 */
  align-items: center; /* 导航项垂直居中 */
  gap: 24px; /* 项与项之间的间距 */
  margin: 0; /* 清除 ul 默认外边距 */
  padding: 0; /* 清除 ul 默认内边距 */
  list-style: none; /* 去掉列表圆点 */
}

.nav-link {
  position: relative; /* 给伪元素下划线提供定位基准 */
  display: inline-block; /* 让宽高/内边距表现稳定 */
  padding: 8px 2px; /* 链接点击热区，提升可点性 */
  color: #374151; /* 默认文字颜色 */
  text-decoration: none; /* 去掉默认下划线 */
  text-transform: uppercase; /* 文本转大写 */
  font-size: 14px; /* 导航字号 */
  font-weight: 500; /* 字重中等 */
  letter-spacing: 0.6px; /* 大写字母更易读 */
  white-space: nowrap; /* 单个菜单文字不换行 */
  transition: color .2s ease; /* 文字颜色过渡动画 */
}

.nav-link::after {
  content: ""; /* 创建伪元素下划线 */
  position: absolute; /* 绝对定位到链接底部 */
  left: 0; /* 从链接左侧开始 */
  bottom: -2px; /* 稍微下移，让线和文字有间距 */
  width: 100%; /* 线条长度等于链接宽度 */
  height: 2px; /* 线条粗细 */
  background: lightskyblue; /* 线条颜色 */
  transform: scaleX(0); /* 初始缩放为 0，不显示 */
  transform-origin: left; /* 动画起点在左边（左到右展开） */
  transition: transform .25s ease; /* 只对 transform 做过渡 */
}

.nav-link:hover,
.nav-link:focus-visible,
.nav-link.is-active {
  color: #111827; /* 悬停/键盘聚焦/当前页时文字变深 */
}

.nav-link:hover::after,
.nav-link:focus-visible::after,
.nav-link.is-active::after {
  transform: scaleX(1); /* 下划线展开为完整宽度 */
}

.nav-link:focus-visible {
  outline: 2px solid #93c5fd; /* 键盘导航可见焦点框 */
  outline-offset: 4px; /* 焦点框与文字留一点距离 */
  border-radius: 2px; /* 焦点框轻微圆角 */
}

@media (max-width: 768px) {
  .site-header__inner {
    height: 56px; /* 小屏降低顶栏高度 */
    padding: 0 16px; /* 小屏减少左右留白 */
  }

  .brand {
    font-size: 18px; /* 小屏品牌字号略小 */
  }

  .nav-list {
    gap: 14px; /* 小屏菜单项间距缩小 */
  }

  .nav-link {
    font-size: 13px; /* 小屏导航字号略小 */
    letter-spacing: 0.4px; /* 小屏字间距微调 */
  }
}
</style>
