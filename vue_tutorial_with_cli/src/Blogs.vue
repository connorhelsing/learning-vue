<template>
  <div class="blogs">
    <h2>Blogs</h2>
    <input type="text" v-model="searchTerm">
    <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{post.title}}</h3>
      <p>{{post.body | snippet}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Blogs",
  data() {
    return {
      posts: [],
      searchTerm: ''
    }
  },
  methods: {

  },
  computed: {
    filteredPosts(){
      let st = this.searchTerm
      return this.posts.map(function(p){
        if(p.title && p.title.match(st)){
          return p
        }else{
          return null
        }
      }).filter((obj) => obj );
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/posts/').then(response => {
      console.log(response)
      this.posts = response.data
    }).catch(err =>{
      console.log(err)
    })
  }
}
</script>
