<template>
  <div class="news__container">
    <section>
      <div>
        <h4>Nовость by:
          <span>
           {{ post.author.title }}
          </span>
          <br>
          <span>
            At: {{ post.createdAt }}
          </span>
        </h4>
      </div> 
      <hr>
      <div class="desc">
      </div>
    </section>
    <hr>
    <footer>
      <Comments />
    </footer>
    <button @click="goBack">back</button>
  </div>
</template>

<script>
import Comments from './components/Comments';

export default {
  name: 'News',
  components: {
    Comments
  },
  
  data() {
    return {
      post: this.$router.params.curNews,
      currentId: window.location.pathname.charAt(window.location.pathname.length - 1),
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1)
    },

    setNews() {
      const div = document.querySelector('.desc');
      div.innerHTML = this.post.description;
    }

  },

  mounted() {
    this.setNews();
  }
}
</script>

<style>
.news__container {
  max-width: 100%;
  text-align: center;
  margin: 0 30%;
  min-height: 98vh;
}

.news__container section { 
  border-radius: 3px;
  background-color: rgb(240, 243, 246);  
  text-align: center; 
  display: flex; 
  flex-direction: column; 
  justify-content:center;
  color: #49464e; 
  min-height: 71vh;
}


.news__container img{
  max-width: 100px;
}

.desc {
  font-size: small;
}
</style>
