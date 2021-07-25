<template>
  <div>
    <loading :status="siteLoading"></loading>
    <headerSec></headerSec>
    <b-container fluid class="h-100" style="padding-top: 2rem;">
      <b-row>
        <b-col lg="6" class="d-none d-lg-flex align-items-center justify-content-center" style="min-height: 70vh">
          <img class="p-5 w-75" src="/company/dashboard.svg" alt="AdaPass" style="max-height: 600px">
        </b-col>
        <b-col lg="6" class="pr-lg-5">
          <b-row>
            <b-col cols="12">
              <div class="mb-3 mt-5 d-flex align-items-center">
                <div>
                  <h1 class="text-capitalize">{{ info.Adi }}</h1>
                  <span class="font-weight-bold" v-if="sector"> <span class="fas fa-building"></span> {{ sector.Aciklama }}</span>
                </div>
              </div>
            </b-col>
            <b-col cols="12">

              <div class="mb-2 mt-4">
                <span class="font-weight-bold" style="opacity: .5">QR Kodu Servisleri</span>
              </div>

              <div style="min-height: 90px">
                <b-button block class="buttonadps max-with mb-3" @click="$router.push({ name: 'company-camera' })">
                  <div class="w-100 d-flex align-items-center justify-content-start m-2 btn-icon">
                    <span class="fa fa-qrcode "></span>
                    <h1 class="btn-text">Qr Kodu Okuyucu</h1>
                  </div>
                </b-button>
              </div>

              <div class="manuel-qr-card py-3 px-3 px-md-4">
                <h6 class="manuel-head-t">QR Kodu Girin</h6>

                <b-input-group style="border-radius: 10px!important; overflow: hidden">
                  <template #append>
                    <b-input-group-text class="concat-btn" @click="checkQrCode">
                      <div v-if="!loadingBtn">
                        <strong class="text-white">Kontrol Et</strong>
                      </div>
                      <div v-else class="d-flex align-items-center justify-content-center">
                        <b-spinner small variant="light"></b-spinner>
                      </div>
                    </b-input-group-text>
                  </template>
                  <b-form-input autocomplete="off" class="qr-input" v-model="formQrcode" placeholder="Qr Kodu Girin" v-on:keyup.enter="checkQrCode"></b-form-input>
                </b-input-group>
                <small class="text-danger ml-1" v-if="formError">{{ formError }}</small>

                <div class="mt-2">
                  <span class="font-weight-bold" style="opacity: .5; font-size: 14px">QR kodu okuyucu cihazınızla bilgisayarınız ile QR kodları okuyabilirsiniz veya elle yazabilirsiniz.</span>
                </div>
              </div>

              <div class="mb-2 mt-4">
                <span class="font-weight-bold" style="opacity: .5">İstatistik</span>
              </div>

              <b-row>
                <b-col md="6" class="mb-3 mb-md-0">
                  <div class="stat-card">
                    <div class="stat-head">
                      <span>Günlük Geçiş</span>
                    </div>
                    <div class="stat-body">
                      <h5>{{ info.Gunluk }}</h5>
                    </div>
                  </div>
                </b-col>
                <b-col md="6">
                  <div class="stat-card">
                    <div class="stat-head">
                      <span>Aylık Geçiş</span>
                    </div>
                    <div class="stat-body">
                      <h5>{{ info.Aylik }}</h5>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-30 mb-30">
                  <b-button block size="sm" class="buttonadps" @click="$auth.logout()">Çıkış Yap</b-button>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <b-modal ref="infoModal" hide-footer centered>
      <template #modal-header>
        <div v-if="status" class="w-100 success-modal">
          <h1>Geçiş Onaylandı!</h1>
        </div>
        <div v-else class="w-100 error-modal">
          <h1>Geçiş Onaylanmadı!</h1>
        </div>
      </template>
      <b-container fluid>
        <b-row style="min-height: 20vh">
          <b-col xl="4" class="d-flex align-items-center justify-content-center">
            <img v-if="status" class="img-fluid" style="max-width: 150px" src="../../static/company/aplogo.png" alt="AdaPass"/>
            <span v-else class="fas fa-times-circle modal-icon" style="color: #E74C3C!important;"></span>
          </b-col>
          <b-col xl="8" class="d-flex align-items-center justify-content-center mb-30 px-3">
            <div class="w-100 text-center text-xl-start mt-3 mt-md-0">
              <div class="mb-20" v-if="payloadInfo.errorInfo">
                <span class="desc-head">Red Nedeni</span>
                <h3>{{ payloadInfo.errorInfo }}</h3>
              </div>
              <div class="mb-20" v-if="payloadInfo.error">
                <span class="desc-head">Red Nedeni</span>
                <h3>{{ payloadInfo.error }}</h3>
              </div>
              <div class="mb-2" v-if="payloadInfo.name">
                <span style="color: #2C3E50; opacity: .5; font-weight: bold; font-size: 12px">Kişi Bilgisi</span>
              </div>
              <b-row class="border-bottom pb-2 mb-3" v-if="payloadInfo.name">
                <b-col cols="6">
                  <div class="desc">Adı:</div>
                </b-col>
                <b-col cols="6">
                  <div class="description">{{ payloadInfo.name }}</div>
                </b-col>
              </b-row>
              <b-row class="border-bottom pb-2 mb-3" v-if="payloadInfo.lastname">
                <b-col cols="6">
                  <div class="desc">Soyadı:</div>
                </b-col>
                <b-col cols="6">
                  <div class="description">{{ payloadInfo.lastname }}</div>
                </b-col>
              </b-row>
              <b-row class="border-bottom pb-2 mb-3" v-if="payloadInfo.idNo">
                <b-col cols="6">
                  <div class="desc">{{ payloadInfo.idType || 'Belge' }} No:</div>
                </b-col>
                <b-col cols="6">
                  <div class="description" v-b-tooltip.hover :title="payloadInfo.idNo">{{ payloadInfo.idNo }}</div>
                </b-col>
              </b-row>
              <b-row class="border-bottom pb-2 mb-4" v-if="payloadInfo.code">
                <b-col cols="6">
                  <div class="desc">QR Kodu:</div>
                </b-col>
                <b-col cols="6">
                  <div class="description">#{{ payloadInfo.code }}</div>
                </b-col>
              </b-row>
              <template v-if="payloadInfo.vaccine && payloadInfo.vaccine.length">
                <div class="mb-2">
                  <span class="desc-head">Aşı Bilgisi</span>
                </div>
                <b-row class="border-bottom pb-1 mb-2" v-for="(vaccine, index) in payloadInfo.vaccine" :key="'vaccines-' + index">
                  <b-col cols="6">
                    <div class="desc-sub">{{ vaccine.Tarih }}</div>
                  </b-col>
                  <b-col cols="6">
                    <div class="description-sub">{{ vaccine.Asi }}</div>
                  </b-col>
                </b-row>
              </template>
              <template v-if="payloadInfo.pcr && payloadInfo.pcr.length">
                <div class="mb-2">
                  <span class="desc-head">PCR
                    <template v-if="payloadInfo.pcr.length > 1">Testleri</template>
                    <template v-else>Testi</template>
                  </span>
                </div>
                <b-row class="border-bottom pb-1 mb-2" v-for="(pcr, index) in payloadInfo.pcr" :key="'pcrTests-' + index">
                  <b-col cols="6">
                    <div class="desc-sub">{{ pcr.Tarih }}</div>
                  </b-col>
                  <b-col cols="6">
                    <div class="description-sub">{{ pcr.Sonuc }}</div>
                  </b-col>
                </b-row>
              </template>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="px-5">
        <b-button block class="buttonadps-sec mb-2" @click="$refs['infoModal'].hide()">Kapat</b-button>
      </div>
    </b-modal>

  </div>
