<template>
  <div class="back-page" style="width: 100%; overflow-x: hidden">
    <headerSec class="d-print-none"></headerSec>
    <div class="d-print-none d-flex align-items-center" style="min-height: 90vh">
      <b-container class="pt-5" v-if="!error">
        <b-row>
          <b-col order-md="2" order="2" md="6">
            <div class="pl-md-5 d-flex align-items-center justify-content-center mb-4 mb-md-0">
              <div class="vaccine-card" v-if="!loading">
                <div class="bg-img"></div>
                <section class="d-flex align-items-center justify-content-center pt-4 ">
                  <div class="vaccine-header">
                    <img src="/images/cyprus-flag.png" alt="cy-flag">
                    <div class="pl-2">
                      <h5 class="v-h-first">Kuzey Kıbrıs Türk Cumhuriyeti AŞI KİMLİĞİ</h5>
                      <h5 class="v-h-second">Turkish Republic of Northern Cyprus VACCINATION ID</h5>
                    </div>
                  </div>
                </section>
                <section class="d-flex align-items-center justify-content-center">
                  <b-container fluid>
                    <b-row class="px-3 mt-2">
                      <b-col cols="6">
                        <div class="text-sec">
                          <i class="text-head">Kimlik No <span>/ Identity No</span></i>
                          <h1 class="text-main" v-if="vaccine.BelgeTur == 'kimlik'">{{ vaccine.BelgeNo || '-' }}</h1>
                          <h1 class="text-main" v-else>-</h1>
                        </div>
                        <div class="text-sec">
                          <i class="text-head">Soyadı <span>/ Surname</span></i>
                          <h1 class="text-main">{{ vaccine.Soyadi || '-' }}</h1>
                        </div>
                        <div class="text-sec">
                          <i class="text-head">Doğum Tarihi <span>/ Date of Birth</span></i>
                          <h1 class="text-main">{{ vaccine.DogumTarih || '-' }}</h1>
                        </div>
                      </b-col>
                      <b-col cols="6">
                        <div class="text-sec">
                          <i class="text-head">Pasaport No <span>/ Passaport No</span></i>
                          <h1 class="text-main" v-if="vaccine.BelgeTur == 'pasaport'">{{ vaccine.BelgeNo || '-' }}</h1>
                          <h1 class="text-main" v-else>-</h1>
                        </div>
                        <div class="text-sec">
                          <i class="text-head">Adı <span>/ Given Name(s)</span></i>
                          <h1 class="text-main">{{ vaccine.Adi || '-' }}</h1>
                        </div>
                        <div class="text-sec">
                          <i class="text-head">Doğum Yeri <span>/ Place Of Birth</span></i>
                          <h1 class="text-main">{{ vaccine.DogumYeri || '-' }}</h1>
                        </div>
                      </b-col>
                    </b-row>
                  </b-container>
                </section>
                <section class="px-3">
                  <div class="middle-card">
                    <img src="/images/logo-saglik.png" alt="cy-caretta">
                    <div class="pr-5">
                      <h5 class="tex">COVID-19 AŞISI OLMUŞTUR</h5>
                      <h5 class="tex-sub">COVID-19 VACCINATED</h5>
                    </div>
                  </div>
                </section>
                <section class="mb-1">
                  <b-container fluid>
                    <b-row class="px-3 mt-2">
                      <b-col cols="7" class="d-flex align-items-center">
                        <div>
                          <div class="text-sec-vaccine" v-for="(asi, index) in vaccine.Asi" :key="'asilar-' + index">
                            <small class="text-vaccine-date" v-if="asi.Tarih">Tarih: {{ asi.Tarih }}</small>
                            <h1 class="text-main">{{ asi.Asi }} </h1>
                          </div>
                        </div>
                      </b-col>
                      <b-col cols="5" class="d-flex align-items-center justify-content-center">
                        <div class="qr-code-area" v-if="vaccine && vaccine.qr">
                          <vue-qrcode v-if="vaccine.qr.prefix" :value="vaccine.qr.prefix + vaccine.qr.qrcode" :width="100"/>
                          <h1 class="qr-code-text">{{ vaccine.qr.qrcode || 'ERROR' }}</h1>
                        </div>
                      </b-col>
                    </b-row>
                  </b-container>
                </section>
                <section class="footer-sec">
                  <div class="ml-4">
                    <img src="/images/caretta.png" class="caretta-1" alt="AdaPass"/>
                    <img src="/images/caretta.png" class="caretta-2" alt="AdaPass"/>
                  </div>
                  <div class="sub-date" v-if="vaccine.OlusturmaTarih">{{ vaccine.OlusturmaTarih }} Tarihinde Oluşturulmuştur</div>
                </section>
              </div>
              <b-skeleton v-else class="skeleton"></b-skeleton>
            </div>
          </b-col>
          <b-col order-md="1" order="1" md="6" class="d-flex align-items-center justify-content-center">
            <div v-if="!loading" class="print-settings pr-md-5 text-center text-lg-start" style="max-width: 550px">
              <div v-if="$route.query.new">
                <h2 class="text-white">Aşı Belgeniz Başarı İle Oluşturulmuştur !</h2>
                <h5 class="text-white" style="opacity: .5">Aşı belgenizi isterseniz cihazınıza kaydedebilir veya hemen yazdırabilirsiniz.</h5>
                <div class="py-3">
                  <b-button variant="outline-success" @click="savePdf">PDF Olarak Kaydet <b-spinner v-if="pdfLoad" class="ml-1" small></b-spinner> </b-button>
                  <b-button variant="outline-success" class="ml-2" @click="print">Yazdır</b-button>
                </div>
              </div>
              <div class="px-3" v-else>
                <h2 class="text-white">Aşı Belgesi Onaylanmıştır!</h2>
                <h5 class="text-white" style="opacity: .5">#{{ vaccine.BelgeNo || '-' }}</h5>
              </div>
            </div>
            <div v-else  class="print-settings pr-md-5 text-center text-md-left" style="max-width: 550px">
              <b-skeleton class="mb-3 mx-auto mx-md-0" width="30vw"></b-skeleton>
              <b-skeleton class="mb-3 mx-auto mx-md-0" width="20vw"></b-skeleton>
              <b-skeleton class="mx-auto mx-md-0" width="10vw"></b-skeleton>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="d-flex align-items-center justify-content-center px-3 w-100" style="min-height: 40vh" v-else>
        <div class="error-card">
          <h3>{{ error }}</h3>
          <h4>Kayıt Bulunamadı !</h4>
          <b-button variant="danger" class="mt-2" @click="$router.push('/')">Ana Sayfaya Dön</b-button>
        </div>
      </div>
    </div>
    <footerSec class="d-print-none"></footerSec>
    <section class="d-none d-print-flex align-items-center p-5">
      <div class="vaccine-card">
        <div class="bg-img"></div>
        <section class="d-flex align-items-center justify-content-center pt-4 ">
          <div class="vaccine-header">
            <img src="/images/cyprus-flag.png" alt="AdaPass">
            <div class="pl-2">
              <h5 class="v-h-first">Kuzey Kıbrıs Türk Cumhuriyeti AŞI KİMLİĞİ</h5>
              <h5 class="v-h-second">Turkish Republic of Northern Cyprus VACCINATION ID</h5>
            </div>
          </div>
        </section>
        <section class="d-flex align-items-center justify-content-center">
          <b-container fluid>
            <b-row class="px-3 mt-2">
              <b-col cols="6">
                <div class="text-sec">
                  <i class="text-head">Kimlik No <span>/ Identity No</span></i>
                  <h1 class="text-main" v-if="vaccine.BelgeTur == 'kimlik'">{{ vaccine.BelgeNo || '-' }}</h1>
                  <h1 class="text-main" v-else>-</h1>
                </div>
                <div class="text-sec">
                  <i class="text-head">Soyadı <span>/ Surname</span></i>
                  <h1 class="text-main">{{ vaccine.Soyadi || '-' }}</h1>
                </div>
                <div class="text-sec">
                  <i class="text-head">Doğum Tarihi <span>/ Date of Birth</span></i>
                  <h1 class="text-main">{{ vaccine.DogumTarih || '-' }}</h1>
                </div>
              </b-col>
              <b-col cols="6">
                <div class="text-sec">
                  <i class="text-head">Pasaport No <span>/ Passaport No</span></i>
                  <h1 class="text-main" v-if="vaccine.BelgeTur == 'pasaport'">{{ vaccine.BelgeNo || '-' }}</h1>
                  <h1 class="text-main" v-else>-</h1>
                </div>
                <div class="text-sec">
                  <i class="text-head">Adı <span>/ Given Name(s)</span></i>
                  <h1 class="text-main">{{ vaccine.Adi || '-' }}</h1>
                </div>
                <div class="text-sec">
                  <i class="text-head">Doğum Yeri <span>/ Place Of Birth</span></i>
                  <h1 class="text-main">{{ vaccine.DogumYeri || '-' }}</h1>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="px-3">
          <div class="middle-card">
            <img src="/images/logo-saglik.png" alt="AdaPass">
            <div class="pr-5">
              <h5 class="tex">COVID-19 AŞISI OLMUŞTUR</h5>
              <h5 class="tex-sub">COVID-19 VACCINATED</h5>
            </div>
          </div>
        </section>
        <section class="mb-1">
          <b-container fluid>
            <b-row class="px-3 mt-2">
              <b-col cols="7" class="d-flex align-items-center">
                <div>
                  <div class="text-sec-vaccine" v-for="(asi, index) in vaccine.Asi" :key="'asilar-' + index">
                    <small class="text-vaccine-date" v-if="asi.Tarih">Tarih: {{ asi.Tarih }}</small>
                    <h1 class="text-main">{{ asi.Asi }} </h1>
                  </div>
                </div>
              </b-col>
              <b-col cols="5" class="d-flex align-items-center justify-content-center">
                <div class="qr-code-area" v-if="vaccine && vaccine.qr">
                  <vue-qrcode v-if="vaccine.qr.prefix" :value="vaccine.qr.prefix + vaccine.qr.qrcode" :width="100"/>
                  <h1 class="qr-code-text">{{ vaccine.qr.qrcode || 'ERROR' }}</h1>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </section>
        <section class="footer-sec">
          <div class="ml-4">
            <img src="/images/caretta.png" class="caretta-1" alt="AdaPass"/>
            <img src="/images/caretta.png" class="caretta-2" alt="AdaPass"/>
          </div>
          <div class="sub-date" v-if="vaccine.OlusturmaTarih">{{ vaccine.OlusturmaTarih }} Tarihinde Oluşturulmuştur</div>
        </section>
      </div>
    </section>
    <client-only>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="false"
        :preview-modal="false"
        filename="KKTC-COVID-ASI-KIMLIGI"
        :paginate-elements-by-height="1100"
        :pdf-quality="2"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="800px"
        :manual-pagination="false"
        @beforeDownload="beforeDownload($event)"
        ref="html2Pdf">
        <section slot="pdf-content">
          <section class="d-flex justify-content-center p-5" style="height: 90vh">
            <div class="vaccine-card">
              <div class="bg-img"></div>
              <section class="d-flex align-items-center justify-content-center pt-4 ">
                <div class="vaccine-header">
                  <img src="/images/cyprus-flag.png" alt="AdaPass">
                  <div class="pl-2">
                    <h5 class="v-h-first">Kuzey Kıbrıs Türk Cumhuriyeti AŞI KİMLİĞİ</h5>
                    <h5 class="v-h-second">Turkish Republic of Northern Cyprus VACCINATION ID</h5>
                  </div>
                </div>
              </section>
              <section class="d-flex align-items-center justify-content-center">
                <b-container fluid>
                  <b-row class="px-3 mt-2">
                    <b-col cols="6">
                      <div class="text-sec">
                        <i class="text-head">Kimlik No <span>/ Identity No</span></i>
                        <h1 class="text-main" v-if="vaccine.BelgeTur == 'kimlik'">{{ vaccine.BelgeNo || '-' }}</h1>
                        <h1 class="text-main" v-else>-</h1>
                      </div>
                      <div class="text-sec">
                        <i class="text-head">Soyadı <span>/ Surname</span></i>
                        <h1 class="text-main">{{ vaccine.Soyadi || '-' }}</h1>
                      </div>
                      <div class="text-sec">
                        <i class="text-head">Doğum Tarihi <span>/ Date of Birth</span></i>
                        <h1 class="text-main">{{ vaccine.DogumTarih || '-' }}</h1>
                      </div>
                    </b-col>
                    <b-col cols="6">
                      <div class="text-sec">
                        <i class="text-head">Pasaport No <span>/ Passaport No</span></i>
                        <h1 class="text-main" v-if="vaccine.BelgeTur == 'pasaport'">{{ vaccine.BelgeNo || '-' }}</h1>
                        <h1 class="text-main" v-else>-</h1>
                      </div>
                      <div class="text-sec">
                        <i class="text-head">Adı <span>/ Given Name(s)</span></i>
                        <h1 class="text-main">{{ vaccine.Adi || '-' }}</h1>
                      </div>
                      <div class="text-sec">
                        <i class="text-head">Doğum Yeri <span>/ Place Of Birth</span></i>
                        <h1 class="text-main">{{ vaccine.DogumYeri || '-' }}</h1>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </section>
              <section class="px-3">
                <div class="middle-card">
                  <img src="/images/logo-saglik.png" alt="AdaPass">
                  <div class="pr-5">
                    <h5 class="tex">COVID-19 AŞISI OLMUŞTUR</h5>
                    <h5 class="tex-sub">COVID-19 VACCINATED</h5>
                  </div>
                </div>
              </section>
              <section class="mb-1">
                <b-container fluid>
                  <b-row class="px-3 mt-2">
                    <b-col cols="7" class="d-flex align-items-center">
                      <div>
                        <div class="text-sec-vaccine" v-for="(asi, index) in vaccine.Asi" :key="'asilar-' + index">
                          <small class="text-vaccine-date" v-if="asi.Tarih">Tarih: {{ asi.Tarih }}</small>
                          <h1 class="text-main">{{ asi.Asi }} </h1>
                        </div>
                      </div>
                    </b-col>
                    <b-col cols="5" class="d-flex align-items-center justify-content-center">
                      <div class="qr-code-area" v-if="vaccine && vaccine.qr">
                        <vue-qrcode v-if="vaccine.qr.prefix" :value="vaccine.qr.prefix + vaccine.qr.qrcode" :width="100"/>
                        <h1 class="qr-code-text">{{ vaccine.qr.qrcode || 'ERROR' }}</h1>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </section>
              <section class="footer-sec">
                <div class="ml-4">
                  <img src="/images/caretta.png" class="caretta-1" alt="AdaPass"/>
                  <img src="/images/caretta.png" class="caretta-2" alt="AdaPass"/>
                </div>
                <div class="sub-date" v-if="vaccine.OlusturmaTarih">{{ vaccine.OlusturmaTarih }} Tarihinde Oluşturulmuştur</div>
              </section>
            </div>
          </section>
        </section>
      </vue-html2pdf>
    </client-only>

  </div>
