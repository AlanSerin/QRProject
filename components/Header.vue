<template lang="html">
<div>
  <!-- pre loader area start -->
  <div id="loading">
    <div id="loading-center">
      <div id="loading-center-absolute">
        <div class="object" id="object_one"></div>
        <div class="object" id="object_two" style="left:20px;"></div>
        <div class="object" id="object_three" style="left:40px;"></div>
        <div class="object" id="object_four" style="left:60px;"></div>
        <div class="object" id="object_five" style="left:80px;"></div>
      </div>
    </div>
  </div>
  <!-- pre loader area end -->

  <!-- back to top start -->
  <div class="progress-wrap">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  <!-- back to top end -->

  <header>
    <div id="header-sticky" class="header__area header__shadow header__padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xxl-4 col-xl-2 col-lg-2 col-md-6 col-6">
            <div class="logo">
              <a href="index.html">
                <img src="~/assets/img/logo/logo.png" alt="logo">
              </a>
            </div>
          </div>
          <div class="col-xxl-8 col-xl-10 col-lg-10 d-none d-lg-block">
            <div class="header__right d-flex justify-content-end">
              <div class="main-menu main-menu-3 pl-40">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li><a href="#">About</a></li>
                    <li class="has-dropdown">
                      <a href="services.html">Services</a>
                      <ul class="submenu">
                        <li><a href="services.html">Services</a></li>
                        <li><a href="services-details.html">Services Details</a></li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <a href="blog.html">Blog</a>

                      <ul class="submenu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-standard.html">Blog Standard</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <a href="about.html">Pages</a>
                      <ul class="submenu">
                        <li><a href="faq.html">Faq</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="team-details.html">Team Details</a></li>
                        <li><a href="#">Error 404</a></li>
                        <li><a href="sign-up.html">Sign Up</a></li>
                        <li><a href="sign-in.html">Sign In</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
              </div>
              <div class="header__action ml-40 text-end d-flex align-items-center justify-content-end">
                <div class="header__right-btn d-none d-md-flex d-xl-block">
                  <a href="contact.html" class="w-btn w-btn-purple w-btn-7">Get Started</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 d-lg-none">
            <div class="sidebar__menu d-flex justify-content-end d-lg-none">
              <div class="sidebar-toggle-btn sidebar-toggle-btn-2" id="sidebar-toggle">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- header area end -->

  <!-- sidebar area start -->
  <div class="sidebar__area">
    <div class="sidebar__wrapper">
      <div class="sidebar__close">
        <button class="sidebar__close-btn" id="sidebar__close-btn">
          <span><i class="fal fa-times"></i></span>
          <span>close</span>
        </button>
      </div>
      <div class="sidebar__content">
        <div class="logo mb-40">
          <a href="index.html">
            <img src="~/assets/img/logo/logo.png" alt="logo">
          </a>
        </div>
        <div class="mobile-menu mobile-menu-3"></div>
        <div class="sidebar__info mt-350">
          <a href="#" class="w-btn w-btn-blue-2 w-btn-4 d-block mb-15 mt-15">login</a>
          <a href="#" class="w-btn w-btn-blue d-block">sign up</a>
        </div>
      </div>
    </div>
  </div>
  <!-- sidebar area end -->
  <div class="body-overlay"></div>
  <!-- sidebar area end -->
</div>
</template>
<script>

</script>
<style lang="scss">

</style>
