<template>
  <div>
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
                  <a href="/">
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
                          <a href="#home">Anasayfa</a>
                        </li>
                        <li><a href="#uygulama">Uygulama</a></li>
                        <li class="has-dropdownn">
                          <a href="#register">İşletme Kaydı</a>
                        </li>
                        <li class="has-dropdownn">
                          <a href="#quest">Sorular</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="header__action ml-40 text-end d-flex align-items-center justify-content-end">
                    <div class="header__right-btn d-none d-md-flex d-xl-block">
                      <a href="contact.html" class="w-btn w-btn-purple w-btn-7">Kayıt Ol</a>
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
              <span>Kapat</span>
            </button>
          </div>
          <div class="sidebar__content">
            <div class="logo mb-40">
              <a href="/">
                <img src="~/assets/img/logo/logo.png" alt="logo">
              </a>
            </div>
            <div class="mobile-menu mobile-menu-3"></div>
            <div class="sidebar__info mt-350">
              <a href="#" class="w-btn w-btn-blue-2 w-btn-4 d-block mb-15 mt-15">Giriş Yap</a>
              <a href="#" class="w-btn w-btn-blue d-block">Kayıt Ol</a>
            </div>
          </div>
        </div>
      </div>
      <!-- sidebar area end -->
      <div class="body-overlay"></div>
      <!-- sidebar area end -->
    </div>

    <main>
      <!-- hero area start -->
      <section id="home" class="hero__area hero__height-3 hero__bg p-relative d-flex align-items-center missingheader">
        <div class="hero__shape-3">
          <img class="hero-3-circle-2" src="~/assets/img/icon/hero/home-3/hero-circle.png" alt="">
          <img class="hero-3-dot" src="~/assets/img/icon/hero/home-3/hero-dot.png" alt="">
          <img class="hero-3-dot-3" src="~/assets/img/icon/hero/home-3/hero-dot-3.png" alt="">
          <img class="hero-3-dot-4" src="~/assets/img/icon/hero/home-3/hero-dot-4.png" alt="">
          <img class="hero-3-triangle" src="~/assets/img/icon/hero/home-3/hero-triangle.png" alt="">
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <div class="hero__thumb-3 ">
                <img class="hero-phone wow fadeInLeft" data-wow-delay=".3s" src="~/assets/img/hero/home-3/hero-phone.png" alt="">