</template>

<script>
import VueQrcode from 'vue-qrcode'
import headerSec from "~/components/loyout/headerSec";
import footerSec from "~/components/loyout/footerSec";

export default {
  components: {
    VueQrcode,
    headerSec,
    footerSec
  },
  name: 'vaccine',
  data() {
    return {
      error: '',
      loading: true,
      pdfLoad: false,
      vaccine: {
        BelgeNo: '-',
        Soyadi: '-',
        Adi: '-',
        DogumTarih: '-.-.-',
        DogumYeri: '-',
        Asi: [],
        qr: {
          prefix: 'www.adapass.gov.ct.tr/asi?id=',
          id: '-'
        },
        OlusturmaTarih: '-.-.-'
      },

    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData () {
      let params = await this.$route.query.id;
      this.$axios.$get('/vaccini/kontrol/' + params).then(res=>{
        if(res.Hata) {
          this.error = res.Hata
        } else {
          this.vaccine = res
        }
        this.loading = false
      }).catch(error => {
        console.log(error)
        this.loading = false
      })
    },
    print: function () {
      window.print()
    },
    async savePdf () {
      this.pdfLoad = true;
      this.$refs.html2Pdf.generatePdf()
    },
    async beforeDownload ({ html2pdf, options, pdfContent }) {
      await html2pdf().set(options).from(pdfContent).toPdf().get('pdf').save()
      this.pdfLoad = false;
    }
  }
}
</script>
<style>

@media print{
  @page {
    size: landscape;
  }
  .back-page {
    background-color: transparent!important;
  }
}


.back-page {
  min-height: 100vh;
  background-color: #2C3E50;
}
.ok-img {
  width: 80px;
}
.bg-img {
  -webkit-print-color-adjust: exact;
  position: absolute;
  height: 100%;
  opacity: .3;
  background-image: url("~static/images/background-asi.png");
  background-repeat: no-repeat;
  width: 345px;
  background-size: cover;
  background-position: 70%;
}
.vaccine-card {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: white;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 525px;
  max-height: 525px;
  min-width: 350px;
  max-width: 350px;
  border: 2px solid #2C3E50;
}
.skeleton {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  min-height: 525px;
  max-height: 525px;
  min-width: 350px;
  max-width: 350px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid #2C3E50;
}
.skeleton-text {
  width: 20rem;
}
.vaccine-header {
  display: flex;
  align-items: center;
}
.vaccine-header img {
  width: 40px;
  height: auto;
}
.v-h-first {
  font-size: 11px;
  font-weight: bold;
  color: #2C3E50;
  margin-bottom: 5px;
}
.v-h-second {
  font-size: 8px;
  font-weight: bold;
  color: #2C3E50;
  opacity: .5;
  margin-bottom: 0;
}
.text-head {
  font-size: 8px;
  color: #2C3E50;
  margin: 0!important;
}
.text-sec {
  margin-bottom: 7px;
}
.text-sec-vaccine {
  margin-bottom: 5px;
}
.text-vaccine-date {
  line-height: 10px;
  font-size: 10px;
  font-weight: bold;
}
.text-head span {
  opacity: .5;
}
.text-main {
  font-size: 12px;
  color: #2C3E50;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
}
.middle-card {
  -webkit-print-color-adjust: exact;
  margin-top: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2C3E50;
  border-radius: 10px;
  padding: 7px;
}
.middle-card img {
  width: 45px;
  margin-right: 15px;
}
.middle-card .tex {
  color: white;
  font-size: 12px;
  margin-bottom: 4px;
}
.middle-card .tex-sub {
  color: white;
  font-size: 10px;
  margin-bottom: 0;
  opacity: .5;
}

.symbol-logo {
  width: 50px;
  cursor: pointer;
}
.header-first-qr {
  cursor: pointer;
  font-size: 1.5rem;
  color: #2C3E50;
  margin-bottom: 5px;
}
.header-sub-qr {
  cursor: pointer;
  color: #2C3E50;
  opacity: .3;
  margin-bottom: 0;
}
.qr-code-area {
  -webkit-print-color-adjust: exact;
  border-radius: 20px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.qr-code-text {
  font-size: 12px;
  text-align: center;
  margin-bottom: 0;
  color: #2C3E50;
  font-weight: bold;
}
.footer-sec {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
}
.caretta-1 {
  width: 10px;
  opacity: .5;
}

.caretta-2 {
  width: 20px;
  margin-bottom: 20px;
  opacity: .8;
}
.sub-date {
  font-weight: bold;
  font-size: 10px;
  margin-left: 70px;
  opacity: .4;
  color: #2C3E50;
}
.error-card {
  padding: 40px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  border-radius: 10px;
  color: #2C3E50;
  text-align: center;
  text-transform: capitalize;
}

</style>
