<template lang="">
  <!-- @ = v-on -->
  <form @submit.prevent="submitForm" style="width: 1024px; margin: 10px auto">
    <div class="form-group-author" style="display: inline-block">
      <input
        v-model="post.author"
        type="text"
        class="form-control"
        placeholder="작성자"
      />
    </div>
    <div class="form-group-password" style="display: inline-block">
      <input
        v-model="post.password"
        type="password"
        class="form-control"
        placeholder="비밀번호"
      />
    </div>
    <div class="form-group">
      <input
        v-model="post.title"
        type="text"
        class="form-control"
        placeholder="제목"
      />
    </div>
    <div class="form-group">
      <textarea
        v-model="post.content"
        class="form-control"
        rows="10"
        placeholder="내용"
      ></textarea>
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      style="float: right; margin-right: 10px"
    >
      Submit
    </button>
    <button
      type="button"
      class="btn btn-danger"
      style="float: right; margin-right: 10px"
    >
      <router-link
        to="/board/postlist"
        style="text-decoration: none; color: white"
        >Cancel</router-link
      >
    </button>
  </form>
</template>
<script>
export default {
  props: ["post", "submitForm"],
};
</script>
<style>
.form-control {
  border: solid 1px;
}
.form-group {
  margin: 10px;
}
.form-group-author {
  margin: 0 10px;
}
</style>
