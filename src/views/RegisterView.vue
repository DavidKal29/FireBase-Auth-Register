<template>
  <section>
    <h2>Registro de Usuarios</h2>
    <form @submit.prevent="registerUser">
        <div>
            <label>Correo electrónico</label>
            <input type="email" required v-model="email" placeholder="ejemplo@gmail.com">
        </div>

        <div>
            <label>Contraseña</label>
            <input type="password" required v-model="password" placeholder="12345">
        </div>

        <button type="submit">Registrarse</button>
    </form>
  
  
  </section>
</template>

<script>
import { auth } from "../db/firebase.js"
import { createUserWithEmailAndPassword } from "firebase/auth" 
export default {
    name:'RegisterView',
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async registerUser(){
            try {
                // crear el usuario en firebase auth
                const userCredential= await createUserWithEmailAndPassword(auth,this.email,this.password)
                const user=userCredential.user
                console.log('Usuario creado:', user);

                //Redirigir al perfil de usuario
                this.$router.push({name:'perfil'})

                
            } catch (error) {
                console.error('Error:',error.message);
                alert(error.message)
                
            }
        }
    }
}
</script>

