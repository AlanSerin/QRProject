<template>
  <div>
    <div v-if="!status" class="error-header-result">
      <h1 class="result-header-text">Geçiş Onaylanmadı!</h1>
    </div>
    <div v-else class="success-header-result">
      <h1 class="result-header-text">Geçiş Onaylandı!</h1>
    </div>

    <div v-if="!status">
      <div class="body-result">
        <span class="fas fa-times-circle result-icon-error"></span>
      </div>

      <div class="text-center">
        <div class="mt-30 mb-10" style="font-size: 18px; font-weight: bold; opacity: .5">Red Nedeni</div>
        <h1 class="mb-50" style="">{{ errorInfo.reason }}</h1>
      </div>

      <div class="mx-0 px-4">
        <b-row class="border-bottom pb-2 mb-3" v-if="errorInfo.name">
          <b-col cols="6">
            <div class="desc">Adı:</div>
          </b-col>
          <b-col cols="6">
            <div class="description">{{ errorInfo.name }}</div>
          </b-col>
        </b-row>
        <b-row class="border-bottom pb-2 mb-3" v-if="errorInfo.lastname">
          <b-col cols="6">
            <div class="desc">Soyadı:</div>
          </b-col>
          <b-col cols="6">
            <div class="description">{{ errorInfo.lastname }}</div>
          </b-col>
        </b-row>
        <b-row class="border-bottom pb-2 mb-4" v-if="errorInfo.lastname">
          <b-col cols="6">
            <div class="desc">QR Kodu:</div>
          </b-col>
          <b-col cols="6">
            <div class="description">#{{ errorInfo.code }}</div>
          </b-col>
        </b-row>
      </div>

      <div class="text-center">
        <b-button block class="buttonadps-sec" style="max-width: 80vw" @click="$router.push('camera')">Geri Dön</b-button>
      </div>
    </div>

    <div v-else>
      <div class="body-result mt-30">
        <img src="../../static/company/aplogo.png" style="max-width: 250px; width: 35vw"/>
      </div>

      <div class="text-center">
        <div class="mt-30 mb-30" style="font-size: 18px; font-weight: bold; opacity: .5">Kişi Bilgisi</div>
      </div>

      <div class="px-5 mb-30">
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

      <div class="text-center">
        <b-button block class="buttonadps-sec" style="max-width: 80vw" @click="$router.push('camera')">Geri Dön</b-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'cemeraResult',
  data() {
    return {
      formQrcode: '',
      status: false,
      errorInfo: {
        name: '',
        lastname: '',
        code: '',
        reason: ''
      },
      successInfo: {
        name: '',
        lastname: '',
        code: ''
      }
    }
  },
  created() {
    this.checkQrCode()
  },
  methods: {
    async checkQrCode () {
      this.formQrcode = this.$route.params['qr']
      this.formQrcode = encodeURIComponent(this.formQrcode)

      this.formError = '';
      if(!this.formQrcode) {
        this.formError = "Lütfen QR Kodu Giriniz"
      } else {
        this.loadingBtn = true
        this.$axios.$get('/company/checkin/' + this.formQrcode , { headers: { authorization: 'bearer ' +  await localStorage.getItem('Token') }}).then(res=>{
          this.errorInfo = {}
          this.successInfo = {}
          if(res.Hata) {
            this.status = false
            this.errorInfo.reason = res.Hata
            this.$refs['errorModal'].show();
          } else if(res.Durum === 'false') {
            this.status = false
            this.errorInfo.name = res.Adi
            this.errorInfo.lastname = res.Soyadi
            this.errorInfo.code = res.qrCode
            this.errorInfo.reason = res.Mesaj
            this.$refs['errorModal'].show();
          } else if(res.Durum === 'true') {
            this.status = true
            this.successInfo.name = res.Adi
            this.successInfo.lastname = res.Soyadi
            this.successInfo.code = res.qrCode
            this.$refs['successModal'].show();
          }
        }).catch(error => {
          console.log(error)
        });
        this.formQrcode = '';
        this.loadingBtn = false
      }
    },
  }
}
</script>

<style>
.error-header-result {
  padding: 25px;
  background-color: #E74C3C;
}
.success-header-result {
  padding: 25px;
  background-color: #19947b;
}
.result-header-text {
  text-align: center;
  font-size: 18px;
  color: #FFFFFF;
  margin-bottom: 0!important;
}
.body-result {
  text-align: center;
}
.result-icon-error {
  margin-top: 3rem;
  font-size: 12rem;
  color: #E74C3C;
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
