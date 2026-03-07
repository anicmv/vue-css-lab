<template>
    <div
        ref="btnRef"
        class="back-home"
        :style="{ left: x + 'px', top: y + 'px' }"
        @mousedown="onMouseDown"
    >
        ← 首页
    </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const btnRef = ref(null)

const x = ref(16)
const y = ref(16)

let isDragging = false
let moved = false
let startX = 0
let startY = 0
let originX = 0
let originY = 0

const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

const onMouseMove = (e) => {
    if (!isDragging) return

    const dx = e.clientX - startX
    const dy = e.clientY - startY

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true

    const btnW = btnRef.value?.offsetWidth || 80
    const btnH = btnRef.value?.offsetHeight || 36
    const maxX = window.innerWidth - btnW - 8
    const maxY = window.innerHeight - btnH - 8

    x.value = clamp(originX + dx, 8, maxX)
    y.value = clamp(originY + dy, 8, maxY)
}

const onMouseUp = () => {
    if (!isDragging) return
    isDragging = false

    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)

    // 只有“没拖动”才跳首页
    if (!moved) {
        router.push('/')
    }

    moved = false
}

const onMouseDown = (e) => {
    if (e.button !== 0) return
    e.preventDefault()

    isDragging = true
    moved = false
    startX = e.clientX
    startY = e.clientY
    originX = x.value
    originY = y.value

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
}

onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
})
</script>

<style scoped>
.back-home {
    position: fixed;
    left: 16px;
    top: 16px;
    z-index: 1000;

    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(17, 24, 39, 0.78);
    color: #fff;
    font-size: 14px;
    line-height: 1;
    cursor: grab;
    user-select: none;
}

.back-home:active {
    cursor: grabbing;
}
</style>
