<template>
  <div>
    <div class="top-header" @click="goMainPage">
      <img style="height: 75px" src="images/saglik.png"/>
    </div>
    <b-navbar toggleable="lg" id="header-sticky" class="header__area header__shadow header__padding px-lg-5 px-3">
      <b-navbar-brand href="/">
<!--        <img src="~/assets/img/logo/logo.png" alt="logo">-->
        <img src="~/assets/img/logo/logo.png" alt="logo">
      </b-navbar-brand>

<!--      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->
      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto d-flex align-items-center justify-content-center">
          <div class="main-menu main-menu-3 pr-lg-4 pr-0">
            <b-nav>
              <ul>
<!--                <li class="d-block d-lg-inline-block mb-4 mb-lg-0 px-2">
                  <a href="#home" class="text-center">Anasayfa</a>
                </li>
                <li class="d-block d-lg-inline-block mb-4 mb-lg-0 px-2">
                  <a href="#uygulama" class="text-center">Uygulama</a>
                </li>
                <li class="d-block d-lg-inline-block mb-4 mb-lg-0 px-2">
                  <a href="#register" class="text-center">İşletme Kaydı</a>
                </li>
                <li class="d-block d-lg-inline-block mb-4 mb-lg-0 px-2">
                  <a href="#quest" class="text-center">SSS</a>
                </li>-->
              </ul>
            </b-nav>
          </div>
<!--           <a href="/signUp" class="w-btn w-btn-purple mb-2 mb-lg-0">Kayıt Ol</a>-->
<!--          <a href="/asiSorgulama" class="w-btn w-btn-purple ml-lg-2 mb-2 mb-lg-0">Aşı Belgesi</a>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'headerSec',
  methods: {
    goMainPage: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.header__area {
  background-color: #FFFFFF;
}
.top-header {
  cursor: pointer;
  background-color: #19947b!important;
  padding: 10px 20px;
  position: relative;
}
</style>
