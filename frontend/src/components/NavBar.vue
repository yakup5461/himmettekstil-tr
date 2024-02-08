<template>
  <nav class="navbar navbar-expand-md custom-nav">
    <div class="container ">
        <a class="navbar-brand" href="#" >Himmet Tekstil</a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link"  href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  href="#">Ürünlerimiz</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  href="#">İletişim </a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  href="#">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  href="#">Register</a>
            </li>
        </ul> 
    </div>


  </nav>
</template>

<script>

    export default {
        name : "NavBar" 
    }

</script>

<style scoped>
.custom-nav{
    background-color: #063547;
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
    padding: 10px 25px;
    color: #fff;
    text-align: center;

}
</style>