<template>
  <div class="d-flex flex-column justify-content-center container-fluid main-container">
    <validation-observer class="w-75 m-auto" ref="accountDetails" tag="form">
    <b-row class="mb-4">
      <b-col sm="12" class="mb-4 pr-0">
        <h1 class="title">Kayit Ol</h1>
        <p class="title-text">Hazirda hesabiniz var mi? <nuxt-link style="color: #8ADA7D;" to="/signIn">Giris yap</nuxt-link></p>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Sirket Adi"
          label-for="i-company"
        >
          <validation-provider
            #default="{ errors }"
            name="Company"
            rules="required"
          >
            <b-form-input
              id="i-company"
              v-model="companyDetails.name"
              :state="errors.length > 0 ? false:null"
              placeholder="FurtherSoft"
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
            name="Personnel"
            rules="required"
          >
            <b-form-input
              id="i-personnel"
              v-model="companyDetails.personnelName"
              :state="errors.length > 0 ? false:null"
              placeholder="Ahmet Soruc"
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
            name="Email"
            rules="required|email"
          >
            <b-form-input
              id="i-email"
              v-model="companyDetails.email"
              :state="errors.length > 0 ? false:null"
              placeholder="ahmet@mail.com"
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
            name="Password"
            rules="required|min:6|max:12"
          >
            <b-form-input
              id="i-paswword"
              type="password"
              v-model="companyDetails.password"
              :state="errors.length > 0 ? false:null"
              placeholder="******"
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
            <b-form-input
              id="i-phone"
              v-model="companyDetails.phone"
              :state="errors.length > 0 ? false:null"
              placeholder="533 833 33 33"
            />
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
            name="TaxID"
            rules="required|min:4|integer"
          >
            <b-form-input
              id="i-taxid"
              v-model="companyDetails.taxID"
              :state="errors.length > 0 ? false:null"
              placeholder="1234"
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
        <b-col sm="2 mt-2">
          <BButton @click="validationFormAccount" variant="success">Kayit Ol</BButton>
        </b-col>
      </b-row>
    </validation-observer>
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
      companyDetails: {
        name:'',
        personnelName: '',
        email: '',
        password: '',
        phone: '',
        taxID: '',
        main: '',
      },
    }
  },
  methods: {
    validationFormAccount() {
      console.log('hello')
      return new Promise((resolve, reject) => {
        this.$refs.accountDetails.validate().then(success => {
          if (success) {
            resolve(true)
            this.sendAccountInfo()
          } else {
            console.log('invaliddd')
            reject()
          }
        })
      })
    },
    async sendAccountInfo() {
      try {
        const res = await this.$axios.$get('http://icanhazip.com')
        console.log(res)
        await this.$router.push('/chain')
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.main-container {
  width: 100vw;
  height: 100vh;
}
</style>
