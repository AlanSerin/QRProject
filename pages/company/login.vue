<template>
  <div>
    <loading :status="siteLoading"></loading>
    <headerSec></headerSec>
    <b-container fluid class="h-100" style="padding-top: 2rem;">
      <b-row>
        <b-col lg="6" class="d-none d-lg-flex align-items-center justify-content-center" style="min-height: 50vh">
          <img class="p-5 w-75" src="/company/login.svg" alt="AdaPass" style="max-height: 600px">
        </b-col>
        <b-col lg="6" class="pr-lg-5">
          <b-row>
            <b-col cols="12">
              <div class="mb-3 mt-5">
                <h1>Giriş Yap!</h1>
                <span class="font-weight-bold">Kullanıcı bilgilerinizi giriniz</span>
              </div>
            </b-col>
            <b-col cols="12">
              <validation-observer v-slot="{ invalid }">

                <validation-provider #default="{ errors }" name="E-Posta Adresi" rules="required|email">
                  <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                    <label class="floating-label">
                      <b-input type="email" autocomplete="off" placeholder="E-Posta Adresi" v-model="form.email"></b-input>
                      <span>E-Posta Adresi</span>
                    </label>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </div>
                </validation-provider>

                <validation-provider #default="{ errors }" name="Şifre" rules="required">
                  <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                    <label class="floating-label">
                      <b-input type="password" autocomplete="off" placeholder="Şifre" v-model="form.password"></b-input>
                      <span>Şifre</span>
                    </label>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </div>
                </validation-provider>



                <b-row>
                  <b-col order-md="1" order="2" md="6" class="d-flex align-items-center justify-content-center">
                    <h6 class="login-btn" @click="$router.push('register')">Kayıt Ol</h6>
                  </b-col>
                  <b-col md="6" order-md="2" order="1" class="d-flex align-items-center justify-content-center">
                    <div class="w-100">
                      <b-button type="submit" block class="buttonadps mb-3" @click="login" :disabled="loading || invalid">
                        <div v-if="!loading">Giriş Yap</div>
                        <div v-else class="d-flex align-items-center justify-content-center">
                          <span>Kontrol Ediliyor</span>
                          <b-spinner class="ml-2" small variant="light"></b-spinner>
                        </div>
                      </b-button>
                    </div>
                  </b-col>
                  <b-col order="3" cols="12" class="my-3">
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
  import loading from "@/components/loading";
  import {
    ValidationProvider,
    ValidationObserver
  } from 'vee-validate'
  import "vue-select/src/scss/vue-select.scss";

  export default {
    name: 'companyLogin',
    components: {
      headerSec,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        loading: false,
        siteLoading: true,
        error: '',
        form: {
          email: 'mdilmac9@gmail.com',
          password: '123456',
        },
      }
    },
    mounted() {
      setTimeout(() => this.siteLoading = false, 500)
    },
    methods: {
      async login() {
        this.loading = true
        this.error = ''
        this.$auth.loginWith('local', {
          data: {
            Username: this.form.email,
            Pass: this.form.password
          },
        }).then((res) => {
          this.loading = false
          if (res.data.Hata) {
            this.error = res.data.Hata
          } else {
            this.$auth.setUser(res.data.user);
            this.$auth.setUserToken(res.data.Token)
          }
        }).catch((error) => {
          this.loading = false
          console.log(error)
        });
      }
    }
  }
</script>
