<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <span class="navbar-brand">
        <img
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          width="50"
          height="50"
        />
      </span>

      <!-- <a class="navbar-brand" href="#"></a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">홈</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/board/postlist" class="nav-link active"
              >게시판</router-link
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-warning" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
