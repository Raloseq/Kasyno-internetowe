<template>
  <section class="app-profile">
    <UserBelt/>
    <div class="app-profile__statistics">
      <p class="app-profile__wins">Wins:</p>
      <p class="app-profile__lose">Lose:</p>
      <p class="app-profile__money">Money: {{money}} $</p>
      <p class="app-profile__spins">Spins:</p>
    </div>
    <div class="app-profile__add-money" @click="activeModal = true">
      <p>Add money to your account!</p>
      <img src="../assets/addmoney.svg" alt="add-money">
    </div>
    <div v-if="activeModal" class="app-profile__modal">
      <div class="app-profile__modal-content">
        <h1>Add money</h1>
        <input type="number" ref="moneyValue">
        <div class="modal-content__actions-buttons">
          <input type="submit" value="Add money" @click="addMoney()">
          <button @click="activeModal = false">Exit</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserBelt from "@/components/UserBelt.vue";
export default {
  name: "UserProfile",
  components: {
    UserBelt
  },
  data() {
    return {
      activeModal: false,
      money: 0
    };
  },
  methods: {
    addMoney() {
      this.money = this.$refs.moneyValue.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-profile {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(../assets/userprofile.jpg) center no-repeat;
  background-size: cover;
  color: white;
  .app-profile__statistics {
    font-size: 20px;
    p {
      margin: 10px 0;
    }
  }
  .app-profile__add-money {
    width: 60%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 15vw;
      height: 15vw;
    }
  }
  .app-profile__modal {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .app-profile__modal-content {
      width: 80%;
      height: 40vh;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .modal-content__actions-buttons {
      }
    }
  }
}
</style>
