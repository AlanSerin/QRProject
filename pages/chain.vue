<template>
<div class="container">
  <div class="card-container">
    <div class="left-side overflow-hidden">
      <b-row>
        <b-col sm="12" class="mb-4">
          <h3 class="title">BASVURU FORMU</h3>
          <p class="title-text">Bu kısımda şubeniz ile ilgili almamız gereken bilgileri girmeniz gerekiyor</p>
        </b-col>
      </b-row>
      <b-modal size="xl" class="maps-modal h-100" id="chainModal" hide-footer hide-header  static @hidden="resetModal">


        <form-wizard ref="myWizard" color="#66d466" :title="null" :subtitle="null" :startIndex="0" finish-button-text="Tamamla" next-button-text="Ileri" back-button-text="Geri" class="chain-form" @on-complete="formSubmitted" style="min-height: 42.5rem;">
          <tab-content title="Sube Detaylari" icon="fas fa-warehouse" :before-change="()=>validateForm('chainDetails')">
            <div>
              <validation-observer ref="chainDetails" tag="form">
                <b-row class="form-card">
                  <b-col order="2" order-md="1" md="6">
                    <b-row>
                      <b-col md="6">
                        <b-form-group label="Enlem" label-for="i-latitude">
                          <validation-provider #default="{ errors }" name="Enlem" rules="required">
                            <b-form-input id="i-latitude" v-model="chainDetails.latitude" :state="errors.length > 0 ? false:null" placeholder="15.2" />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Boylam" label-for="i-longitude">
                          <validation-provider #default="{ errors }" name="Boylam" rules="required">
                            <b-form-input id="i-longitude" v-model="chainDetails.longitude" :state="errors.length > 0 ? false:null" placeholder="12.3" />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Telefon" label-for="i-phone">
                          <validation-provider #default="{ errors }" name="Telefon Numarası" rules="required|phone">
                            <VuePhoneNumberInput default-country-code="TR" :translations="translations" id="i-phone" @update="phoneDetails = $event" size="sm" v-model="chainDetails.phone" :clearable="true" />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Yetkili Personel" label-for="i-personnel">
                          <validation-provider #default="{ errors }" name="Yetkili Personel" rules="required">
                            <b-form-input id="i-personnel" v-model="chainDetails.personnelName" :state="errors.length > 0 ? false:null" placeholder="Ahmet Soruc"/>
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Il" label-for="i-province">
                          <validation-provider #default="{ errors }" name="İl" rules="required">
                            <b-form-select id="i-province" v-model="chainDetails.province" :options="_.filter(regions, { 'UstID': ''})" :state="errors.length > 0 ? false:null" value-field="_id" text-field="Aciklama" placeholder="Gazimagusa" />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Ilce" label-for="i-district">
                          <validation-provider #default="{ errors }" name="İlçe" rules="required">
                            <b-form-select id="i-district" v-model="chainDetails.district" :options="_.filter(regions, { 'UstID': chainDetails.province || '-1'})" :state="errors.length > 0 ? false:null" value-field="_id" text-field="Aciklama" placeholder="Gazimagusa" />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="12">
                        <b-form-group label="Adres" label-for="i-address">
                          <validation-provider #default="{ errors }" name="Adres" rules="required">
                            <b-form-input id="i-address" v-model="chainDetails.address" :state="errors.length > 0 ? false:null" placeholder="Bilmem ne Sokak no 3" />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-col>


                  <b-col order="1" order-md="2" md="6">
                    <div class="chain-maps">
                      <!-- v-if="validateChain" -->
                      <GmapMap :center="center" :zoom="10" map-type-id="terrain" style="width: 100%; height: 450px" @click="handleMapClick">
                        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
                      </GmapMap>
                    </div>
                  </b-col>
                </b-row>
              </validation-observer>

            </div>

          </tab-content>
          <tab-content title="Ödeme Bilgileri" icon="fas fa-credit-card" :before-change="()=>validateForm('cardDetails')">
            <div>
              <validation-observer ref="cardDetails" tag="form">
                <b-row class="mb-4">
                  <b-col order="2" order-xl="1" lg="12" xl="6">
                    <b-row>
                      <b-col md="6">
                        <b-form-group label="Isim" label-for="i-name">
                          <validation-provider #default="{ errors }" name="İsim" rules="required">
                            <b-form-input id="i-name" v-model="cardDetails.name" :state="errors.length > 0 ? false:null" placeholder="İsim" />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Soyisim" label-for="i-surname">
                          <validation-provider #default="{ errors }" name="Soyisim" rules="required">
                            <b-form-input id="i-surname" v-model="cardDetails.surname" :state="errors.length > 0 ? false:null" placeholder="Soyisim" />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Kart Numarasi" label-for="i-card">
                          <validation-provider #default="{ errors }" name="Kart Numarası" rules="required|credit-card">
                            <b-form-input id="i-card" v-model="cardDetails.cardNumber" :formatter="cardFormatter" :state="errors.length > 0 ? false:null" placeholder="Ör: 4716800255496291" />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="Son Kullanma Tarihi" label-for="i-expiration">
                          <validation-provider #default="{ errors }" name="Son Kullanma Tarihi" rules="required">
                            <b-form-input id="i-expiration" v-model="cardDetails.expiration" type="text" :formatter="dateFormatter" :state="errors.length > 0 ? false:null" placeholder="Ör: 03/24" />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group label="CCV Kodu" label-for="i-cvv">
                          <validation-provider #default="{ errors }" name="CCV Kodu" rules="required|min:3">
                            <b-form-input id="i-cvv" v-model="cardDetails.cvv" :formatter="cvvFormatter" :state="errors.length > 0 ? false:null" placeholder="Ör: 275" />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col class="d-none d-sm-block" order="1" order-xl="2" lg="12" xl="6">
                    <div class="mb-4 pb-4" style="height: 250px;">
                      <LazyCreditCard :company="'FurtherSoft'" :name="cardDetails.name + ' ' +cardDetails.surname" :number="this.cardDetails.cardNumber" :exp="cardDetails.expiration" :ccv="cardDetails.cvv" />
                    </div>
                  </b-col>

                </b-row>
              </validation-observer>
            </div>
          </tab-content>
          <tab-content title="I Frame" icon="far fa-check-square" :after-change="sendChain">
            <!-- :before-change= "validationFormIFrame" -->
            <div>
            <template v-if="loadingWizard == false">
              <div> Sonuc</div>
              <div v-html="PosSonuc">{{ PosSonuc }}</div>
              <div>{{ PosSonuc }}</div>
            </template>
            <template v-if="loadingWizard == true">
              <b-row class="mb-4">
                <b-col md="12">
                  yukleniyor...
              </b-col>
              </b-row>
            </template>
            </div>
          </tab-content>
          <div class="loader" v-if="loadingWizard"></div>
          <template slot="footer" slot-scope="props">
            <div class="wizard-footer-left">
              <wizard-button v-if="props.activeTabIndex <= 0"  :style="props.fillButtonStyle" @click.native="$bvModal.hide('chainModal')">
                Iptal
              </wizard-button>
              <wizard-button v-if="props.activeTabIndex > 0 && !props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Geri</wizard-button>
            </div>
            <div class="wizard-footer-right">
              <wizard-button v-if="!props.isLastStep" @click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle" >İleri</wizard-button>
              <wizard-button v-if="props.isLastStep" @click.native="$bvModal.hide('chainModal')" class="wizard-footer-right" :style="props.fillButtonStyle" >Tamamlandı</wizard-button>
            </div>
          </template>
        </form-wizard>

      </b-modal>


      <template v-if="chains.length > 0">
        <b-row @click="chainPage(index)" :key="index" class="mb-4" v-for="(item,index) in chains">
          <b-col sm="12">
            <div class="chain-card p-2 px-3">
              <b-row>
                <b-col sm="8">
                  <div class="content">
                    <p class="fw-bold">{{item.Bolge.AcikAdres || ''}}</p>
                    <p class="coordinates">Enlem: {{item.Konum.Lat}} Boylam: {{item.Konum.Long}}</p>
                    <p class="phone-number">+{{item.Telefon}}</p>
                    <p class="fw-bold">{{item.Yonetici}}</p>
                  </div>
                </b-col>
                <b-col sm="4">
                  <b-button v-if="item.Durum != 0" @click="()=>chainPage(item._id)" block class="green-button mb-4">Yazdir</b-button>
                  <b-button v-if="item.Durum == 0" disabled class="green-button mb-4">Onay Bekliyor</b-button>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button v-b-modal.chainModal block class="green-button mb-4">Sube Ekle</b-button>
          </b-col>
        </b-row>
      </template>
      <template v-else>
        <b-row class="d-grid justify-content-center text-center">
          <b-col sm="12" class="d-grid justify-content-center">
            <h2 class="fw-normal mb-3">Sube Yok</h2>
            <svg class="my-4" width="226" height="259" viewBox="0 0 226 259" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M219.946 242.812H209.857V12.1406C209.857 5.43546 204.437 0 197.75 0H28.25C21.5633 0 16.1429 5.43546 16.1429 12.1406V242.812H6.05357C2.71049 242.812 0 245.53 0 248.883V259H226V248.883C226 245.53 223.29 242.812 219.946 242.812ZM64.5714 38.4453C64.5714 35.093 67.2819 32.375 70.625 32.375H90.8036C94.1467 32.375 96.8571 35.093 96.8571 38.4453V58.6797C96.8571 62.032 94.1467 64.75 90.8036 64.75H70.625C67.2819 64.75 64.5714 62.032 64.5714 58.6797V38.4453ZM64.5714 87.0078C64.5714 83.6555 67.2819 80.9375 70.625 80.9375H90.8036C94.1467 80.9375 96.8571 83.6555 96.8571 87.0078V107.242C96.8571 110.595 94.1467 113.312 90.8036 113.312H70.625C67.2819 113.312 64.5714 110.595 64.5714 107.242V87.0078ZM90.8036 161.875H70.625C67.2819 161.875 64.5714 159.157 64.5714 155.805V135.57C64.5714 132.218 67.2819 129.5 70.625 129.5H90.8036C94.1467 129.5 96.8571 132.218 96.8571 135.57V155.805C96.8571 159.157 94.1467 161.875 90.8036 161.875ZM129.143 242.812H96.8571V200.32C96.8571 196.968 99.5676 194.25 102.911 194.25H123.089C126.432 194.25 129.143 196.968 129.143 200.32V242.812ZM161.429 155.805C161.429 159.157 158.718 161.875 155.375 161.875H135.196C131.853 161.875 129.143 159.157 129.143 155.805V135.57C129.143 132.218 131.853 129.5 135.196 129.5H155.375C158.718 129.5 161.429 132.218 161.429 135.57V155.805ZM161.429 107.242C161.429 110.595 158.718 113.312 155.375 113.312H135.196C131.853 113.312 129.143 110.595 129.143 107.242V87.0078C129.143 83.6555 131.853 80.9375 135.196 80.9375H155.375C158.718 80.9375 161.429 83.6555 161.429 87.0078V107.242ZM161.429 58.6797C161.429 62.032 158.718 64.75 155.375 64.75H135.196C131.853 64.75 129.143 62.032 129.143 58.6797V38.4453C129.143 35.093 131.853 32.375 135.196 32.375H155.375C158.718 32.375 161.429 35.093 161.429 38.4453V58.6797Z"
                fill="#49C6BE" />
            </svg>
            <!--                    <p>Henuz bir sube eklemediniz</p>-->
            <b-button class="my-4" v-b-modal.chainModal variant="outline-info">Sube Ekle</b-button>
          </b-col>
        </b-row>
      </template>
    </div>
    <div class="right-side">
      <div class="qr-code">
        <b-img fluid src="~/assets/img/adapass-website.png" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver
} from 'vee-validate'
import {
  BRow,
  BCol,
  BFormGroup,
  BButton,
  BAvatar,
  BModal,
  VBModal
} from 'bootstrap-vue'
import {
  FormWizard,
  TabContent
} from 'vue-form-wizard'

