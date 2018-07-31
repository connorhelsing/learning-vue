<template>
  <nav class="main-nav">
    <ul>
      <li>
       <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'About'}">About</router-link>
        <li v-for="(user, index) in userIds" :key="index">
          <router-link :to="{name: 'ViewProfile', params: {user_id: user}}">User {{user}}</router-link>
        </li>
      </li>
    </ul>
    <h2>Navigation Controls</h2>
    <ul>
      <li><button @click="goBack">Go Back</button></li>
      <li><button @click="goHome">Redirect to Home</button></li>
       <li><button @click="goForward">Go Forward</button></li>
    </ul>
  </nav>
</template>

<script>
  export default{
    name: 'Navbar',
    data() {
      return {
        userIds: [
        1, 2, 3, 4
        ]
      }
    },
    methods: {
      goHome(){
        this.$router.push({name: 'Home'})
      },
      goBack(){
        this.$router.go(-1)
      },
      goForward(){
        this.$router.go(1)
      }
    }
  }
</script>

<style>
li{
  display: inline-block;
  margin: 10px;
}
.router-link-exact-active{
  color: red;
}
</style>