<!--                <img class="hero-3-gradient" src="~/assets/img/icon/hero/home-3/circle.png" alt="">-->
                <img class="hero-3-dot-2" src="~/assets/img/icon/hero/home-3/hero-dot-2.png" alt="">
              </div>
            </div>
            <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
              <div class="hero__content-3 mb-100 pl-70">
                <h3 class="hero__title-3 wow fadeInUp" data-wow-delay=".3s">Kuzey Kıbrıs AdaPass</h3>
                <p class="wow fadeInUp" data-wow-delay=".5s">AdaPass uygulamasıyla mekanlara veya ülkeye giriş çıkışlarınızı daha güvenli hale getirin.</p>

                <div class="hero__app wow fadeInUp" data-wow-delay=".7s">
                  <ul>
                    <li>
                      <a href="#" class="d-flex align-items-center">
                        <div class="hero__app-icon">
                          <i class="fab fa-google-play"></i>
                        </div>
                        <div class="hero__app-content">
                          <h5>Android için</h5>
                          <span>Play Store</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex align-items-center">
                        <div class="hero__app-icon">
                          <i class="fab fa-apple"></i>
                        </div>
                        <div class="hero__app-content">
                          <h5>İOS & Mac için</h5>
                          <span>App Store</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="uygulama" class="about__area pb-120 p-relative pt-100">
        <div class="about__shape">
          <img class="about-triangle" src="~/assets/img/icon/about/home-1/triangle.png" alt="">
          <img class="about-circle" src="~/assets/img/icon/about/home-1/circle.png" alt="">
          <img class="about-circle-2" src="~/assets/img/icon/about/home-1/circle-2.png" alt="">
          <img class="about-circle-3" src="~/assets/img/icon/about/home-1/circle-3.png" alt="">
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-9">
              <div class="about__wrapper mb-10">
                <div class="section__title-wrapper mb-25">
                  <h2 class="section__title">Ülkeye Giriş İzni Alma</h2>
                  <p>Giriş İzni Alabilmek için bu adımları tamamlamanız gerekiyor.</p>
                </div>
                <ul>
                  <li> <p style="font-weight: bold;">PCR Testi</p> Ülkenizde yaptığınız PCR testini yükleyin</li>
                  <li> <p style="font-weight:bold;"> Aşı Belgesi </p> Sahip olduğunuz aşı belgesini yükleyin</li>
                  <li> <p style="font-weight:bold;"> Uçuş Bileti</p> Satın aldığınız uçuşun PNR kodunu girin</li>
                  <li> <p style="font-weight:bold;">Çocuk Ekleyin (Eğer Varsa)</p> Yaşı 12’den küçük çocuklarınızı ekleyiniz. 12 yaşından büyük çocuklarınız için hesap oluşturmanız gerekiyor.</li>
                </ul>
              </div>
            </div>
            <div class="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6 col-md-10 order-first order-lg-last">
              <div class="about__thumb-wrapper p-relative ml-40 fix text-end">
                <img src="~/assets/img/about/home-1/about-bg.png" alt="">
                <div class="about__thumb p-absolute">
                  <img class="bounceInUp wow about-big" data-wow-delay=".3s" src="~/assets/img/about/home-1/about-1.png" alt="">

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- about area end -->

      <!-- about area start -->
      <section class="about__area pb-160 pt-80 p-relative">
        <div class="about__shape">
          <img class="about-plus" src="~/assets/img/icon/about/home-1/plus.png" alt="">
          <img class="about-triangle-2" src="~/assets/img/icon/about/home-1/triangle-2.png" alt="">
          <img class="about-circle-4" src="~/assets/img/icon/about/home-1/circle-4.png" alt="">
          <img class="about-circle-5" src="~/assets/img/icon/about/home-1/circle-5.png" alt="">
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xxl-6 col-xl-6 col-lg-6">
              <div class="about__thumb-wrapper p-relative ml--30 fix mr-70">
                <img src="~/assets/img/about/home-1/about-bg-2.png" alt="">
                <div class="about__thumb about__thumb-2 p-absolute wow fadeInUp" data-wow-delay=".3s">
                  <img class="about-big bounceInUp wow" data-wow-delay=".5s" src="~/assets/img/about/home-1/about-2.png" alt="">
                  <img class="about-sm about-sm-2"  src="~/assets/img/about/home-1/about-2-1.png" alt="">
                </div>
              </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-9">
              <div class="about__wrapper about__wrapper-2 ml-60 mb-30">
                <div class="section__title-wrapper mb-25">
                  <h2 class="section__title">QR Kodla Giriş</h2>
                  <p>Mekan girişlerin de artık sizi kağıt, kalemle bekleyen kişiler olmayacak. İşlemlerinizi tamamladığınız zaman mekanlara girişiniz çok daha kolay ve zaman kaybı olmadan giriş yapabileceksiniz. Tek yapmanız gereken AdaPass uygulamasını açıp giriş yapacağınız mekandaki QR kodu okutmak. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- services area start -->
      <section class="about__area pt-80 pb-30 grey-bg-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-10 order-last order-lg-first">
              <div class="about__wrapper-3">
                <div class="section__title-wrapper section__title-wrapper-3 mb-25 wow fadeInUp" data-wow-delay=".3s">
                  <span class="section__pre-title-img"><img src="~/assets/img/icon/title/about.png" alt=""></span>
                  <h2 class="section__title section__title-3">AdaPass Kodu</h2>
                  <p>AdaPass QR kodunuzla işlemleriniz tamamlanmış ve geçerli ise polis kontrollerinde AdaPass kodunuzu okutarak geçiş yapabilirsiniz.</p>
                </div>
                <div class="about__content-4">
                </div>
              </div>
            </div>
            <div class="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6 col-md-8 col-sm-10">
              <div class="about__thumb-4 p-relative text-end">
                <img class="mr-95 about-phone wow fadeInRight" data-wow-delay=".7s" src="~/assets/img/about/home-3/about-phone.png" alt="">
                <img class="about-4-circle" src="~/assets/img/about/home-3/about-circle.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- services area end -->
      <section class="promotion__area promotion__bg pt-100 pb-150 p-relative">
        <div class="promotion__shape">
          <img class="promotion-dot" src="~/assets/img/icon/promotion/pro-dot.png" alt="">
          <img class="promotion-plus" src="~/assets/img/icon/promotion/pro-plus.png" alt="">
          <img class="promotion-triangle" src="~/assets/img/icon/promotion/pro-triangle.png" alt="">
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="promotion__content wow fadeInUp" data-wow-delay=".3s">
                <h3 class="promotion__title">KKTC Vatandaşı</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deleniti? Sapiente ullam molestiae iste impedit! Similique iusto dicta nemo facilis aut corporis inventore, reprehenderit, repellat maxime, doloremque molestiae tenetur temporibus.</p>
              </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="promotion__content pl-70 promotion__right wow fadeInUp" data-wow-delay=".5s">
                <h3 class="promotion__title">Yolcu</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nulla harum laborum, commodi dignissimos adipisci officiis recusandae ipsum numquam quod vitae iure fugiat porro maiores id facere qui reiciendis non!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- about area start -->
      <!-- about area end -->

      <!-- platform area start -->
      <section id="register" class="about__area grey-bg-3 pt-120 pb-120 p-relative">
        <div class="about__shape-2">
