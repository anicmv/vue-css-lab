<template>
    <BackHome />
    <div class="page">
        <div class="container">
            <div class="progress-container">
                <div class="progress" :style="{ width: progressWidth }"></div>
                <div v-for="n in totalSteps" :key="n" class="circle" :class="{ active: n <= currentActive }">
                    {{ n }}
                </div>
            </div>

            <button class="btn" :disabled="currentActive === 1" @click="prevStep">Prev</button>
            <button class="btn" :disabled="currentActive === totalSteps" @click="nextStep">Next</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BackHome from '../components/BackHome.vue'

const totalSteps = 4
const currentActive = ref(1)

const progressWidth = computed(() => {
    return ((currentActive.value - 1) / (totalSteps - 1)) * 100 + '%'
})

const nextStep = () => {
    currentActive.value++
    if (currentActive.value > totalSteps) {
        currentActive.value = totalSteps
    }
}

const prevStep = () => {
    currentActive.value--
    if (currentActive.value < 1) {
        currentActive.value = 1
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

.page {
    background-color: #f1f1f1;
    font-family: 'Muli', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}

.container {
    text-align: center;
}

.progress-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 30px;
    max-width: 100%;
    width: 350px;
}

.progress-container::before {
    content: '';
    background-color: #383838;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
}

.progress {
    background-color: #3498db;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 0%;
    transition: 0.4s ease;
}

.circle {
    background-color: #f1f1f1;
    color: #000;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #383838;
    transition: 0.4s ease;
    z-index: 0;
}

.circle.active {
    border-color: #3498db;
}

.btn {
    background-color: #3498db;
    color: #fff;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;
}

.btn:active {
    transform: scale(0.98);
}

.btn:focus {
    outline: 0;
}

.btn:disabled {
    background-color: #383838;
    cursor: not-allowed;
}
</style>
