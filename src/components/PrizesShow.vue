<script setup>
defineProps({
    awards: {
        type: Array,
        required: true
    }
})
</script>


<style scoped>
.prize-show-item {
    display: grid;
    grid-template-columns: 100px auto;
    border-bottom: 1px solid #dad4d4;
}

.prize-show-item:last-child {
    border-bottom: none;
}

.prize-show-item div {
    box-sizing: border-box;
}

.prize-show-item>div {
    box-sizing: border-box;
    padding: 5px;
}

.prize-show-item div strong {
    color: var(--font-color);
    font-size: 18px;
}

.prize-show-item div p {
    color: rgb(71, 71, 71);
    font-weight: 300;
    font-size: 16px;
    margin: 0;
}

.prize-show-item>div:first-child {
    border-right: 1px solid #dad4d4;
    width: 100px;
    height: 100px;
}

.prize-show-item>div:first-child img {
    width: 100%;
    height: 100%;
}

.prize-show-item>div:last-child {
    padding-left: 20px;
}
</style>

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
