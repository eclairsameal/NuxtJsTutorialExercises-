<script setup>
const route = useRoute();  // 取得現在的路徑
const {cars} = useCars();
const {toTitleCase} = useUtilities();
useHead({
    title: toTitleCase(route.params.name),
});
// function toTitleCase(str) {
//   return str.replace(/\w\S*/g,function(txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }
const car = computed(() => {
    return cars.find((c) => {
        return c.id === parseInt(route.params.id)
    })
});

definePageMeta({
    layout: "custom"
});
</script>
<template>
    <div v-if="car">
        <!-- CAR HERO -->
        <CarDetailHero :car="car"/>
        <!-- CAR HERO -->
        <!-- CAR ATTRIBUTES -->
        <CarDetailAttributes :features="car.features"/>
        <!-- CAR ATTRIBUTES -->
        <!-- CAR DESCRISPTION -->
        <CarDetailDescription :description="car.description"/>
        <!-- CAR DESCRISPTION -->
        <!-- CAR CONTACT -->
        <CarDetailContact/>
        <!-- CAR CONTACT -->
    </div>
</template>