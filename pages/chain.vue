<template>
  <div class="container">
    <div class="card-container">
      <div class="left-side">
        <form-wizard
          ref="myWizard"
          color="#7367F0"
          :title="null"
          :subtitle="null"
          shape="circle"
          finish-button-text="Gonder"
          back-button-text="Onceki"
          class="mb-3"
          @on-complete="formSubmitted"
        >
          <tab-content :before-change="validationFormAccount" title="">
           <validation-observer ref="accountDetails" tag="form">
             <b-row>
                <b-col sm="12" class="mb-4">
                  <h3 class="title">BASVURU FORMU</h3>
                  <p class="title-text">Bu kısımda şirketiniz ile ilgili almamız gereken bilgileri girmeniz gerekiyor</p>
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
             </b-row>
           </validation-observer>
          </tab-content>
          <tab-content :before-change="validationFormChain" title="">
            <validation-observer ref="chainDetails" tag="form">
              <b-row>
                <b-col sm="12" class="mb-4">
                  <h3 class="title">BASVURU FORMU</h3>
                  <p class="title-text">Bu kısımda şirketiniz ile ilgili almamız gereken bilgileri girmeniz gerekiyor</p>
                </b-col>
              </b-row>
              <b-row class="form-card">
                <b-col md="6">
                  <b-form-group
                    label="Enlem"
                    label-for="i-latitude"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Latitude"
                      rules="required"
                    >
                      <b-form-input
                        id="i-latitude"
                        v-model="chainDetails.latitude"
                        :state="errors.length > 0 ? false:null"
                        placeholder="15.2"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="Boylam"
                    label-for="i-longitude"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Longitude"
                      rules="required"
                    >
                      <b-form-input
                        id="i-longitude"
                        v-model="chainDetails.longitude"
                        :state="errors.length > 0 ? false:null"
                        placeholder="12.3"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="Adres"
                    label-for="i-address"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Address"
                      rules="required"
                    >
                      <b-form-input
                        id="i-address"
                        v-model="chainDetails.address"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Bilmem ne Sokak no 3"
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
                        v-model="chainDetails.phone"
                        :state="errors.length > 0 ? false:null"
                        placeholder="533 833 33 33"
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
                        v-model="chainDetails.personnelName"
                        :state="errors.length > 0 ? false:null"
                        placeholder="1234"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
              </b-row>
            </validation-observer>
          </tab-content>
          <tab-content :before-change="validationFormView" title="">
            <validation-observer ref="viewChains" tag="form">
              <b-row>
                <b-col sm="12" class="mb-4">
                  <h3 class="title">BASVURU FORMU</h3>
                  <p class="title-text">Bu kısımda şirketiniz ile ilgili almamız gereken bilgileri girmeniz gerekiyor</p>
                </b-col>
              </b-row>
              <b-row class="mb-4" v-for="chain in chains">
                <b-col sm="12">
                  <div class="chain-card">
                    <b-avatar button class="edit" variant="info"></b-avatar>
                    <b-avatar button class="delete" variant="danger"></b-avatar>
                    <b-row>
                      <b-col sm="4">
                        <div class="map"></div>
                      </b-col>
                      <b-col sm="8">
                        <div class="content">
                          <p class="fw-bold">{{chain.address}}</p>
                          <p class="coordinates">Enlem: {{chain.latitude}} Boylam: {{chain.longitude}}</p>
                          <p class="phone-number">+{{chain.phone}}</p>
                          <p class="fw-bold">{{chain.personnelName}}</p>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="mb-4 mt-4" sm="9">
                  <b-button @click="addChain" block variant="outline-info" >Sube Ekle</b-button>
                </b-col>
              </b-row>
            </validation-observer>
          </tab-content>
          <tab-content :before-change="validationFormCard" title="">
            <validation-observer ref="cardDetails" tag="form">
              <b-row>
                <b-col sm="12" class="mb-4">
                  <h3 class="title">BASVURU FORMU</h3>
                  <p class="title-text">Formu neredeyse bitirdiniz! Simdi odeme secenklerini girmeniz gerek </p>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="Isim"
                    label-for="i-name"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Name"
                      rules="required"
                    >
                      <b-form-input
                        id="i-name"
                        v-model="cardDetails.name"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Ahmet"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="SoyIsim"
                    label-for="i-surname"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Surname"
                      rules="required"
                    >
                      <b-form-input
                        id="i-surname"
                        v-model="cardDetails.surname"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Soruc"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="Kart Numarasi"
                    label-for="i-card"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Card"
                      rules="required|credit-card"
                    >
                      <b-form-input
                        id="i-card"
                        v-model="cardDetails.cardNumber"
                        :state="errors.length > 0 ? false:null"
                        placeholder="4716800255496291"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="CVV Kodu"
                    label-for="i-cvv"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="CVV"
                      rules="required|min:3"
                    >
                      <b-form-input
                        id="i-cvv"
                        v-model="cardDetails.cvv"
                        :state="errors.length > 0 ? false:null"
                        placeholder="212"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="Son Kullanma Tarihi"
                    label-for="i-expiration"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Expiration"
                      rules="required"
                    >
                      <b-form-input
                        id="i-expiration"
                        v-model="cardDetails.expiration"
                        type="date"
                        :state="errors.length > 0 ? false:null"
                        placeholder="03/24"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
              </b-row>
            </validation-observer>
          </tab-content>
        </form-wizard>
      </div>
      <div class="right-side">
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {BRow, BCol, BFormGroup, BButton, BAvatar} from 'bootstrap-vue'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { extend, localize } from 'vee-validate'
import {
  required as rule_required,
  email as rule_email,
  min as rule_min,
  max as rule_max,
  confirmed as rule_confirmed,
  regex as rule_regex,
  between as rule_between,
  alpha as rule_alpha,
  integer as rule_integer,
  digits as rule_digits,
  length as rule_length,
} from 'vee-validate/dist/rules'

