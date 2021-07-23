<template>
  <div class="sign-up-container">
    <div class="card-container">
      <div class="left-side" v-if="Form == 'register'">
        <validation-observer class="m-auto" ref="accountDetails" tag="form">
          <b-row class="mb-4">
            <b-col sm="12" class="mb-4">
              <h1 class="title">Kayıt Ol</h1>
              <p class="title-text">Hazırda hesabınız var mı? <nuxt-link style="color: #8ADA7D;" to="/signIn">Giriş yap</nuxt-link></p>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Sirket Adi"
                label-for="i-company"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Şirket Adı"
                  rules="required"
                >
                  <b-form-input
                    id="i-company"
                    v-model="companyDetails.name"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Şirket Adınız"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Yetkili Personel"
                label-for="i-personnel"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Yetkili Personel"
                  rules="required"
                >
                  <b-form-input
                    id="i-personnel"
                    v-model="companyDetails.personnelName"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Yetkili Personel Adı"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="E-posta"
                label-for="i-email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="E-posta"
                  rules="required|email"
                >
                  <b-form-input
                    id="i-email"
                    v-model="companyDetails.email"
                    :state="errors.length > 0 ? false:null"
                    placeholder="E-posta adresiniz"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Sifre"
                label-for="i-password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Şifre"
                  rules="required|min:6|max:12"
                >
                  <b-form-input
                    id="i-paswword"
                    type="password"
                    v-model="companyDetails.password"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Hesap Şifresi"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Telefon"
                label-for="i-phone"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Phone"
                  rules="required|phone"
                >
                  <VuePhoneNumberInput default-country-code="TR" :translations="translations" id="i-phone" @update="phoneDetails = $event" size="sm" v-model= "companyDetails.phone" />

                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Tax ID"
                label-for="i-taxid"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Tax ID"
                  rules="required|min:4|integer"
                >
                  <b-form-input
                    id="i-taxid"
                    v-model="companyDetails.taxID"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Tax ID Numaranız"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6" class="d-flex pt-4 align-items-center">
              <div class="mr-3 pb-1">Tek bir işletme sahibiyim</div>
              <b-form-checkbox class="" v-model="companyDetails.main" :unchecked-value="false" :value="true"></b-form-checkbox>
            </b-col>
          </b-row>
          <b-row class="d-flex justify-content-end">
            <b-col sm="4" class="d-grid justify-self-end">
              <BButton @click="sendRegisterForm" variant="success">Kayit Ol</BButton>
            </b-col>
          </b-row>
        </validation-observer>
      </div>
      <div class="left-side" v-if="Form == 'otp'">
        <b-row class="mb-4">
          <validation-observer class="m-auto" ref="otpCodes" tag="form">
          <b-col sm="12" class="mb-4">
            <h1 class="title">OTP KODU</h1>
            <p class="title-text">OTP kodunu giriniz</p>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="OTP Kodu"
              label-for="i-company"
            >
              <validation-provider
                #default="{ errors }"
                name="Otp"
                rules="required|min:6|max:6|integer"
              >
                <b-form-input
                  id="i-company"
                  v-model="OTPCode"
                  :state="errors.length > 0 ? false:null"
                  placeholder="OTP numaranız"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          </validation-observer>
        </b-row>

      <b-row class="d-flex justify-content-end">
        <b-col sm="4" class="d-grid justify-self-end">
          <BButton @click="sendOTP" variant="success">Devam Et</BButton>
        </b-col>
      </b-row>
      </div>
      <div class="right-side overflow-hidden">
        <div class="qr-code">
          <b-img src="~/assets/img/qr-bg.jpg" alt="Person holding phone with qr code on the screen" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {BRow, BCol, BFormGroup, BButton, BAvatar, BModal, VBModal} from 'bootstrap-vue'
import {FormWizard, TabContent} from 'vue-form-wizard'

export default {
  name: "login",
  components: {
    BRow,
    BCol,
    ValidationObserver,
    ValidationProvider,
    BFormGroup,
    BButton,
    BAvatar,
    BModal,
    VBModal,
    FormWizard,
    TabContent,
  },
  data() {
    return {
      translations: {
        countrySelectorLabel: 'Ülke Kodu',
        countrySelectorError: 'Ülke Seçiniz',
        phoneNumberLabel: 'Numaranız',
        example: 'Örnek :'
      },
      phoneDetails: null,
      companyDetails: {
        name:'',
        personnelName: '',
        email: '',
        password: '',
        phone: '',
        taxID: '',
        main: '',
      },
      Form:'register',
      OTPCode:'',
      _id:''
    }
  },
  methods: {
    async validateForm(refs='') {
      return await this.$refs.[refs].validate().then((data)=>{
        if (data) {
          return Promise.resolve(true);
        }else {
          return Promise.resolve(false);
        }
      })
    },
    async sendOTP() {
      if (!await this.validateForm('otpCodes')) return;
      if (!this._id) return;
      try {
        let Veri = {
          OTP:this.OTPCode
        }

        let res = await this.$axios.$put('/otponay/'+this._id,Veri);
        if (res.OK) {
          this.$axios.setToken(res.Token, 'Bearer');
          await localStorage.setItem('Token', res.Token);
          await localStorage.setItem('UserID', res._id);
          await this.$router.push('/chain');
        }else {
          /*console.log(res);*/
        }
      } catch (e) {
        console.log(e)
      }
    },
    async sendRegisterForm() {
      if (!await this.validateForm('accountDetails')) return;

      try {
        let Veri = {...this.companyDetails}
        Veri['phone'] = this.phoneDetails.countryCallingCode + Veri['phone'];

        const res = await this.$axios.$post('/register',Veri);

        if (res.OK) {
          this.Form='otp'
          this._id=res._id
        }
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style lang="scss">

@media (min-width: 1024px) {

  .country-selector.has-hint .country-selector__label[data-v-46e105de], .country-selector.has-value .country-selector__label[data-v-46e105de] {
    transform: translateY(-30%) !important;
  }
  .input-tel.has-hint .input-tel__label[data-v-e59be3b4], .input-tel.has-value .input-tel__label[data-v-e59be3b4] {
    transform: translateY(-30%) !important;
  }

  .sign-up-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .card-container {
      display: grid;
      width: 90vw;
      height: 70vh;
      grid-template-columns: 4fr 4fr;
      grid-template-rows: auto;
      grid-template-areas: "right left";
      border-radius: 3%;
      box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.15);

      .left-side {
        grid-area: left;
        padding: 1rem;
      }
      .right-side {
        grid-area: right;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #8ADA7D;
        border-radius:  3% 0 0 3% ;
      }
    }
  }
}

@media (max-width: 1024px) {

  .country-selector.has-hint .country-selector__label[data-v-46e105de], .country-selector.has-value .country-selector__label[data-v-46e105de] {
    transform: translateY(-30%) !important;
  }
  .input-tel.has-hint .input-tel__label[data-v-e59be3b4], .input-tel.has-value .input-tel__label[data-v-e59be3b4] {
    transform: translateY(-30%) !important;
  }

  .sign-up-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .card-container {
      width: 100vw;
      height: 100vh;
      display: block;
      padding: 1rem;

      .left-side {
        grid-area: left;
        padding: 1rem;
      }
      .right-side {
        display: none;
      }
    }
  }
}
</style>
