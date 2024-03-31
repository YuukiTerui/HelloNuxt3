<template>
    <div>
        users/{{  $route.params.id }} ページを表示
    </div>
</template>

<script setup>
definePageMeta({
    validate: async(route) => {
        return /^\d+$/.test(route.params.id);
    }
})
</script>