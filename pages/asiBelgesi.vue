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
    <div class="bg-img-holder d-none d-md-block"></div>

    <headerSec class="header"></headerSec>
    <div class="body-area d-flex">
      <b-container >
        <b-row>
          <b-col lg="6" class="d-none d-lg-flex pt-2">
            <div>
              <h1 style="color: white">K.K.T.C Aşı Kimliği Sorgulama Sistemi</h1>
              <h4 style="color: white; opacity: .5">Hemen Aşı Belgenize Sahip Olun!</h4>
            </div>
          </b-col>
          <b-col lg="6" class="mb-5 mb-lg-0">
            <div class="request-card mt-5 mt-lg-0 mb-5 mb-lg-0">
              <h6 class="mb-3" style="color: #2C3E50; font-weight: bold">Bilgilerinizi Giriniz</h6>
              <b-tabs content-class="mt-3" pills fill v-model="tabIndex">
                <b-tab title="Kimlik/pasaport">
                  <validation-observer v-slot="{ invalid }">
                    <b-form-group label="Belge Türü" label-for="belgeTur">
                      <b-form-select id="belgeTur" size="sm" v-model="form.type">
                        <b-form-select-option value="Kimlik">Kimlik</b-form-select-option>
                        <b-form-select-option value="Pasaport">Pasaport</b-form-select-option>
                      </b-form-select>
                    </b-form-group>

                    <b-form-group :label="form.type + ' Numarası*'" label-for="kimlik-nosu">
                      <validation-provider #default="{ errors }" name="Kimlik numarası" rules="required">
                        <b-form-input size="sm" id="kimlik-nosu" v-model="form.id_number" :state="errors.length > 0 ? false:null" :placeholder="form.type + ' Numaranızı Giriniz'" />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                    <b-form-group label="Adınız*" label-for="isim">
                      <validation-provider #default="{ errors }" name="İsim" rules="required">
                        <b-form-input size="sm" id="isim" v-model="form.name" placeholder="Adınız" :state="errors.length > 2 ? false:null" />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                    <b-form-group label="Soyadınız*" label-for="soyad">
                      <validation-provider #default="{ errors }" name="Soyad" rules="required">
                        <b-form-input size="sm" id="soyad" v-model="form.lastname" placeholder="Soyadınız" :state="errors.length > 2 ? false:null" />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                    <b-form-group label="Doğum Tarihi*" label-for="dogum">
                      <validation-provider #default="{ errors }" name="Doğum tarihi" rules="required">
                        <b-form-input id="dogum" type="text" v-model="form.birthday" placeholder="GG.AA.YYYY" size="sm" :state="errors.length > 0 ? false:null" v-mask="'##/##/####'"></b-form-input>
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                    <div class="d-flex align-items-center justify-content-center py-3">
                      <recaptcha></recaptcha>
                    </div>
                    <b-button class="request-btn" type="submit" variant="primary" @click="check('info')" block :disabled="loading || invalid"> <b-spinner small v-if="loading" label="Spinning"></b-spinner> <span v-if="!loading">Hemen Sorgula</span> <span v-if="loading">Sorgulanıyor...</span></b-button>
                  </validation-observer>
                </b-tab>
                <b-tab title="ADAKOD" disabled>
                  <validation-observer tag="form" v-slot="{ invalid }" @submit.prevent="onSubmit">
                    <b-form-group label="ADAPASS KODU*" label-for="adapass-kodu">
                      <validation-provider #default="{ errors }" name="AdaPass Kodu" rules="required">
                        <b-form-input size="sm" id="adapass-kodu" v-model="form.vaccine_id" :state="errors.length > 0 ? false:null" placeholder="AdaPass Kodunuzu Giriniz" />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                    <div class="d-flex align-items-center justify-content-center py-3">
                    <!-- <recaptcha></recaptcha> -->
                    </div>
                    <b-button class="request-btn" type="submit" variant="primary" @click="check('id')" block :disabled="loading || invalid"> <b-spinner small v-if="loading" label="Spinning"></b-spinner> <span v-if="!loading">Hemen Sorgula</span> <span v-if="loading">Sorgulanıyor...</span></b-button>
                  </validation-observer>

                </b-tab>
              </b-tabs>
              <b-alert :show="error ? true:false" variant="danger" class="mt-3 text-capitalize" dismissible>{{ error }}</b-alert>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <fooerSec class="mt-5"></fooerSec>
  </div>
