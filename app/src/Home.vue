<template>
  <div class="home__container">
    <div>
      <label v-for="item of list" :key="item.title" class="news__list">
        <div @click="showArticle(item)">
          <img :src='item.images.icon' alt=""/>
          <strong>{{ item.title }}</strong>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import newsData from './data.js';
import commentsData from './comments.js';

export default {
  name: 'Home',
  methods: {
    getData() {
      this.$router.params = {};
      this.list = newsData.newsObject.v1.news.data;
      this.$router.params.comments = commentsData.commentsObject.data;

      // console.log(this.list, this.$router.params);
    },

    showArticle(item) {
      this.$router.push(`/news/${item.id}`);
      this.$router.params.curNews = item;
 
    }
  },

  data() {
    return {
      list: ''
    }
  },

  mounted() {
    this.getData();
  }
}
</script>

<style> 
 

.home__container {
  text-align: center;
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  background-color: rgb(240, 243, 246);   
  margin: 0 30%;
  min-height: 99vh;
  color: #49464e;
}

.news__list img {
    width: 18px;
    height: 18px;
}
</style>
