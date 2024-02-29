<template>
  <nav class="navbar navbar-expand-md custom-nav">
    <div class="container ">
        <RouterLink class="navbar-brand" :to= "{name:'home'}" >{{brandName }}</RouterLink>
        <ul class="navbar-nav">
            <li class="nav-item">
                <RouterLink class="nav-link"  :to= "{name:'home'}">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link"  :to= "{name:'books'}">Ürünlerimiz</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link"  :to= "{name:'contact'}">İletişim </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link"  :to= "{name:'login'}">Login</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link"  :to= "{name:'register'}">Register</RouterLink>
            </li>
        </ul> 
    </div>


  </nav>
</template>

<script>
import LoginView from '@/views/LoginView.vue';
import { RouterLink } from 'vue-router';


    export default {
    name: "NavBar",
    data() {
        return {
            brandName: "Himmet Tekstil"
        };
    },
    components: { RouterLink }
}

</script>

<style scoped>
.custom-nav{
    background-color:var(--primary-color);
    padding: 15px 0px;
}
.navbar-brand {
    padding: 0px;
    margin: 0px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
}
.nav-link{
    padding: 10px 25px !important ;
    color: #fff;
    text-align: center;
}
.nav-link:hover{
    color: var(--secondary-color);
   
}
.active-link{
    color:var(--secondary-color);
}
</style>