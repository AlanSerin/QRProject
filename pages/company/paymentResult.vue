<template>
  <div>
    <headerSec></headerSec>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="d-flex justify-content-center align-items-center">
          <div v-if="result" class="text-center">
            <img class="p-5 w-25" src="/company/success.svg" alt="AdaPass" style="max-height: 600px; min-width: 450px">
            <div class="mt-1">
              <h1 class="suc-head mb-3">Ödeme Başarıyla Tamamlandı!</h1>
              <div class="mx-auto" style="max-width: 75vw">
                <h4 class="suc-sub">Ödemeniz Başarı ile alınmıştır. Panel giriş bilgileriniz size SMS olarak gönderilecektir.</h4>
              </div>
            </div>
            <div>
              <b-button block class="buttonadps max-with" @click="$router.push({name: 'company-login'})">Giriş Sayfasına Git <span class="fas fa-chevron-right ml-1"></span> </b-button>
            </div>
          </div>

          <div v-else class="text-center">
            <img class="p-5 w-25" src="/company/error.svg" alt="AdaPass" style="max-height: 600px; min-width: 450px">
            <div class="mt-1">
              <h1 class="suc-head mb-3">Ödeme tamamlanamadı!</h1>
              <div class="mx-auto" style="max-width: 75vw">
                <h4 class="suc-sub mb-3">Ödemeniz yapılırken bir sorunla karşılaştık. Lütfen Bilgilerinizi Kontrol Edip Tekrar deneyiniz.</h4>
              </div>
            </div>
            <div style="min-height: 50vh">
              <b-button block class="buttonadps max-with" @click="$router.push({name: 'company-register'})"><span class="fas fa-chevron-left mr-1"></span> Geri Dön</b-button>
            </div>
          </div>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import headerSec from "@/components/loyout/headerSec";

export default {
  name: 'paymentResult',
  components: {
    headerSec
  },
  created() {
    this.checkStatus();
  },
  data() {
    return {
      result: false,
    }
  },
  methods: {
    checkStatus: function () {
      if(this.$route.query.status === 'true') {
        this.result = true
      } else if (this.$route.query.status === 'false') {
        this.result = false
      }
    }
  }
}
</script>

<style>
.suc-head {
  color: #2C3E50;
  font-size: 2rem;
}
.suc-sub {
  opacity: .8;
  color: #2C3E50;
  font-size: 1rem;
}
.max-with {
  margin-top: 40px;
  max-width: 600px;
}
</style>
