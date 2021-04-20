<template>
    <div class="comments__container">
        <div class="comments__list">
            <!-- content -->
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
      }
  },

    methods: {
        storeComment() {
            for (const comArray of commentsData.commentsObject.data) {
                 if(comArray.id == this.id) { 
                    commentsData.commentsObject.comments.push;
                } 
            }
        },

        setComments() {
            this.id = this.$router.params.curNews.id;

            for (const comArray of this.$router.params.comments) {
                if(comArray.id == this.id) {
                    this.comments = comArray.comments;
                }

            }
            
            for (let comment of this.comments) {
                const div = document.createElement('div');
                const likeButton = document.createElement('button');
                likeButton.innerText = 'like';
                likeButton.addEventListener('click', () => {
                    comment.likes++;
                    this.updateLikes(comment);
                });

                const dislikeButton = document.createElement('button');
                dislikeButton.innerText = 'dislike';
                dislikeButton.addEventListener('click', () => { 
                    comment.dislikes++; 
                    this.updateDislikes(comment);
                });

                div.id = comment.id;
                div.innerHTML += `<strong>${comment.author.title}</strong>`;
                div.innerHTML += `<p>${comment.description}</p>`;
                div.innerHTML += `<small>${comment.createdAt}</small>`;
                div.innerHTML += `<strong class="likes">likes: ${comment.likes}</strong>`;
                div.innerHTML += `<strong class="dislikes">dislikes: ${comment.dislikes}</strong>`;
                const list = document.querySelector('.comments__list');
                div.appendChild(likeButton);
                div.appendChild(dislikeButton);
                list.appendChild(div);
            }
        },

        updateLikes(comment) {
            const commentElement = document.getElementById(comment.id);
            const likesElement = commentElement.querySelector('.likes');
            likesElement.innerText = `likes: ${comment.likes}`;
            console.log(commentElement);
        },

        updateDislikes(comment) {
            const commentElement = document.getElementById(comment.id);
            const dislikesElement = commentElement.querySelector('.dislikes');
            dislikesElement.innerText = `dislikes: ${comment.dislikes}`;
            console.log(commentElement);
        }

    },

    mounted() {
        this.setComments();
    }
     

}

</script>

<style> 
/* .comment__container {
    text-align: center;
} */

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