<!--          <img class="about-2-circle" src="~/assets/img/about/home-3/about-circle-2.png" alt="">-->
<!--          <img class="about-2-circle-2" src="~/assets/img/about/home-3/about-circle-3.png" alt="">-->
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-8 mt-100">
              <div class="about__thumb-3 wow fadeInLeft" data-wow-delay=".3s">
<!--                <img src="~/assets/img/about/home-3/uyg.png" alt="">-->
              </div>
            </div>
            <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-8 mb-100">
              <div class="about__content-3 pt-100">
                <div class="section__title-wrapper section__title-wrapper-2 mb-30 wow fadeInUp" data-wow-delay=".3s">
                  <span class="section__pre-title pink">İşletme Kaydı</span>
                  <h2 class="section__title section__title-2">İşletmenizi Uygulama için Kaydedin</h2>
                  <p>AdaPass kullanıcılarının işletmenize QR Kodla giriş yapabilmesi için işletmenizi kaydetmeniz gerekmektedir.</p>
                </div>
                <a href="#" class="w-btn w-btn-blue w-btn-3 w-btn-1">İşletmeni Kaydet</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- platform area end -->


      <!-- why area start -->
      <section id="quest" class="faq__area pt-140 pb-140">
        <div class="container">
          <div class="row">
            <div class="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
              <div class="faq__content">
                <div class="section__title-wrapper section__title-wrapper-2 mb-35 wow fadeInUp" data-wow-delay=".5s">
                  <h2 class="section__title section__title-2">Kuzey Kıbrıs AdaPass</h2>
                  <p>Uygulama hakkında merak ettiğiniz sorular.</p>
                </div>
                <div class="faq__counter wow fadeInUp" data-wow-delay=".7s">
                </div>
              </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div class="faq__wrapper wow fadeInUp" data-wow-delay=".3s">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Her Şube için ayrı bir QR mı almam gerekiyor ?
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>Evet alınması gerekiyor.</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hangi işletmeler QR Kod Almalı
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p> Tüm işletmeler. (İşletmesin de müşteri hizmeti veren tüm işletmeler)</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-none">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed pb-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        AdaPass Kod Nedir ?
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>AdaPass Kod sizin sağlık durumunuzu ve kişisel bilgilerinizi tutan bir QR kod.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- why area end -->

      <!-- testimonial area start -->

      <!-- testimonial area end -->

      <!-- blog area start -->

      <!-- blog area end -->

    </main>

    <div>
      <!-- footer area start -->
      <footer class="footer__area grey-bg-3 pt-120 p-relative fix">
        <div class="footer__shape">
          <img class="footer-circle-1 footer-2-circle-1" src="~/assets/img/icon/footer/home-1/circle-1.png" alt="">
          <img class="footer-circle-2 footer-2-circle-2" src="~/assets/img/icon/footer/home-1/circle-2.png" alt="">
        </div>
        <div class="footer__top pb-65">
          <div class="container">
            <div class="row">
              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                <div class="footer__widget mb-50">
                  <div class="footer__widget-title mb-25">
                    <div class="footer__logo">
                      <a href="#">
                        <img src="~/assets/img/logo/logo.png" alt="logo">
                      </a>
                    </div>
                  </div>
                  <div class="footer__widget-content">
                    <p>Kuzey Kıbrıs AdaPass</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  </div>

</template>

<script>

export default {

}
</script>

<style>
.missingheader {
  background: url("../assets/img/hero/home-3/hero-bg.jpg");
}
.missingcta {
  background: url("../assets/img/cta/home-3/cta-3-bg.jpg");
}
</style>
