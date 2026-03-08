<template> <!-- 模板开始 -->
  <header class="site-header"> <!-- 顶部导航容器 -->
    <div class="site-header__inner"> <!-- 内容居中容器 -->
      <a class="brand" href="#">MySite</a> <!-- 左侧品牌文字 -->
      <nav> <!-- 导航区域 -->
        <ul class="nav-list"> <!-- 横向导航列表 -->
          <li><a class="nav-link" href="#">Home</a></li> <!-- 菜单项 -->
          <li><a class="nav-link" href="#">About</a></li> <!-- 菜单项 -->
          <li><a class="nav-link" href="#">Services</a></li> <!-- 菜单项 -->
          <li><a class="nav-link" href="#">Portfolio</a></li> <!-- 菜单项 -->
          <li><a class="nav-link" href="#">Contact</a></li> <!-- 菜单项 -->
        </ul> <!-- 导航列表结束 -->
      </nav> <!-- 导航区域结束 -->
    </div> <!-- 内容容器结束 -->
  </header> <!-- 顶部导航结束 -->
</template> <!-- 模板结束 -->

<script setup> // 组合式脚本开始
// 这里暂时不需要 JS 逻辑 // 占位说明
</script> // 组合式脚本结束

<style scoped> /* 作用域样式开始 */
.site-header { /* 顶部栏样式 */
  width: 100%; /* 占满页面宽度 */
  border-bottom: 1px solid #e5e7eb; /* 底部分割线 */
} /* 顶部栏样式结束 */

.site-header__inner { /* 顶部内容容器 */
  max-width: 1200px; /* 最大宽度，防止过宽 */
  height: 56px; /* 顶部栏高度 */
  margin: 0 auto; /* 水平居中 */
  padding: 0 16px; /* 左右留白 */
  display: flex; /* 使用弹性布局 */
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 左右分布 */
} /* 顶部内容容器结束 */

.nav-list { /* 导航列表 */
  display: flex; /* 横向排列 */
  gap: 16px; /* 菜单间距 */
  list-style: none; /* 去掉列表圆点 */
  margin: 0; /* 去掉默认外边距 */
  padding: 0; /* 去掉默认内边距 */
} /* 导航列表结束 */

.brand { /* 品牌文字 */
  color: #111827; /* 字体颜色 */
  text-decoration: none; /* 去掉下划线 */
  font-weight: 700; /* 字体加粗 */
} /* 品牌文字结束 */

.nav-link { /* 导航链接 */
  color: #374151; /* 链接颜色 */
  text-decoration: none; /* 去掉下划线 */
} /* 导航链接结束 */
</style> /* 作用域样式结束 */
