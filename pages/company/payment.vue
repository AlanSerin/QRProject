<template>
  <div>
    <headerSec></headerSec>
    <b-container fluid class="h-100" style="padding-top: 2rem;">
      <b-row>
        <b-col lg="6" class="d-none d-lg-flex align-items-center justify-content-center" style="min-height: 70vh">
          <img class="p-5 w-75" src="/company/payment.svg" alt="" style="max-height: 600px">
        </b-col>
        <b-col lg="6" class="pr-lg-5">
          <b-row>
            <b-col cols="12">
              <div class="mb-3 mt-5">
                <h1>Ödemenizi Yapın!</h1>
                <span class="font-weight-bold">Hızlıca Ödeme Yapın</span>
              </div>
            </b-col>
            <b-col cols="12">
              <validation-observer v-slot="{ invalid }">
                <b-row>
                  <b-col md="6">
                    <validation-provider #default="{ errors }" name="İsim" rules="required">
                      <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                        <label class="floating-label">
                          <b-input type="text" autocomplete="off" placeholder="İsim" v-model="form.isim"></b-input>
                          <span>İsim</span>
                        </label>
                        <small class="text-danger">{{ errors[0] }} </small>
                      </div>
                    </validation-provider>
                  </b-col>
                  <b-col md="6">
                    <validation-provider #default="{ errors }" name="Soyisim" rules="required">
                      <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                        <label class="floating-label">
                          <b-input type="text" autocomplete="off" placeholder="İsim" v-model="form.soyisim"></b-input>
                          <span>Soyisim</span>
                        </label>
                        <small class="text-danger">{{ errors[0] }} </small>
                      </div>
                    </validation-provider>
                  </b-col>
                </b-row>
                <validation-provider #default="{ errors }" name="Kart Numarası" rules="required|min:19">
                  <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                    <label class="floating-label">
                      <b-input type="text" autocomplete="off" placeholder="İsim" v-model="form.cardNumber" v-mask="'#### #### #### ####'"></b-input>
                      <span>Kart Numarası</span>
                    </label>
                    <small class="text-danger" v-if="errors[0]">Eksik veya hatalı Kart Numarası </small>
                  </div>
                </validation-provider>

                <b-row>
                  <b-col md="6">
                    <validation-provider #default="{ errors }" name="Son Kullanma Tarihi" rules="required|min:7">
                      <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                        <label class="floating-label">
                          <b-input type="text" autocomplete="off" placeholder="Son Kullanma Tarihi" v-model="form.SKT" v-mask="'##/####'"></b-input>
                          <span>Son Kullanma Tarihi</span>
                        </label>
                        <small class="text-danger" v-if="errors[0]">Eksik veya hatalı Tarih</small>
                      </div>
                    </validation-provider>
                  </b-col>
                  <b-col md="6">
                    <validation-provider #default="{ errors }" name="CVV" rules="required">
                      <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                        <label class="floating-label">
                          <b-input type="text" autocomplete="off" placeholder="İsim" v-model="form.cvv" v-mask="'###'"></b-input>
                          <span>CVV</span>
                        </label>
                        <small class="text-danger">{{ errors[0] }} </small>
                      </div>
                    </validation-provider>
                  </b-col>
                </b-row>


                <b-row>
                  <b-col cols="12" class="d-flex align-items-center my-buttons">
                    <b-form-checkbox class="ml-2 my-2" v-model="check">Onayladığınız Takdirde Hesabınızdan <b>100.00 TL</b> Çekilecektir.</b-form-checkbox>
                  </b-col>
                  <b-col cols="12">
                    <div class="w-100 mt-2">
                      <b-button type="submit" block class="buttonadps" @click="payment" :disabled="loading || invalid || !check">
                        <div v-if="!loading">Ödeme Yap</div>
                        <div v-else class="d-flex align-items-center justify-content-center">
                          <span>Yükleniyor</span>
                          <b-spinner class="ml-2" small variant="light"></b-spinner>
                        </div>
                      </b-button>
                    </div>
                  </b-col>
                  <b-col cols="12" class="my-3">
                    <b-alert :show="error ? true:false" variant="danger" class=" text-capitalize" dismissible>{{ error }}</b-alert>
                  </b-col>
                </b-row>


              </validation-observer>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import headerSec from "@/components/loyout/headerSec"
import footerSec from "@/components/loyout/footerSec"
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import "vue-select/src/scss/vue-select.scss";

export default {
  name: 'companyRegister',
  components: {
    headerSec,
    footerSec,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      loading: false,
      error: '',
      form: {
        isim: '',
        soyisim: '',
        cardNumber: '',
        SKT: '',
        cvv: '',
      },
      check: false
    }
  },
  methods: {
    payment: function () {
      this.loading = true
      console.log("payment", this.form)
    }
  }
}
</script>
