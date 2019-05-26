<template>
  <form @submit="login">
    <label>Login:</label>
    <input type="text" v-model="username" placeholder="Your login" > 
    <label>Password:</label>
    <input type="password" v-model="password" next="password">
    <input type="submit" value="Submit">
    {{msg}}
  </form>
</template>

<script>
import axios from 'axios';
import { log } from 'util';
export default {
  name: "Login",
  data() {
    return{
      username:'',
      password:'',
      token: '',
      msg: ''
    }
  },
  methods: {
    login(e) {
      e.preventDefault();
      const userdata = {
        username: this.username,
        password: this.password,
      };
      this.username='';
      this.password='';
      axios.post('http://127.0.0.1:8000/api/token-auth/', userdata)
      .then((res) => {
        this.token = res.data.token;
        return(
         axios.get('http://127.0.0.1:8000/api/', {
            headers: {Authorization: `Token ${this.token}`},
          })
        );
      })
      .then(res => this.msg = res.data.message)
      .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

