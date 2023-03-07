<template>
  <div style="margin: 0 auto; width: 1024px">
    <table class="table table-hover" style="text-align: center">
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">글쓴이</th>
          <th scope="col">작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post._id">
          <th scope="row" style="width: 5%">{{ post.page }}</th>
          <td style="width: 65%">{{ post.title }}</td>
          <td style="width: 15%">{{ post.author }}</td>
          <td style="width: 15%">{{ post.created_at }}</td>
        </tr>
      </tbody>
    </table>
    <button style="float: right">
      <router-link to="/board/create" style="text-decoration: none"
        >글쓰기</router-link
      >
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const posts = ref([]);

    onMounted(() => {
      // const page = route.params.page || 1;
      // console.log("The page is: " + this.$route.params.page);
      const API_URL = `http://localhost:3000/board`;
      // const API_URL = `http://localhost:3000/board`;
      getPosts(API_URL);
    });

    async function getPosts(API_URL) {
      const response = await fetch(API_URL);
      const json = await response.json();
      posts.value = json;
    }

    return {
      posts,
    };
  },
};
</script>
