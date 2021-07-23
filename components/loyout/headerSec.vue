<template>
  <div>

    <b-navbar toggleable="lg" id="header-sticky" class="header__area header__shadow header__padding px-lg-5 px-3" style="position: relative;">
      <b-navbar-brand href="/" >
        <img src="~/assets/img/logo/logo.png" alt="AdaPass-logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto d-flex align-items-center justify-content-center">
          <div class="main-menu main-menu-3 pr-lg-4 pr-0">
            <b-nav>
              <ul>
                <li class="d-block d-lg-inline-block mb-4 mb-lg-0 px-2">
                  <a href="/" class="text-center">Anasayfa</a>
                </li>
                <li class="d-block d-lg-inline-block mb-4 mb-lg-0 px-2">
                  <a href="/company/register" class="text-center">İşletme Kaydı</a>
                </li>
                <li class="d-block d-lg-inline-block mb-4 mb-lg-0 px-2">
                  <a href="/asiBelgesi" class="text-center">Aşı Belgesi</a>
                </li>
              </ul>
            </b-nav>
          </div>
           <a href="/company/login" class="w-btn w-btn-purple mb-2 mb-lg-0">İşletme Girişi</a>
          <a href="/asiBelgesi" class="w-btn w-btn-purple ml-lg-2 mb-2 mb-lg-0">Aşı Belgesi</a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="top-header">
      <img @click="goMainPage" style="max-height: 60px; max-width: 100vw; cursor: pointer;" src="/images/saglik.png" alt="AdaPass"/>
    </div>
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
  background-color: #19947b!important;
  padding: 10px 20px;
  position: relative;
  display: flex;
  align-items: center;
}
</style>
