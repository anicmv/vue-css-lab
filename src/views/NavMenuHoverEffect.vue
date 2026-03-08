<template>
  <BackHome/>
  <div class="container">
    <nav>
      <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">portfolio</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import BackHome from "@/components/BackHome.vue";
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  position: relative;
  /*display: inline-block;*/
  margin: 10px 15px;
  padding-bottom: 12px;
  color: #262626;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 30px;
}

/*线条一直是 width: 100%，只通过 scaleX(0 -> 1) 做动画，通常比直接改 width 更顺滑、也更常见*/
a::after {
  content: "";
  position: absolute;
  left: 25%;/*默认在距离左侧25%处，鼠标移动到上面后变为50% 可以居中显示*/
  bottom: 0;
  width: 50%;/*线条目标宽度是链接本身的 50% */
  height: 4px;/*线条粗细 4px*/
  background: lightskyblue;
  transform: scaleX(0);/*初始沿 X 轴缩放为 0（看不见）*/
  transform-origin: center;/*缩放中心点在中间，所以会“中间向两边展开”*/
  /*transform-origin: left;从左到右展开”*/
  transition: transform .3s ease;/*只对 transform 做 0.3s 缓动动画*/
}

/*鼠标悬停时*/
a:hover::after {
  transform: scaleX(1);/*从 0 放大到 1，线条完整显示*/
}
</style>
