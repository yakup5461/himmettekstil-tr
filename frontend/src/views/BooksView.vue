<template>
<section>
    <div class="container">
       <SectionHeader title="Püsküller" 
                        text="We declare long prop names using camelCase because this avoids"/>
        <BookList :books="paginatedBooks"/>
        <Pagination :currentPage="currentPage" :totalPages="totalPages" @page-changed="updatePage" />
    </div>
</section>

</template>

<script >
import SectionHeader from '@/components/SectionHeader.vue';
import BookList from '@/components/BookList.vue';
// import books from '@/db.js';
import Pagination from '@/components/Pagination.vue';

export default{
    name : "BooksView",
    components:{
        SectionHeader ,
        BookList,
        Pagination
    },
    data(){
        return{
            books:[],      
            currentPage: 1 ,
            itemsPerPage: 8
        }
    },
    computed: {
        totalPages(){
            return Math.ceil( this.books.length / this.itemsPerPage )
        },
        paginatedBooks(){
            const startIndex = (this.currentPage-1)*this.itemsPerPage ;
            const endIndex = startIndex+this.itemsPerPage ;
            return this.books.slice(startIndex,endIndex);
        }
    },
    methods:{
        updatePage(page){
            this.currentPage = page
        },

        async fetchBooks(){
        try { console.log(" db öncesi satır testi-----------------------");
       const response = await fetch('http://localhost:3000/api/v1/books');
      //   const response = await fetch('https://swapi.dev/api/people/1/');
      
       const resData = await response.json();
            this.books = resData ;
        
        } catch (error) {
            console.log("error message => " , error.message);
        }
        },
       created(){
            this.fetchBooks();
            }
    }
}
</script>

<style scoped>
.auth-box{
    margin-top: -20px;

}
</style>