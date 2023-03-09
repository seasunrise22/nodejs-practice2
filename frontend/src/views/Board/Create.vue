<template>
  <PostForm :post="post" :submitForm="createPost" />
</template>
<script>
import PostForm from "@/components/Board/PostForm.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    PostForm,
  },

  setup() {
    const API_URL = "http://localhost:3000/board";
    const router = useRouter();

    const post = reactive({
      author: "",
      password: "",
      title: "",
      content: "",
    });

    async function createPost() {
      const response = await fetch(API_URL, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "content-type": "application/jsons",
        },
        body: JSON.stringify({
          author: post.author,
          password: post.password,
          title: post.title,
          content: post.content,
        }),
      });
      const json = await response.json();
      router.push({
        name: "Board_PostList",
      });
    }
    return {
      post,
      createPost,
    };
  },
};
</script>
<style></style>
