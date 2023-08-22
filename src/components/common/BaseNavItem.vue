<template>
  <div class="base-nav-item" :class="{'active': isActive}" @click="handleClick">
    <span class="base-nav-item-text">
       <slot></slot> 
    </span>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';
import { toRefs } from 'vue';

const props = defineProps({
    "name": { // 路由name
        required: true,
        type: String,
    }
})
const { name } = toRefs(props)

// 页面转跳
const router = useRouter()
function handleClick() {
    router.push({name: name.value})
}

// 当前活动页
const route = useRoute()
const isActive = computed(()=>{
    return route.name === name.value
})
</script>

<style scoped>
.base-nav-item {
    cursor: pointer;
    box-sizing: border-box;
    border-bottom: 2px solid transparent;

    margin-left: 10px;
    min-width: 6vw;
    
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all .25s;
}

.base-nav-item .base-nav-item-text {
    padding: 4px 12px;
    border-radius: 5px;

    transition: all .3s;
}

.base-nav-item:hover .base-nav-item-text {
    background-color: #f0f0f0;
}

.base-nav-item.active {
    border-bottom: 2px solid #595959;
}
</style>