</template>

<script>
import headerSec from "@/components/loyout/headerSec"
import footerSec from "@/components/loyout/footerSec"
import loading from "@/components/loading";
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import "vue-select/src/scss/vue-select.scss";

export default {
  name: 'dashboard',
  middleware: 'auth',
  components: {
    headerSec,
    footerSec,
    loading,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      loadingBtn: false,
      siteLoading: true,
      info: {
        Adi: '',
        Gunluk: 0,
        Aylik: 0
      },
      formQrcode: '',
      formError: '',
      sectors: [],
      payloadInfo: {
        error: '',
        name: '',
        lastname: '',
        code: '',
        pcr: [],
        vaccine: [],
        idType: '',
        idNo: ''
      },
      status: false,
    }
  },
  computed: {
    sector: function () {
      return this.sectors.find(x => x._id === this.info.Sektor)
    }
  },
  mounted() {
    this.getInfo();
    setTimeout(() => this.siteLoading = false, 500)
  },
  methods: {
    async getInfo (){
      /* get company type from server */
      this.$axios.$get('/sectors').then((res) => {
        this.sectors = res
        }, (error) => {
          console.log(error)
        });

      this.$axios.$get('/company/myCompany', { headers: { authorization: await this.$auth.strategy.token.get() }}).then(res=>{
        localStorage.setItem('pwaCompany', "true");
        this.info = res
        }).catch(error => {
          console.log(error)
        });
    },

    async checkQrCode () {
      this.formError = '';
      if(!this.formQrcode) {
        this.formError = "Lütfen QR Kodu Giriniz"
      } else {
        this.loadingBtn = true
        if(this.formQrcode.length > 50 ) {
          this.$axios.$post('/company/greenPass/', { qrCode: this.formQrcode },{ headers: { authorization: await this.$auth.strategy.token.get() }}).then(res=>{
            console.log(res)
            this.showResult( res )
          }).catch(error => {
            this.playSound(false)
            console.log(error)
          });
        } else {
          this.formQrcode = encodeURIComponent(this.formQrcode)
          this.$axios.$get('/company/checkin/' + this.formQrcode, { headers: { authorization: await this.$auth.strategy.token.get() }}).then(res=>{
            this.loadingBtn = false
            this.showResult( res )
            console.log(res)
          }).catch(error => {
            this.loadingBtn = false
            this.playSound(false)
            console.log(error)
          });
        }
      }
    },

    showResult: function ( payload ) {
      this.payloadInfo = {}
      this.loadingBtn = false
      if ( payload.Durum === 'true' ) {
        this.playSound(true)
        this.status = true
        this.$refs['infoModal'].show();
      } else if ( payload.Durum === 'false' || payload.Hata ) {
        this.playSound(false)
        this.status = false
        this.$refs['infoModal'].show();
      }
      if( payload ) {
        this.payloadInfo = {
          error: payload.Hata || '',
          errorInfo: payload.Mesaj || '',
          name: payload.Adi,
          lastname: payload.Soyadi,
          code: payload.qrCode,
          pcr: payload.Pcr,
          vaccine: payload.Asi,
          idType: payload.BelgeTur,
          idNo: payload.BelgeNo,
        }
      }
      this.formQrcode = '';
    },

    playSound: function ( status ) {
      if( status ) {
        var audio = new Audio('/sounds/success.wav')
        audio.play();
      } else {
        var audio = new Audio('/sounds/error.wav')
        audio.play();
      }
    }
  }
}
</script>