</template>

<script>
import headerSec from "~/components/loyout/headerSec";
import fooerSec from "~/components/loyout/footerSec";
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate'

import moment from 'moment'

export default {
  name: 'requestForm',
  components: {
    ValidationProvider,
    ValidationObserver,
    headerSec,
    fooerSec,
  },
  data() {
    return {
      error: '',
      loading: false,
      isMounted: false,
      tabIndex: 0,
      form: {
        type: 'Kimlik',
        id_number: '',
        name: '',
        lastname: '',
        birthday: '',
        vaccine_id: '',
      }
    }
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    async check (type) {
      let token = ''
      try {
        token = await this.$recaptcha.getResponse();
      }catch (err) {
        await this.$recaptcha.reset()
        console.log(err)
      }
      await this.$recaptcha.reset()
      this.loading = true
      this.error = '';
      if(type === 'info') {
        this.$axios.$post('/vaccini', {
          type: this.form.type,
          IdentityNo: this.form.id_number,
          FirstName: this.form.name,
          LastName: this.form.lastname,
          BirthDate: this.form.birthday,
          CaptchaToken: token
        }).then(res=>{
          if(res.Hata) {
            this.error = res.Hata
          } else {
            this.$router.push('/asi?id=' + res.qr.qrcode + '&new=true')
          }
          this.loading = false
        }).catch(error => {
          console.log(error)
          this.loading = false
        })
      } else if (type === 'id') {
        this.$axios.$post('/api/vaccini', {
          IdentityNo: this.form.vaccine_id
        }).then(res=>{
          if(res.Hata) {
            this.error = res.Hata
          }
          this.loading = false
        }).catch(error => {
          console.log(error)
          this.loading = false
        })
      }
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse()
        await this.$recaptcha.reset()
      } catch (error) {
        console.log('Login error:', error)
      }
    },
  },
  watch: {
    tabIndex: function () {
      this.form = {}
    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  }
}
</script>

<style>
.bg-img-holder {
  position: absolute;
  min-width: 100%;
  min-height: 100vh;
  background-image: url("~static/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(60%)
}
.header {

}
.symbol-logo {
  width: 50px;
  cursor: pointer;
}
.header-first {
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 5px;
}
.header-sub {
  cursor: pointer;
  color: white;
  opacity: .3;
  margin-bottom: 0;
}
.body-area {
  width: 100%;
  min-height: 70vh;
  align-items: center;
  justify-content: center;
}
.request-card {
  border-radius: 20px;
  padding: 20px;
  background-color: rgba(255,255,255, 0.7);
  min-height: 50vh;
  position: relative;
}


.copy-right {
  font-size: 12px;
  color: white;
  position: absolute;
  bottom: 15px;
  right: 20px;
}
.nav-pills {
  background-color: #2C3E50;
  padding: 8px;
  border-radius: 10px;
  box-shadow:  0 4px 4px rgba(0, 0, 0, 0.25);
}
.nav-item {
  border-radius: 10px;
  overflow: hidden;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  background-color: white!important;
  color: #2C3E50!important;
}
.nav-pills .nav-link, .nav-pills .show > .nav-link {
  color: white;
}
label {
  color: #2C3E50;
  font-size: 10px;
  margin-bottom: 4px;
}
.form-control:focus {
  border-color: #2C3E50;
  box-shadow: none!important;
}
.request-btn {
  background-color: #2C3E50;
  border-radius: 10px;
  border-color: #2C3E50;
}
.request-btn:hover {
  background-color: #2C3E50;
}
.request-btn:focus {
  background-color: #2C3E50;
  box-shadow: none!important;
  border: 1px solid #2C3E50!important;
}
.request-btn:active {
  background-color: white!important;
  color: #2C3E50!important;
}
.request-btn:disabled {
  background-color: #2C3E50;
  border: 1px solid #2C3E50;
}
.forget {
  font-weight: bold;
  font-size: 12px;
  color: #2C3E50;
}
.forget:focus-visible {
  box-shadow: none!important;
}
.error-holder {
  width: 100%;
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
.form-group {
  margin-bottom: 0;
}
.nav-link.disabled {
  opacity: .5;
}
</style>
