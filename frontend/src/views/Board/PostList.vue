<template>
  <div style="margin: 0 auto; width: 1024px; text-align: center;">
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
        <tr v-for="post, index in posts" :key="post._id">
          <th scope="row" style="width: 5%">{{ index + 1 }}</th>
          <td style="width: 65%">{{ post.title }}</td>
          <td style="width: 15%">{{ post.author }}</td>
          <td style="width: 15%">{{ new Intl.DateTimeFormat('ko-KR', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Seoul', hour12: false
          }).format(new
            Date(post.createdAt)) }}</td>
        </tr>
      </tbody>
    </table>
    <button style="float: right">
      <router-link to="/board/create" style="text-decoration: none">글쓰기</router-link>
    </button>
    <nav aria-label="Page navigation example" style="display: inline-block;">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const posts = ref([]); // reactive reference

    onMounted(() => {
      // const page = route.params.page || 1;
      // console.log("The page is: " + this.$route.params.page);
      const API_URL = `http://localhost:3000/board?page=2`;
      // const API_URL = `http://localhost:3000/board`;
      getPosts(API_URL);
    });

    async function getPosts(API_URL) {
      const response = await fetch(API_URL);
      const json = await response.json();
      posts.value = json;
      posts.value.reverse()
    }

    return {
      posts,
    };
  },
};
</script>
