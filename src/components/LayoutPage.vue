<template>
    <div class="container">
        <SummonsInfo></SummonsInfo>
       <YandexMap/>
    </div>
</template>

<script>
import SummonsInfo from './Section/SummonsInfo.vue';
import YandexMap from './YandexMap.vue';
// import { yandexMap } from 'vue-yandex-maps'
export default {
    components:{
        SummonsInfo,
        YandexMap
    }
}
</script>

<style lang="scss">
.container {
    display: flex;
}
.ymap-container{
    filter: invert(100%);
	-ms-filter: invert(100%);
	-webkit-filter: invert(100%);
	-moz-filter: invert(100%);
	-o-filter: invert(100%);
}

</style>