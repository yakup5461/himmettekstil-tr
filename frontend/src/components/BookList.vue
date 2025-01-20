<template>
<div class="row">
    <div class="col-sm-6 col-md-4 col-xl-3 mb-5 " v-for=" book in books " :key="book._id" >
    <RouterLink :to="'/book/'+book._id">
        <BookItem :book="book"/>
    </RouterLink>
      </div>
</div>
</template>

<script>
import BookItem from '@/components/BookItem.vue';
//import books from '@/db.js';
import { RouterLink } from 'vue-router';
    export default {
        name:"BookList",
        components:{
    BookItem,
    RouterLink
},
        props:{
            books:{
                typeof:Array,
                default:()=>([])
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>