export const validatorPassword = password => {
  /* eslint-disable no-useless-escape */
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/
  /* eslint-enable no-useless-escape */
  const validPassword = regExp.test(password)
  return validPassword
}

export const validatorCreditCard = creditnum => {
  /* eslint-disable no-useless-escape */
  const cRegExp = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
  /* eslint-enable no-useless-escape */
  const validCreditCard = cRegExp.test(creditnum)
  return validCreditCard
}
export const validatorPhone = phonenum => {
  /* eslint-disable no-useless-escape */
  const cRegExp = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
  /* eslint-enable no-useless-escape */
  const validPhone = cRegExp.test(phonenum)
  return validPhone
}

export const credit = extend('credit-card', {
  validate: validatorCreditCard,
  message: 'It is not valid credit card!',
})

export const password = extend('password', {
  validate: validatorPassword,
  message: 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit',
})

export const phone = extend('phone', {
  validate: validatorPhone,
  message: 'Phone number is not valid',
})

export const required = extend('required', rule_required)

export const email = extend('email', rule_email)

export const min = extend('min', rule_min)

export const max = extend('max', rule_max)

export const confirmed = extend('confirmed', rule_confirmed)

export const regex = extend('regex', rule_regex)

export const between = extend('between', rule_between)

export const alpha = extend('alpha', rule_alpha)

export const integer = extend('integer', rule_integer)

export const digits = extend('digits', rule_digits)

export const length = extend('length', rule_length)

export default {
  name: "chain",
  components: {
    ValidationProvider,
    ValidationObserver,
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BFormGroup,
    BButton,
    BAvatar,
  },
  data() {
    return {
      companyDetails: {
        name:'',
        personnelName: '',
        email: '',
        phone: '',
        taxID: '',
      },
      cardDetails: {
        name: '',
        surname: '',
        cardNumber: '',
        cvv: '',
        expiration: '',
      },
      chainNumber: 0,
      chains: [],
      chainDetails: {
        latitude: '',
        longitude: '',
        address: '',
        phone: '',
        personnelName: '',
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
          } else {
            reject()
          }
        })
      })
    },
    addChain() {
      const propNames = Object.getOwnPropertyNames(this.chainDetails);
      for (let i = 0; i < propNames.length; i++) {
        let propName = propNames[i];
        if (this.chainDetails[propName] !== null || this.chainDetails[propName] !== undefined) {
          this.chainDetails[propName] = '';
        }
      }
      console.log(this.chainDetails)
      this.$refs.chainDetails.reset();
      this.$refs.myWizard.changeTab(2, 1)
    },
    validationFormChain() {
      console.log('hello')
      return new Promise((resolve, reject) => {
        this.$refs.chainDetails.validate().then(success => {
          if (success) {
            this.chains.push(this.chainDetails)
            console.log(this.chains)
            resolve(true)
          } else {
            reject()
          }
        })
      })
    },
    validationFormView() {
      console.log('hello')
      return new Promise((resolve, reject) => {
        this.$refs.viewChains.validate().then(success => {
          if (success) {
            resolve(true)
          } else {
            reject()
          }
        })
      })
    },
    validationFormCard() {
      console.log('hello')
      return new Promise((resolve, reject) => {
        this.$refs.accountDetails.validate().then(success => {
          if (success) {
            resolve(true)
          } else {
            reject()
          }
        })
      })
    },
    formSubmitted() {
      console.log(this.cardDetails)
      console.log(this.companyDetails)
      console.log(this.chains)
    },
  },
}
</script>

<style lang="scss">
.container {
  display: grid;
  justify-content: center;
  height: 100vh;
  align-items: center;
  .card-container {
    border-radius: 3%;
    display: grid;
    width: 90vw;
    height: 90vh;
    grid-template-columns: 4fr 3fr;
    grid-auto-rows: auto;
    grid-template-areas: "left right";
    box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.15);
    .left-side {

      grid-area: left;
      .title {
        font-size: 2.4rem;
        color: #66d466;
        font-weight: normal;
      }
      .title-text {
        width: 70%;
        color: lightgray;
        line-height: 23px;
      }
      .form-card {
        //padding: 1rem;
        //border-radius: 3%;
        //box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.15);
      }
      .chain-card {
        position: relative;
        width: 73%;
        border-radius: 5%;
        box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.075);

        .edit {
          position: absolute;
          top: -3%;
          left: 92%;
        }
        .edit:hover {
          cursor: pointer;
        }

        .delete {
          position: absolute;
          top: 66%;
          left: 92%;
        }
        .delete:hover {
          cursor: pointer;
        }

        .map {
          width: 100%;
          height: 100%;
          background-color: #66d466;
          border-radius: 5% 0 0 5%;
        }
        .content {
          .coordinates {
            color: lightgray;
          }
          .phone-number {
            color: #66d466;
          }
          p {
            margin-bottom: 0.125rem;
          }
        }
      }
    }
    .right-side {
      grid-area: right;
      background-color: #66d466;
      border-radius: 0 3% 3% 0;
    }
  }
}

ul.wizard-nav.wizard-nav-pills {
  display: none;
}
.wizard-progress-with-circle {
  display: none;
}
.vue-form-wizard .wizard-header{
  padding: 0;
}

</style>
