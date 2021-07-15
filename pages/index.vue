<template>
  <div style="width: 100%; overflow-x: hidden">
    <div v-if="!isMounted" class="loading">
      <div>
        <img src="~/assets/img/logo/logo.png" alt="logo">
        <div class="d-flex align-items-center justify-content-center mt-4">
          <b-spinner></b-spinner>
        </div>
      </div>
    </div>
    <headerSec v-if="isMounted"></headerSec>

    <main v-if="isMounted">

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
            <div class="col-lg-6">
              <div class="hero__thumb-3 ">
                <img class="hero-phone wow fadeInLeft" style="width: 400px" data-wow-delay=".3s" src="../static/images/vaccine-card.png"/>
                <img class="hero-3-dot-2" src="~/assets/img/icon/hero/home-3/hero-dot-2.png" alt="">
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="hero__content-3 mb-100 ">
                <h3 class="hero__title-3 wow fadeInUp text-center text-lg-start" data-wow-delay=".3s">K.K.T.C. AdaPass</h3>
                <p class="wow fadeInUp text-center text-lg-start" data-wow-delay=".5s">AdaPass uygulaması ile hemen aşı belgenizi sorgulayıp anında oluşturabilirsiniz</p>
                <div class="wow fadeInUp text-center text-lg-start" data-wow-delay=".7s">
                  <a href="/asiBelgesi" class="w-btn w-btn-purple">Aşı Belgeni Oluştur !</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--      <section id="uygulama" class="about__area pb-120 p-relative pt-100">
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
                        <p>Giriş izni alabilmek için bu adımları tamamlamanız gerekiyor.</p>
                      </div>
                      <ul>
                        <li> <p style="font-weight: bold;">PCR Testi</p> Ülkenizde yaptığınız PCR testini yükleyin</li>
                        <li> <p style="font-weight:bold;"> Aşı Belgesi </p> Sahip olduğunuz aşı belgesini yükleyin</li>
                        <li> <p style="font-weight:bold;"> Uçuş Bileti</p> Satın aldığınız uçuşun PNR kodunu girin</li>
                        <li> <p style="font-weight:bold;">Çocuk Ekleyin (Eğer Varsa)</p> Yaşı 12’den küçük çocuklarınızı ekleyebilirsiniz. 12 yaşından büyük çocuklarınız için hesap oluşturmanız gerekiyor.</li>
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
            </section>-->

      <!--      <section class="about__area pb-50 pt-80 p-relative">
              <div class="about__shape">
                <img class="about-plus" src="~/assets/img/icon/about/home-1/plus.png" alt="">
                <img class="about-triangle-2" src="~/assets/img/icon/about/home-1/triangle-2.png" alt="">
                <img class="about-circle-4" src="~/assets/img/icon/about/home-1/circle-4.png" alt="">
                <img class="about-circle-5" src="~/assets/img/icon/about/home-1/circle-5.png" alt="">
              </div>
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-xxl-6 col-xl-6 col-lg-6">
                    <div class="about__thumb-wrapper p-relative ml&#45;&#45;auto fix mr-90">
                      <img src="~/assets/img/about/home-1/about-bg-2.png" style="max-width: 50vh" alt="">
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-9">
                    <div class="about__wrapper about__wrapper-2 ml-60 mb-30">
                      <div class="section__title-wrapper mb-25">
                        <h2 class="section__title">QR Kodla Giriş</h2>
                        <p>İşlemlerinizi tamamladığınız zaman mekanlara girişiniz çok daha kolay hale gelecek. Tek yapmanız gereken AdaPass uygulamasını açıp giriş yapacağınız mekandaki QR kodu okutmak. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>-->

      <!--      <section class="about__area pt-80 pb-30 grey-bg-5">
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
            </section>-->

      <!--      <section class="promotion__area promotion__bg pt-125 pb-125 p-relative">
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
                      <p>Kuzey Kıbrısta yaşayan veya ikamet eden her bireyin mobil uygulama ile QR kodu okutarak işletmelere rahatça girip çıkabilirsiniz.</p>
                      <a href="about.html" class="w-btn w-btn-8">Hemen İndirin</a>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="promotion__content pl-70 promotion__right wow fadeInUp" data-wow-delay=".5s">
                      <h3 class="promotion__title">KKTC Yolcusu</h3>
                      <p>Kuzey Kıbrıs'a giriş yapabilmek için uygulamayı indirin, kayıt formunu tamamlayın ve ülkeye giriş için onay alın</p>
                      <a href="about.html" class="w-btn w-btn-8">Hemen İndirin</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>-->

      <!--      <section id="register" class="about__area grey-bg-3 pt-50 pb-50 p-relative">
              <div class="about__shape-2">
                <img class="about-2-circle" src="~/assets/img/about/home-3/about-circle-2.png" alt="">
                <img class="about-2-circle-2" src="~/assets/img/about/home-3/about-circle-3.png" alt="">
              </div>
              <div class="container mb-100">
                <div class="row">
                  <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-8 mt-140">
                    <div class="about__thumb-3 wow fadeInLeft" data-wow-delay=".3s">
                      <img src="~/assets/img/about/home-3/uyg.png" alt="">
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
            </section>-->

      <section id="quest" class="faq__area pt-50 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
              <div class="faq__content">
                <div class="section__title-wrapper section__title-wrapper-2 mb-35 wow fadeInUp" data-wow-delay=".5s">
                  <h2 class="section__title section__title-2">K.K.T.C. AdaPass</h2>
                  <p>K.K.T.C. Aşı Belgenizi Hemen Alın!</p>
                </div>
                <div class="faq__counter wow fadeInUp" data-wow-delay=".7s">
                </div>
              </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div class="faq__wrapper wow fadeInUp" data-wow-delay=".3s">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item border-none">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed pb-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        AdaKod Nedir ?
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p class="text-capitalize">AdaPass Kodu K.K.T.C.' de yaptırmış olduğunuz aşının dijital bir çıktısıdır. AdaPass kodu ile işletmelere yapacağınız giriş çıkışlar bu kodu göstererek aşı olduğunuzu beyan edecektir.</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        QR Kodum Nerelerde Geçerli ?
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p class="text-capitalize">QR kodunuz giriş çıkış yapacağınız tüm işletmelerde ve K.K.T.C.' ye yapacağınız giriş çıkışlarda Geçerlidir.</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Kim veya kimler QR kodu sahibi olmalı
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p class="text-capitalize">K.K.T.C.'de ikamet eden veya K.K.T.C.' ye giriş yapacak olan tüm bireylerin aşı olduğu takdirde AdaPass Kodu alması gerekmektedir.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <footerSec></footerSec>
  </div>
</template>

<script>
import headerSec from "~/components/loyout/headerSec";
import footerSec from "~/components/loyout/footerSec";

export default {
  name: "mainPage",
  components: {
    headerSec,
    footerSec
  },
  data() {
    return {
      isMounted: false,
    }
  },
  mounted() {
    this.isMounted = true
  }
}
</script>

<style>
.missingheader {
  background: url("../assets/img/hero/home-3/hero-bg.jpg");
}
.missingcta {
  background: url("../assets/img/cta/home-3/cta-3-bg.jpg");
}
.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #19947b;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay-image-card {
  position: absolute;
  left: 0;
  background-color: red;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
