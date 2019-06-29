<template>
  <div class="app-login">
    <form @submit="login" class="app-login__form">
      <h1 class="app-login__heading">Sign in</h1>
      <div class="app-login__form-data">
        <input type="text" v-model="username" required />
        <label>Login:</label>
      </div>
      <div class="app-login__form-data">
        <input type="password" v-model="password" next="password" required />
        <label>Password:</label>
      </div>
      <input type="submit" value="Submit" />
      <router-link to="/Register" class="app-login__link">You dont have an account yet ? Sign up !</router-link>
      {{msg}}
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { log } from "util";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      msg: ""
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      const userdata = {
        username: this.username,
        password: this.password
      };
      this.username = "";
      this.password = "";
      axios
        .post("http://127.0.0.1:8000/login", userdata)
        .then(res => {
          this.$store.dispatch("setToken", res.data.token);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.app-login {
  height: 100vh;
  width: 100%;
  background: url("../assets/test.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .app-login__form {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px;
    width: 80%;
    color: white;
    border-radius: 15px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .app-login__heading {
      text-align: center;
    }
    .app-login__form-data {
      position: relative;
      input {
        border: none;
        outline: none;
        background-color: transparent;
        border-bottom: 2px solid white;
        padding: 5px;
        color: white;
        font-size: 20px;
        width: 100%;
        &:focus ~ label,
        &:valid ~ label {
          top: -22px;
          font-size: 13px;
        }
      }
      label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px;
        font-size: 20x;
        pointer-events: none;
        transition: 0.3s;
      }
    }
    input[type="submit"] {
      width: 50%;
      margin: 0 auto;
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
      border: 1px solid white;
      background-color: transparent;
      color: white;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        color: black;
        background-color: white;
      }
    }
    .app-login__link {
      text-align: center;
      color: white;
      text-decoration: none;
    }
  }
}
@media (min-width: 320px) and (orientation: landscape) {
  .app-login {
    .app-login__form {
      height: 90vh;
    }
  }
}
@media (min-width: 768px) {
  .app-login {
    .app-login__form {
      height: 40vh;
      width: 50%;
      .app-login__heading {
        font-size: 40px;
      }
      .app-login__form-data {
        input {
          font-size: 30px;
          &:focus ~ label,
          &:valid ~ label {
            top: -30px;
            font-size: 20px;
          }
        }
        label {
          font-size: 30x;
        }
      }
    }
  }
}
@media (min-width: 1024px) {
  .app-login {
    .app-login__form {
      height: 50vh;
      width: 30%;
      .app-login__form-data {
        input {
          font-size: 25px;
          &:focus ~ label,
          &:valid ~ label {
            top: -25px;
            font-size: 18px;
          }
        }
        label {
          font-size: 25px;
        }
      }
      input[type="submit"] {
        padding: 10px;
        width: 30%;
      }
    }
  }
}
</style>

