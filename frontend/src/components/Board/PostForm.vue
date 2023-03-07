<template lang="">
  <form style="width: 1024px; margin: 10px auto">
    <div class="form-group-author" style="display: inline-block">
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="작성자"
      />
    </div>
    <div class="form-group-password" style="display: inline-block">
      <input
        type="password"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="비밀번호"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="제목"
      />
    </div>
    <div class="form-group">
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="10"
        placeholder="내용"
      ></textarea>
    </div>
  </form>
</template>
<script>
export default {};
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