import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VueQrcode from 'vue-qrcode'

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
    BModal,
    VueQrcode,
  },
  directives: {
    'b-modal': VBModal
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
      cardNumber: null,
      center: {
        lat: 35.189940,
        lng: 33.357756
      },
      markers: [],
      regions: [],
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
        province: '60b694ad1ef1d64168a63173',
        district: '60b695361ef1d64168a63179',
        phone: '',
        personnelName: '',
        // main: false,
      },
      loadingWizard:false,
      PosSonuc:''
    }
  },
  watch: {
    chainDetails: {
      deep: true,

      handler() {
        if(this.chainDetails.latitude && this.chainDetails.longitude) {
          setTimeout(() => {
            this.markers.pop()
            this.markers = [{
              position: {
                lat: parseInt(this.chainDetails.latitude),
                lng: parseInt(this.chainDetails.longitude)
              },
            }, ]
          }, 1500)
        }
      },
    }
  },
  methods: {
    formSubmitted() {
      console.log('success')
    },
    dateFormatter(value) {
      if (!value) return
      let realNumber = value.replace(/\//gi, '')
      // Generate dashed number
      let dashedNumber = realNumber.match(/.{1,2}/g)
      value = dashedNumber.join('/')

      return value.substring(0, 5)
    },
    cardFormatter(value) {
      if(this.cardDetails.cardNumber.length >= 19) {
        return value.substring(0, 19)
      }
      this.cardDetails.cardNumber = value.split('-').join('')
      console.log(this.cardDetails.cardNumber)
      // Card number without dash (-)
      let realNumber = value.replace(/-/gi, '')

      // Generate dashed number
      let dashedNumber = realNumber.match(/.{1,4}/g)

      if (!dashedNumber) return
      // Replace the dashed number with the real one
      value = dashedNumber.join('-')

      return value.substring(0, 19)
    },
    cvvFormatter(value) {
      return value.substring(0, 3)
    },
    //Moves the marker to click position on the map
    handleMapClick(e) {
      this.chainDetails.latitude = e.latLng.lat()
      this.chainDetails.longitude = e.latLng.lng()
      this.markers = [{
        position: {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
      }, ]
    },
    chainPage(index) {
      this.$router.push({
        name: 'chainInfo',
        params: {
          chain: index
        }
      })
    },

    async sendChain(){
      if (!await this.validateForm('chainDetails')) return;
      if (!await this.validateForm('cardDetails')) return;
      this.loadingWizard=true

      let Veri={
        Company:{
          'Lat':this.chainDetails.latitude,
          'Long':this.chainDetails.longitude,
          'AcikAdres':this.chainDetails.address,
          'IL':this.chainDetails.province,
          'Ilce':this.chainDetails.district,
          'Telefon':this.phoneDetails.countryCallingCode + this.chainDetails.phone,
          'Yonetici':this.chainDetails.personnelName,
        },
        Odeme:{
          'Adi':this.cardDetails.name + ' ' + this.cardDetails.surname,
          'KartNo':this.cardDetails.cardNumber,
          'CVV':this.cardDetails.cvv,
          'SonKullanim':this.cardDetails.expiration,
        }
      }
      console.log('3D Secure Kodu: 111111');
      this.$axios.$post('/',Veri).then((res)=>{
        console.log(res);
        this.PosSonuc=res.PosCvp;
        this.loadingWizard=false
      });

    },
    resetModal(){
      this.$axios.$get('/').then((res) => {
        this.chains = res;
      });

      this._.keys(this.chainDetails).forEach((item) => {
        this.chainDetails[item]=''
      });
      this._.keys(this.cardDetails).forEach((item) => {
        this.cardDetails[item]=''
      });
      this.$refs.['chainDetails'].reset()
      this.$refs.['cardDetails'].reset()
    },
    async validateForm(refs = '') {
      return await this.$refs.[refs].validate().then((data) => {
        if (data) {
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      })
    },
  },
  mounted() {
    if (localStorage.getItem('Token')) {
      this.$axios.setToken(localStorage.getItem('Token'), 'Bearer');
    }
    this.$axios.$get('/').then((res) => {
      this.chains = res;
    });
    this.$axios.$get('/regions').then((res) => {
      this.regions = res;
    });
  },
}
</script>

<style lang="scss">
@media (min-width: 1024px) {
  .wizard-card-footer {
    position: absolute;width: 100%;left: 0;bottom: 0;padding-bottom: 1rem!important;
  }
    .country-selector.has-hint .country-selector__label[data-v-46e105de],
    .country-selector.has-value .country-selector__label[data-v-46e105de] {
        transform: translateY(-30%) !important;
    }
    .input-tel.has-hint .input-tel__label[data-v-e59be3b4],
    .input-tel.has-value .input-tel__label[data-v-e59be3b4] {
        transform: translateY(-30%) !important;
    }

    #details___BV_modal_body_ {
        .chain-form {
            grid-area: form;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .chain-maps {
            grid-area: maps;
            padding-left: 1rem;
        }
        display: block;
        grid-template-columns: 4fr 3fr;
        grid-template-rows: auto;
        grid-template-areas: "form maps";
    }

    .container {
        display: grid;
        justify-content: center;
        height: 100vh;
        align-items: center;
        .card-container {
            border-radius: 3%;
            display: grid;
            // EMIN OLAMADIM YA EKRAN COK BUYUK OLURSA
            min-width: 90vw;
            min-height: 70vh;

            grid-template-columns: 4fr 3fr;
            grid-auto-rows: auto;
            grid-template-areas: "left right";
            box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.15);
            .left-side {
                grid-area: left;
                overflow: auto;
                padding: 1rem;
                .green-button {
                    background-color: #66d466;
                    border-color: #66d466;
                }
                .green-button:hover {
                    box-shadow: 0 4px 16px 0 rgba(102, 212, 102, 0.66);
                }
                .title {
                    font-size: 2.4rem;
                    color: #66d466;
                    font-weight: normal;
                }
                .title-text {
                    //width: 70%;
                    color: lightgray;
                    line-height: 23px;
                }
                .chain-card {
                    position: relative;
                    box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.075);
                    border: 1px solid rgba(255, 255, 255, 0);

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
                .chain-card:hover {
                    cursor: pointer;
                    // box-shadow: 0 4px 16px 0 rgba(102, 212, 102, 0.66);
                    border: 1px solid #8ADA7D;
                }
            }
            .right-side {
                display: flex;
                justify-content: center;
                align-items: center;
                grid-area: right;
                background-color: #66d466;
                border-radius: 0 3% 3% 0;
                .qr-code {
                    background: #8ADA7D;
                    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 29px;
                    width: 70%;
                }
            }
        }
    }

}
@media (max-width: 1024px) {
    .country-selector.has-hint .country-selector__label[data-v-46e105de],
    .country-selector.has-value .country-selector__label[data-v-46e105de] {
        transform: translateY(-27%) !important;
    }
    .input-tel.has-hint .input-tel__label[data-v-e59be3b4],
    .input-tel.has-value .input-tel__label[data-v-e59be3b4] {
        transform: translateY(-30%) !important;
    }
    .container {
        display: grid;
        justify-content: center;
        height: 100vh;
        align-items: center;
        .card-container {
            //border-radius: 3%;
            display: grid;
            width: 100vw;
            height: 100vh;
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            grid-template-areas: "left";
            //box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.15);
            .left-side {
                grid-area: left;
                overflow: auto;
                padding: 0 1rem;

                .green-button {
                    background-color: #66d466;
                    border-color: #66d466;
                }
                .green-button:hover {
                    box-shadow: 0 4px 16px 0 rgba(102, 212, 102, 0.66);
                }
                .title {
                    font-size: 2.4rem;
                    color: #66d466;
                    font-weight: normal;
                }
                .title-text {
                    //width: 70%;
                    color: lightgray;
                    line-height: 23px;
                }
                .chain-card {
                    position: relative;
                    box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.075);
                    border: 1px solid rgba(255, 255, 255, 0);

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
                .chain-card:hover {
                    cursor: pointer;
                    border: 1px solid #8ADA7D;
                }
            }
            .right-side {
                display: none;
            }
        }
    }
}

.green-button {
    background-color: #66d466;
    border-color: #66d466;
}
.green-button:hover {
    // box-shadow: 0 4px 16px 0 rgba(102, 212, 102, 0.66);
    // background-color: #8ADA7D;
    // border-color: #8ADA7D;
}
</style>
