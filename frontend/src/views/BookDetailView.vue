<template>
    <section>
        <div class="container">
            <SectionHeader :title="book.name " :text="book.author "> </SectionHeader>  
            <font-awesome-icon icon="arrow-left" size="2xl" class="mb-2" style="cursor: pointer;" @click="goToBackBooks"/>
            <div class="row mb-4">
                <div class="col-lg-6 ">
                    <img class="card-img-top" src="../../template/images/b_detail.jpg" alt="detail">
                </div>
                <div class="col-lg-6 details-wrapper">
                    <p class="lead description">{{ book.description }} </p>
                    <div class="mb-4">
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Page</strong></div>
                            <div class="col-lg-6">{{book.page}}</div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Catogory</strong></div>
                            <div class="col-lg-6">Fiction</div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Rating</strong></div>
                            <div class="col-lg-6">{{ book.Rating }}</div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Upload Date</strong></div>
                            <div class="col-lg-6">{{ book.uploadDate }}</div>
                        </div>
                    </div>
                    <div class="comment-section">
                        <h3 class="display-6 mb-2">Comments</h3>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptas veritatis non vero. Qui porro vitae </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">Jhon DOE</p>
                                    <div class="d-flex aling-items-center">
                                        <font-awesome-icon :icon="['far', 'thumbs-up']" />
                                        <p class="ps-2 mb-0"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptas veritatis non vero. Qui porro vitae </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">Jhon DOE</p>
                                    <div class="d-flex aling-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div><div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptas veritatis non vero. Qui porro vitae </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">Jhon DOE</p>
                                    <div class="d-flex aling-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div><div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptas veritatis non vero. Qui porro vitae </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">Jhon DOE</p>
                                    <div class="d-flex aling-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div><div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptas veritatis non vero. Qui porro vitae </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">Jhon DOE</p>
                                    <div class="d-flex aling-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div><div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptas veritatis non vero. Qui porro vitae </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">Jhon DOE</p>
                                    <div class="d-flex aling-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div><div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptas veritatis non vero. Qui porro vitae </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">Jhon DOE</p>
                                    <div class="d-flex aling-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div><div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptas veritatis non vero. Qui porro vitae </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">Jhon DOE</p>
                                    <div class="d-flex aling-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div><div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptas veritatis non vero. Qui porro vitae </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">Jhon DOE</p>
                                    <div class="d-flex aling-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div><div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptas veritatis non vero. Qui porro vitae </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">Jhon DOE</p>
                                    <div class="d-flex aling-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div><div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptas veritatis non vero. Qui porro vitae </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">Jhon DOE</p>
                                    <div class="d-flex aling-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </section>

</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import books from '@/db';
    export default {
    name: "BookDetailView",
    components: {
         SectionHeader 
        },
        data(){
            return{
                book : null
            }
        },
        created(){
            const bookId = this.$route.params.id;
            this.book = books.find(book=> book.id ===parseInt(bookId) )
        },
        methods:{
            goToBackBooks(){ 
                this.$router.push({name:"books"})
            }
        }
}
</script>

<style scoped>
.details-wrapper{
    max-height: 740px;
    display: flex;
    flex-direction: column;
}
.comment-section{
    flex-grow: 1;
    overflow-y: auto;
}
.description{
    min-height: 150px;
    max-height: 250px;
    overflow-y: auto;
}
</style>