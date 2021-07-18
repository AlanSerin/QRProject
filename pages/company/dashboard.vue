<template>
  <div>
    <headerSec></headerSec>
    <b-container fluid class="h-100" style="padding-top: 2rem;">
      <b-row>
        <b-col lg="6" class="d-none d-lg-flex align-items-center justify-content-center" style="min-height: 70vh">
          <img class="p-5 w-75" src="/company/dashboard.svg" alt="" style="max-height: 600px">
        </b-col>
        <b-col lg="6" class="pr-lg-5">
          <b-row>
            <b-col cols="12">
              <div class="mb-3 mt-5">
                <h1 class="text-capitalize">{{ info.company }}</h1>
                <span class="font-weight-bold">Hemen QR kodu Okutunuz. </span>
              </div>
            </b-col>
            <b-col cols="12">

              <div class="mb-2 mt-4">
                <span class="font-weight-bold" style="opacity: .5">QR Kodu Servisleri</span>
              </div>

              <div style="min-height: 90px">
                <b-button block class="buttonadps max-with mb-3">
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
                  <b-form-input autocomplete="off" class="qr-input" v-model="formQrcode" placeholder="Qr Kodu Girin" :maxlength="30" v-on:keyup.enter="checkQrCode"></b-form-input>
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
                      <h5 class="counter">{{ info.day }}</h5>
                    </div>
                  </div>
                </b-col>
                <b-col md="6">
                  <div class="stat-card">
                    <div class="stat-head">
                      <span>Aylık Geçiş</span>
                    </div>
                    <div class="stat-body">
                      <h5 class="counter">{{ info.month }}</h5>
                    </div>
                  </div>
                </b-col>
              </b-row>

            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <b-modal ref="errorModal" class="error-modal" hide-footer centered>
      <template #modal-header>
        <div class="w-100 error-modal">
          <h1>Geçiş Onaylanmadı!</h1>
        </div>
      </template>
      <b-container fluid>
        <b-row style="min-height: 20vh">
          <b-col md="4" class="d-flex align-items-center justify-content-center">
            <span class="fas fa-times-circle modal-icon" style="color: #E74C3C!important;"></span>
          </b-col>
          <b-col md="8" class="d-flex align-items-center justify-content-center">
            <div v-if="errorInfo.reason" class="w-100 text-center text-md-start mt-3 mt-md-0">
              <span style="color: #2C3E50; opacity: .7;">Red Nedeni</span>
              <h4 class="mt-1" style="color: #2C3E50; font-size: 18px">{{ errorInfo.reason }}</h4>
            </div>
            <div v-else class="w-100 text-center text-md-start mt-3 mt-md-0">
              <h4 class="mt-1" style="color: #2C3E50; font-size: 18px">Kayıt Bulunamadı</h4>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="px-5">
        <b-button block class="buttonadps-sec mb-2" @click="$refs['errorModal'].hide()">Kapat</b-button>
      </div>
    </b-modal>

    <b-modal ref="successModal" title="Geçiş Onaylandı!" hide-footer centered>
      <template #modal-header>
        <div class="w-100 success-modal">
          <h1>Geçiş Onaylandı!</h1>
        </div>
      </template>
      <b-container fluid>
        <b-row style="min-height: 20vh">
          <b-col md="4" class="d-flex align-items-center justify-content-center">
            <img class="img-fluid" style="max-width: 150px" src="../../static/company/aplogo.png" />
          </b-col>
          <b-col md="8" class="d-flex align-items-center justify-content-center px-3">
            <div class="w-100 text-center text-md-start mt-3 mt-md-0">
              <div class="mb-2">
                <span style="color: #2C3E50; opacity: .5; font-weight: bold; font-size: 12px">Kişi Bilgisi</span>
              </div>
              <b-row class="border-bottom pb-2 mb-3">
                <b-col cols="6">
                  <div class="desc">Adı:</div>
                </b-col>
                <b-col cols="6">
                  <div class="description">{{ successInfo.name }}</div>
                </b-col>
              </b-row>
              <b-row class="border-bottom pb-2 mb-3">
                <b-col cols="6">
                  <div class="desc">Soyadı:</div>
                </b-col>
                <b-col cols="6">
                  <div class="description">{{ successInfo.lastname }}</div>
                </b-col>
              </b-row>
              <b-row class="border-bottom pb-2 mb-4">
                <b-col cols="6">
                  <div class="desc">QR Kodu:</div>
                </b-col>
                <b-col cols="6">
                  <div class="description">#{{ successInfo.code }}</div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="px-5">
        <b-button block class="buttonadps-sec mb-2" @click="$refs['successModal'].hide()">Kapat</b-button>
      </div>
    </b-modal>

  </div>
</template>

<script>
import headerSec from "@/components/loyout/headerSec"
import footerSec from "@/components/loyout/footerSec"
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import "vue-select/src/scss/vue-select.scss";

export default {
  name: 'dashboard',
  components: {
    headerSec,
    footerSec,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      loadingBtn: false,
      info: {
        company: 'FurtherSoft yazılım Şirketi',
        day: '123',
        month: '3452'
      },
      formQrcode: '',
      formError: '',
      errorInfo: {
        reason: 'Qr Kodu Bulunamadı. Lütfen doğru bir Qr ile tekrar deneyin'
      },
      successInfo: {
        name: 'tan**',
        lastname: 'san***',
        code: 'HE234R3'
      }
    }
  },
  mounted() {
    this.$refs['successModal'].show();
  },
  methods: {
    checkQrCode: function () {
      this.formError = '';
      if(this.formQrcode) {
        this.loadingBtn = true
        this.$refs['errorModal'].show();
        console.log("post qr code parameter", this.formQrcode);
        this.formQrcode = '';
        this.loadingBtn = false
      } else {
        this.formError = "Lütfen QR Kodu Giriniz"
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
}
.description {
  font-size: 18px;
  color: #2C3E50;
  font-weight: bold;
  text-transform: capitalize;
}
</style>
