import { createApp } from "vue";
import App from "@/App.vue" ;

const app = createApp(App);
app.mount('#app');

/*const app = createApp({
    data(){
            return{
            name: "yakup" ,
            } ;
        } ,
    template : '<h1> benim adım {{name}}</h1>' ,
});

app.mount('#app') ;*/
