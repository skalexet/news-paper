<template>
    <div class="comments__container">
        <div  
            v-for="comment of comments"
            :key="comment.id" 
            class="comments__list">

            <div>
                <strong>{{ comment.author.title }}</strong>
                <p v-html="comment.description">  </p>
                <small>{{ comment.createdAt }}</small>
                <strong class="likes">likes: {{ comment.likes }}</strong>
                <strong class="dislikes">dislikes: {{ comment.dislikes }}</strong>
                <button @click="increaseTheLikes(comment)">like</button>
                <button @click="increaseTheDislikes(comment)">dislike</button>
            </div>
        </div>
    </div>
</template>

<script>
import commentsData from '../comments.js';

export default {
  data() {
      return {
        comments: '',
        id: '',
        desc: ''
      }
  },

    methods: {
        increaseTheLikes(comment) {
            comment.likes++;
        },

        increaseTheDislikes(comment) { 
            comment.dislikes++; 
        },

        storeComment() {
            for (const comArray of commentsData.commentsObject.data) {
                 if (comArray.id == this.id) { 
                    commentsData.commentsObject.comments.push;
                } 
            }
        },

        setComments() {
            this.id = this.$router.params.curNews.id;
            for (const comArray of this.$router.params.comments) {
                if (comArray.id == this.id) {
                    this.comments = comArray.comments;
                }
            }
        }
    },

    mounted() {
        this.setComments();
    }
     

}

</script>

<style> 
.comments__list strong {
    margin: 2px 5px;
}

.comments__list div {
    border: 1px solid lightgray;
    border-radius: 10px;
    letter-spacing: 1px;
    word-spacing: default;
    font-weight: 100;
    font-size: smaller;
    margin: 10px 22px;
    padding: 0 10px;
    background-color: rgb(240, 243, 246);
    color: #49464e;
}
</style>