<style>
.btn-icon {
  font-size: 30px!important;
}
.btn-text {
  margin-bottom: 0!important;
  font-size: 18px;
  margin-left: 10px!important;
  color: #FFFFFF;
  font-weight: bold;
}

.manuel-qr-card {
  border-radius: 20px;
  border: 2px solid #19947b;
}

.qr-input {
  font-weight: bold;
  font-size: 18px;
  background-color: #DFE2E5!important;
  border: none!important;
}
.qr-input:focus {
  background-color: #DFE2E5!important;
  box-shadow: none!important;
}
.qr-input::placeholder {
  font-size: 18px;
}
.concat-btn {
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10vw;
  background-color: #19947b!important;
}
.manuel-head-t {
  font-weight: bold;
  color: #2C3E50;
  margin-bottom: 15px;
}
.stat-card {
  border-radius: 10px;
  border: 2px solid #19947b;
}
.stat-head {
  padding: 8px;
  background-color: #19947b;
  border-radius: 5px 5px 0 0;
  text-align: center;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
}
.stat-body {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-body h5 {
  color: #19947b;
  font-weight: bold;
  font-size: 36px;
}
.modal-dialog {
  min-width: 40vw!important;
}
.modal-header {
  padding: 0!important;
}
.success-modal {
  background-color: #19947b!important;
  padding-top: 15px;
  padding-bottom: 15px;
}
.success-modal h1 {
  margin-bottom: 0!important;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF!important;
}
.error-modal {
  background-color: #E74C3C!important;
  padding-top: 15px;
  padding-bottom: 15px;
}
.error-modal h1 {
  margin-bottom: 0!important;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF!important;
}
.modal-header h5 {
  width: 100%;
  text-align: center;
  color: #FFFFFF!important;
}
.modal-icon {
  font-size: 120px;
}
.desc {
  font-size: 18px;
  color: #2C3E50;
  opacity: .8;
  font-weight: bold;
  text-transform: capitalize;
}
.description {
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 18px;
  color: #2C3E50;
  font-weight: bold;
  text-transform: capitalize;
}
.desc-sub {
  font-size: 12px;
  font-weight: bold;
  color: #2C3E50;
  opacity: .9;
  text-transform: capitalize;
}
.description-sub {
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: bold;
  color: #2C3E50;
  text-transform: capitalize;
}
.desc-head {
  color: #2C3E50;
  opacity: .5;
  font-weight: bold;
  font-size: 12px;
}
</style>
