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
</script>
<template>
    <div>
        <NavBar/>
        <div
            class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
        >
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
    </div>
</template>