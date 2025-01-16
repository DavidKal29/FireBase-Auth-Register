<template>
  <section >
    <h1 v-if="userName">Bienvenido, tu correo es {{ userName }}</h1>
    <h1 v-else>Cargando...</h1>
    <button @click="logout">Cerrar sesión</button>
  </section>
</template>

<script>
import { auth } from "../db/firebase.js"
import { signOut } from 'firebase/auth'

export default {
    name:'PerfilView',
    data(){
        return{
            userName:'',
            fecha:''
        }
    },
    methods:{
        async logout(){
            try {
                await signOut(auth)//Cierra la sesion del usuario
                this.$router.push({name:'register'})//Redirige al registro
            } catch (error) {
                console.log('Error al cerras sesion',error.message);
                
            }
        }
    },
    mounted(){
        const currentUser=auth.currentUser
        if (currentUser) {
            this.userName=currentUser.email //Guardamos el email del usuario

        }else{
            this.$router.push({name:'register'}) //Si no está autenticado, redirige al register
        }
    },
}
</script>

<style>

</style>