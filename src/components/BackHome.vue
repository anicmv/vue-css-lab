<template>
    <router-link to="/" class="back-home">← 首页</router-link>
</template>

<style scoped>
.back-home {
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 999;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.65);
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    line-height: 1;
    backdrop-filter: blur(6px);
}

.back-home:hover {
    background: rgba(0, 0, 0, 0.8);
}
</style>
