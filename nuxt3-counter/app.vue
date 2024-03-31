<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="counterStore.countDown">-</button>
    <button @click="counterStore.countReset">reset</button>
    <button @click="counterStore.countUp">+</button>
  </div>
</template>

<script setup>
const counterStore = useCounterState();
const { counter } = counterStore
</script>