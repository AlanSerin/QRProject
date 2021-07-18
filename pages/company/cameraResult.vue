<template>
  <div>
    <div v-if="status" class="error-header-result">
      <h1 class="result-header-text">Geçiş Onaylanmadı!</h1>
    </div>
    <div v-else class="success-header-result">
      <h1 class="result-header-text">Geçiş Onaylandı!</h1>
    </div>

    <div v-if="status">
      <div class="body-result">
        <span class="fas fa-times-circle result-icon-error"></span>
      </div>

      <div class="text-center">
        <div class="mt-30 mb-10" style="font-size: 18px; font-weight: bold; opacity: .5">Red Nedeni</div>
        <h1 class="mb-50" style="">{{ errorInfo.reason }}</h1>
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
      status: false,
      errorInfo: {
        reason: 'QR Kodu Sistem Tarafından Bulunamadı!'
      },
      successInfo: {
        name: 'tan**',
        lastname: 'san***',
        code: 'AT23D5D'
      }
    }
  },
  methods: {

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
