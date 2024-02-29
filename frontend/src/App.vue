<template>
        <NavBar />
        <RouterView/>
        <TheFooter/>
</template>

<script>
import NavBar from "@/components/NavBar.vue" ;
import TheFooter from "@/components/TheFooter.vue";

export default {
    name :"App",
    components : {
    NavBar,
    TheFooter
}
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&display=swap');

html , body {
    font-family: 'Mulish',sans-serif;
}
a{
    text-decoration: none;
}
</style>