<script setup>
defineProps({
    winnes: {
        type: Array,
        required: true
    }
})
</script>
<style scoped></style>
<template>
    <div v-for="item in items">
        <p>
            {{ item.name }} <br>
            {{ item.price }} <br>
            {{ item.description }}
        </p>
        <img src={{ item.image }} alt={{ item.description}}>
    </div>
</template>

<script>

</script>
