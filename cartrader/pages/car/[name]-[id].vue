<script setup>
const route = useRoute();  // 取得現在的路徑
useHead({
    title: toTitleCase(route.params.name),
});
function toTitleCase(str) {
  return str.replace(/\w\S*/g,function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
definePageMeta({
    layout: "custom"
})
</script>
<template>
    <div>
            <!-- CAR HERO -->
            <CarDetailHero/>
            <!-- CAR HERO -->
            <!-- CAR ATTRIBUTES -->
            <CarDetailAttributes/>
            <!-- CAR ATTRIBUTES -->
            <!-- CAR DESCRISPTION -->
            <CarDetailDescription/>
            <!-- CAR DESCRISPTION -->
            <!-- CAR CONTACT -->
            <CarDetailContact/>
            <!-- CAR CONTACT -->
    </div>
</template>