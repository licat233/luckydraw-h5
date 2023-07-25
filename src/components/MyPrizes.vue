<script setup>
defineProps({
    awards: {
        type: Array,
        required: true
    }
})
</script>

<style scoped></style>

<template>
    <div class="prize-show-item" v-for="award in awards">
        <div><img :src=award.image :alt=award.name>
        </div>
        <div>
            <strong>{{ award.grade }} ({{ award.price }} NT$)</strong>
            <p>{{ award.name }}</p>
        </div>
    </div>
</template>
