<template>
    <div>
       <section class="full-section-height" >
        <div class="container">
            <form  @submit.prevent="SubmitForm">
          <div class="row justify-content-center">
            
            <!-- Username Field (Medium and Larger Screens) -->
            <div class="col-md-6 col-8 mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" name="username" v-model.trim="FormData.username" required>
            </div>
          </div>

          <div class="row justify-content-center">
            <!-- Email Field (Medium and Larger Screens) -->
            <div class="col-md-6 col-8 mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" name="email" v-model.trim="FormData.email" required>
            </div>
          </div>

          <!-- Password Field -->
          <div class="row justify-content-center">
            <div class="col-md-6 col-8 mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" name="password" v-model.trim="FormData.password" required>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="row justify-content-center">
            <div class="col-md-6 col-8 mb-3">
              <button type="submit" class="btn btn-primary w-100">Register</button>
            </div>
          </div>
        </form>
        </div>
       </section>
    </div>
</template>

<script >
export default{
    name : "RegisterView",
    data(){
        return{
            FormData:{
                username: '',
                email:    '',
                password: ''
            }
        }
    },
    methods:{
      SubmitForm(){
        console.log("Register formData::" , this.FormData)

      }
    }

}
</script>

<style scoped>

</style>