<template>
  <div>
    <headerSec></headerSec>
    <b-container fluid class="h-100" style="padding-top: 2rem;">
      <b-row>
        <b-col lg="6" class="d-none d-lg-flex align-items-center justify-content-center" style="min-height: 50vh">
          <img class="p-5 w-75" src="/company/register.svg" alt="" style="max-height: 600px">
        </b-col>
        <b-col lg="6" class="pr-lg-5">
          <b-row>
            <b-col cols="12">
              <div class="mb-3 mt-5">
                <h1>İşletmenizi Hemen Kaydedin!</h1>
                <span class="font-weight-bold">İşletme Bilgilerinizi Girin</span>
              </div>
            </b-col>
            <b-col cols="12">
              <validation-observer v-slot="{ invalid }">
                <validation-provider #default="{ errors }" name="Şirket Adı" rules="required">
                  <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                    <label class="floating-label">
                      <b-input type="text" autocomplete="off" placeholder="Şirket Adı" v-model="form.companyName"></b-input>
                      <span>Şirket Adı</span>
                    </label>
                    <small class="text-danger">{{ errors[0] }} </small>
                  </div>
                </validation-provider>

                <validation-provider #default="{ errors }" name="Yetkili Personel" rules="required">
                  <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                  <label class="floating-label">
                    <b-input type="text" autocomplete="off" placeholder="Yetkili Personel" v-model="form.person"></b-input>
                    <span>Yetkili Personel</span>
                  </label>
                  <small class="text-danger">{{ errors[0] }} </small>
                </div>
                </validation-provider>
                <validation-provider #default="{ errors }" name="E-Posta" rules="required|email">
                  <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                    <label class="floating-label">
                      <b-input type="email" autocomplete="off" placeholder="E-Posta" v-model="form.email"></b-input>
                      <span>E-Posta</span>
                      <small class="text-danger">{{ errors[0] }} </small>
                    </label>
                  </div>
                </validation-provider>

                <validation-provider #default="{ errors }" name="Telefon" rules="required|min:19">
                  <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                    <label class="floating-label">
                      <b-input type="tel" autocomplete="off" placeholder="Telefon" v-model="form.phone" v-mask="'+90 (###) ### ## ##'"></b-input>
                      <span>Telefon</span>
                    </label>
                    <small class="text-danger" v-if="errors[0]">Telefon numarası geçerli değil</small>
                  </div>
                </validation-provider>

                <validation-provider #default="{ errors }" name="İşletme Türü" rules="required">
                  <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                    <v-select placeholder="Şirket Türü Seçiniz" v-model="form.type" class="v-select" label="Aciklama" :options="sectors">
                      <template v-slot:no-options>
                        Bu türde bir işletme bulunmuyor
                      </template>
                    </v-select>
                    <small class="text-danger">{{ errors[0] }} </small>
                  </div>
                </validation-provider>

                <validation-provider #default="{ errors }" name="Vergi Numarası" rules="required">
                  <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                    <label class="floating-label">
                      <b-input type="text" autocomplete="off" placeholder="Vergi Numarası" :maxlength="20" v-model="form.taxID"></b-input>
                      <span>Vergi Numarası</span>
                    </label>
                    <small class="text-danger">{{ errors[0] }} </small>
                  </div>
                </validation-provider>

                <b-row>

                  <b-col md="6">
                    <validation-provider #default="{ errors }" name="İl" rules="required">
                      <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                        <v-select placeholder="İl Seçiniz" v-model="form.il" class="v-select" label="Aciklama" v-on:input="form.ilce = ''" :options="iller">
                          <template v-slot:no-options>
                            Aradığınız il bulunamadı
                          </template>
                        </v-select>
                        <small class="text-danger">{{ errors[0] }} </small>
                      </div>
                    </validation-provider>
                  </b-col>

                  <b-col md="6">
                    <validation-provider #default="{ errors }" name="İlçe " rules="required">
                      <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                        <v-select autocomplete="off" placeholder="İlçe Seçiniz" v-model="form.ilce" label="Aciklama" class="v-select" :options="ilceler">
                          <template v-slot:no-options>
                            Aradığınız ilçe bulunamadı
                          </template>
                        </v-select>
                        <small class="text-danger">{{ errors[0] }} </small>
                      </div>
                    </validation-provider>
                  </b-col>

                  <b-col cols="12">
                    <validation-provider #default="{ errors }" name="Açık adres" rules="required">
                      <div class="input-holder" v-bind:class="errors[0] ? 'border border-danger' : ''">
                        <label class="floating-label">
                          <b-input type="text" autocomplete="off" placeholder="Açık Adres" v-model="form.address"></b-input>
                          <span>Açık Adres</span>
                        </label>
                        <small class="text-danger">{{ errors[0] }} </small>
                      </div>
                    </validation-provider>
                  </b-col>
                </b-row>

                <b-row>

                  <b-col md="6" order-md="1" order="2" class="d-flex align-items-center justify-content-center" style="min-height: 80px">
                    <h6 class="login-btn" @click="$router.push('login')">Hesabım Var</h6>
                  </b-col>
                  <b-col md="6" order-md="2" order="1" class="d-flex align-items-center justify-content-center" style="min-height: 80px">
                    <div class="w-100">
                      <b-button type="submit" block class="buttonadps" @click="pushForm" :disabled="loading || invalid">
                        <div v-if="!loading">Ödeme Yap</div>
                        <div v-else class="d-flex align-items-center justify-content-center">
                          <span>Yükleniyor</span>
                          <b-spinner class="ml-2" small variant="light"></b-spinner>
                        </div>
                      </b-button>
                    </div>
                  </b-col>
                  <b-col cols="12">
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
        companyName: '',
        person: '',
        email: '',
        phone: '',
        type: '',
        taxID: '',
        il: '',
        ilce: '',
        address: '',
      },
      locations: [],
      sectors: [],
    }
  },
  computed: {
    iller: function () {
      let iller = []
      this.locations.forEach((il)=>{
        if(!il.UstID) {
          iller.push(il)
        }
      })
      return iller
    },
    ilceler: function () {
      let ilceler = [];
      this.locations.forEach((ilce)=>{
        if(this.form.il._id === ilce.UstID){
          ilceler.push(ilce)
        }
      })
      return ilceler
    }
  },
  created() {
    this.getInitFiles();
  },
  methods: {
    getInitFiles: function () {
      /* get countries from server */
      this.$axios({
        method: 'get',
        url: 'http://home.oncutech.net:3000/regions',
      }).then((response) => {
        this.locations = response.data
      }, (error) => {
        console.log(error)
      });
      /* get company type from server */
      this.$axios({
        method: 'get',
        url: 'http://home.oncutech.net:3000/sectors',
      }).then((response) => {
        this.sectors = response.data
      }, (error) => {
        console.log(error)
      });
    },
    pushForm: function () {
      this.loading = true
      console.log("data pushed", this.form)
      this.loading = false
      /*this.$router.push('payment')*/
    }
  }
}
</script>

<style>
.login-btn {
  color: #19947b;
  margin: 0!important;
  cursor: pointer;
}
.login-btn:hover {
  color: #2C3E50;
}
.phone {
  font-size: 18px;
  font-weight: bold;
}
</style>
