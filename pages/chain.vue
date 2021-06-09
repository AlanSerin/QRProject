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
          class="mb-3"
          @on-complete="formSubmitted"
        >
          <tab-content class="" :before-change="validationFormView" title="">
            <validation-observer ref="viewChains" tag="form">
              <b-row>
                <b-col sm="12" class="mb-4 pr-0">
                  <h3 class="title">BASVURU FORMU</h3>
                  <p class="title-text">Bu kısımda şirketiniz ile ilgili almamız gereken bilgileri girmeniz gerekiyor</p>
                </b-col>
              </b-row>
              <b-modal size="xl" class="maps-modal" ref="details" no-close-on-esc hide-header-close no-close-on-backdrop :id="validateChain ? 'details' : 'card'" hide-footer>
                <template v-slot:modal-header-close>
<!--                  <i class="fa fa-close"></i>-->
                </template>
                <template #modal-title>
                  <h3 class="title mb-0 fw-normal">SUBE OLUSTUR</h3>
                  <!--                        <p class="title-text">Bu kısımda şirketiniz ile ilgili almamız gereken bilgileri girmeniz gerekiyor</p>-->
                </template>
                <div v-if="validateChain" class="chain-maps">
                  <GMap
                    ref="gMap"
                    language="en"
                    :cluster="{options: {styles: clusterStyle}}"
                    :center="{lat: 35.18, lng: 33.35}"
                    :options="{fullscreenControl: false, styles: mapStyle}"
                    :zoom="14"
                    @click="handleMapClick"
                  >
                    <div :key="markerKey" v-if="returnLocations">
                      <GMapMarker
                        :position="returnLocations"
                        :clickable="true"
                        :draggable="true"
                        @click="panToMarker"
                      >
                      </GMapMarker>
                    </div>
                    <GMapCircle :options="circleOptions"/>
                  </GMap>
                </div>
                <div v-if="validateChain" class="chain-form">
                  <!--                <tab-content :before-change="validationFormChain" title="">-->
                  <validation-observer ref="chainDetails" tag="form">
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
                          label="Il"
                          label-for="i-il"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Il"
                            rules="required"
                          >
                            <b-form-input
                              id="i-il"
                              v-model="chainDetails.il"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Gazimagusa"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                          label="Ilce"
                          label-for="i-ilce"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Ilce"
                            rules="required"
                          >
                            <b-form-input
                              id="i-ilce"
                              v-model="chainDetails.ilce"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Gazimagusa"
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
                              placeholder="Ahmet Soruc"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>
                      <b-col md="6" class="d-flex pt-4 align-items-center">
                        <div class="mr-3 pb-1">Ana Sube</div>
                        <b-form-checkbox class="" v-model="chainDetails.main" :unchecked-value="false" :value="true"></b-form-checkbox>
                      </b-col>
                    </b-row>
                    <b-row class="mt-3">
                      <b-col sm="6" class="mb-3">
                        <b-button variant="outline-danger" block @click="() => {this.$bvModal.hide('details')}">Iptal</b-button>
                      </b-col>
                      <b-col sm="6">
                        <b-button class="green-button" variant="success" block @click="validationFormChainModal">Ilerle</b-button>
                      </b-col>
                    </b-row>
                  </validation-observer>
                </div>
                <div class="chain-form" v-if="validateCard">
                  <validation-observer ref="cardDetails" tag="form">
                    <b-row class="mb-4">
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
                    <b-row class="mt-3">
                      <b-col sm="6" class="mb-3">
                        <b-button
                          block
                          @click="() => {
                      this.validateChain = true
                      this.validateCard = false
                      this.chains.pop()
                    }"
                          variant="outline-danger">
                          Geri
                        </b-button>
                      </b-col>
                      <b-col sm="6">
                        <b-button
                          block
                          @click="validationFormCardChain"
                          variant="success">
                          Tamamla
                        </b-button>
                      </b-col>
                    </b-row>
                  </validation-observer>
                </div>
              </b-modal>
              <template v-if="chains.length > 0">
                <b-row @click="chainPage(index)" :key="index" class="mb-4" v-for="(chain,index) in chains">
                  <b-col sm="12">
                    <div class="chain-card p-2 px-3">
                      <b-row>
                        <b-col sm="12">
                          <div class="content">
                            <p class="fw-bold">{{chain.address}}</p>
                            <p class="coordinates">Enlem: {{chain.latitude}} Boylam: {{chain.longitude}}</p>
                            <p class="phone-number">+{{chain.phone}}</p>
                            <p class="fw-bold">{{chain.personnelName}}</p>
                          </div>
                        </b-col>
<!--                        <b-col sm="4" class="d-flex h-25 justify-content-end pr-0 pt-1">-->
<!--                          <b-button @click="showModal(index)" variant="outline-info">Detaylar</b-button>-->
<!--                        </b-col>-->
                      </b-row>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-button @click="addChain" block class="green-button mb-4">Sube Ekle</b-button>
                  </b-col>
                </b-row>
              </template>
              <template v-else>
                <b-row class="d-grid justify-content-center text-center">
                  <b-col sm="12" class="d-grid justify-content-center">
                    <h2 class="fw-normal mb-3">Sube Yok</h2>
                    <svg class="my-4" width="226" height="259" viewBox="0 0 226 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M219.946 242.812H209.857V12.1406C209.857 5.43546 204.437 0 197.75 0H28.25C21.5633 0 16.1429 5.43546 16.1429 12.1406V242.812H6.05357C2.71049 242.812 0 245.53 0 248.883V259H226V248.883C226 245.53 223.29 242.812 219.946 242.812ZM64.5714 38.4453C64.5714 35.093 67.2819 32.375 70.625 32.375H90.8036C94.1467 32.375 96.8571 35.093 96.8571 38.4453V58.6797C96.8571 62.032 94.1467 64.75 90.8036 64.75H70.625C67.2819 64.75 64.5714 62.032 64.5714 58.6797V38.4453ZM64.5714 87.0078C64.5714 83.6555 67.2819 80.9375 70.625 80.9375H90.8036C94.1467 80.9375 96.8571 83.6555 96.8571 87.0078V107.242C96.8571 110.595 94.1467 113.312 90.8036 113.312H70.625C67.2819 113.312 64.5714 110.595 64.5714 107.242V87.0078ZM90.8036 161.875H70.625C67.2819 161.875 64.5714 159.157 64.5714 155.805V135.57C64.5714 132.218 67.2819 129.5 70.625 129.5H90.8036C94.1467 129.5 96.8571 132.218 96.8571 135.57V155.805C96.8571 159.157 94.1467 161.875 90.8036 161.875ZM129.143 242.812H96.8571V200.32C96.8571 196.968 99.5676 194.25 102.911 194.25H123.089C126.432 194.25 129.143 196.968 129.143 200.32V242.812ZM161.429 155.805C161.429 159.157 158.718 161.875 155.375 161.875H135.196C131.853 161.875 129.143 159.157 129.143 155.805V135.57C129.143 132.218 131.853 129.5 135.196 129.5H155.375C158.718 129.5 161.429 132.218 161.429 135.57V155.805ZM161.429 107.242C161.429 110.595 158.718 113.312 155.375 113.312H135.196C131.853 113.312 129.143 110.595 129.143 107.242V87.0078C129.143 83.6555 131.853 80.9375 135.196 80.9375H155.375C158.718 80.9375 161.429 83.6555 161.429 87.0078V107.242ZM161.429 58.6797C161.429 62.032 158.718 64.75 155.375 64.75H135.196C131.853 64.75 129.143 62.032 129.143 58.6797V38.4453C129.143 35.093 131.853 32.375 135.196 32.375H155.375C158.718 32.375 161.429 35.093 161.429 38.4453V58.6797Z" fill="#49C6BE"/>
                    </svg>
<!--                    <p>Henuz bir sube eklemediniz</p>-->
                    <b-button class="my-4" @click="addChain" variant="outline-info">Sube Ekle</b-button>
                  </b-col>
                </b-row>
              </template>
            </validation-observer>
          </tab-content>
<!--          <tab-content :before-change="validationFormCard" title="">-->
<!--            <validation-observer ref="cardDetails" tag="form">-->
<!--              <b-row class="mb-4">-->
<!--                <b-col sm="12" class="mb-4">-->
<!--                  <h3 class="title">BASVURU FORMU</h3>-->
<!--                  <p class="title-text">Formu neredeyse bitirdiniz! Simdi odeme secenklerini girmeniz gerek </p>-->
<!--                </b-col>-->
<!--                <b-col md="6">-->
<!--                  <b-form-group-->
<!--                    label="Isim"-->
<!--                    label-for="i-name"-->
<!--                  >-->
<!--                    <validation-provider-->
<!--                      #default="{ errors }"-->
<!--                      name="Name"-->
<!--                      rules="required"-->
<!--                    >-->
<!--                      <b-form-input-->
<!--                        id="i-name"-->
<!--                        v-model="cardDetails.name"-->
<!--                        :state="errors.length > 0 ? false:null"-->
<!--                        placeholder="Ahmet"-->
<!--                      />-->
<!--                      <small class="text-danger">{{ errors[0] }}</small>-->
<!--                    </validation-provider>-->
<!--                  </b-form-group>-->
<!--                </b-col>-->
<!--                <b-col md="6">-->
<!--                  <b-form-group-->
<!--                    label="SoyIsim"-->
<!--                    label-for="i-surname"-->
<!--                  >-->
<!--                    <validation-provider-->
<!--                      #default="{ errors }"-->
<!--                      name="Surname"-->
<!--                      rules="required"-->
<!--                    >-->
<!--                      <b-form-input-->
<!--                        id="i-surname"-->
<!--                        v-model="cardDetails.surname"-->
<!--                        :state="errors.length > 0 ? false:null"-->
<!--                        placeholder="Soruc"-->
<!--                      />-->
<!--                      <small class="text-danger">{{ errors[0] }}</small>-->
<!--                    </validation-provider>-->
<!--                  </b-form-group>-->
<!--                </b-col>-->
<!--                <b-col md="6">-->
<!--                  <b-form-group-->
<!--                    label="Kart Numarasi"-->
<!--                    label-for="i-card"-->
<!--                  >-->
<!--                    <validation-provider-->
<!--                      #default="{ errors }"-->
<!--                      name="Card"-->
<!--                      rules="required|credit-card"-->
<!--                    >-->
<!--                      <b-form-input-->
<!--                        id="i-card"-->
<!--                        v-model="cardDetails.cardNumber"-->
<!--                        :state="errors.length > 0 ? false:null"-->
<!--                        placeholder="4716800255496291"-->
<!--                      />-->
<!--                      <small class="text-danger">{{ errors[0] }}</small>-->
<!--                    </validation-provider>-->
<!--                  </b-form-group>-->
<!--                </b-col>-->
<!--                <b-col md="6">-->
<!--                  <b-form-group-->
<!--                    label="CVV Kodu"-->
<!--                    label-for="i-cvv"-->
<!--                  >-->
<!--                    <validation-provider-->
<!--                      #default="{ errors }"-->
<!--                      name="CVV"-->
<!--                      rules="required|min:3"-->
<!--                    >-->
<!--                      <b-form-input-->
<!--                        id="i-cvv"-->
<!--                        v-model="cardDetails.cvv"-->
<!--                        :state="errors.length > 0 ? false:null"-->
<!--                        placeholder="212"-->
<!--                      />-->
<!--                      <small class="text-danger">{{ errors[0] }}</small>-->
<!--                    </validation-provider>-->
<!--                  </b-form-group>-->
<!--                </b-col>-->
<!--                <b-col md="6">-->
<!--                  <b-form-group-->
<!--                    label="Son Kullanma Tarihi"-->
<!--                    label-for="i-expiration"-->
<!--                  >-->
<!--                    <validation-provider-->
<!--                      #default="{ errors }"-->
<!--                      name="Expiration"-->
<!--                      rules="required"-->
<!--                    >-->
<!--                      <b-form-input-->
<!--                        id="i-expiration"-->
<!--                        v-model="cardDetails.expiration"-->
<!--                        type="date"-->
<!--                        :state="errors.length > 0 ? false:null"-->
<!--                        placeholder="03/24"-->
<!--                      />-->
<!--                      <small class="text-danger">{{ errors[0] }}</small>-->
<!--                    </validation-provider>-->
<!--                  </b-form-group>-->
<!--                </b-col>-->
<!--              </b-row>-->
<!--            </validation-observer>-->
<!--          </tab-content>-->
          <template slot="footer" slot-scope="{activeTabIndex,isLastStep, nextTab, prevTab, fillButtonStyle}">
            <div class="wizard-footer-left">
<!--              <button v-if="activeTabIndex > 0"-->
<!--                      @click="cancelChain"-->
<!--                      type="button"-->
<!--                      class="btn btn-outline-success">-->
<!--                Iptal Et-->
<!--              </button>-->
<!--            </div>-->
<!--            <div class="wizard-footer-right">-->
<!--              <button	v-if="!isLastStep"-->
<!--                       @click="nextTab"-->
<!--                       type="button"-->
<!--                       class="btn btn-success wizard-footer-right">-->
<!--                Ileri-->
<!--              </button>-->

<!--              <button	v-else-->
<!--                       @click="confirmChain"-->
<!--                       type="button"-->
<!--                       class="btn btn-success wizard-footer-right finish">-->
<!--                Tamamla-->
<!--              </button>-->
            </div>
          </template>
        </form-wizard>
      </div>
      <div class="right-side">
        <div class="qr-code">
          <svg width="300" height="300" viewBox="0 0 408 408" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g filter="url(#filter0_i)">
              <rect width="408" height="408" fill="url(#pattern0)" style="mix-blend-mode:overlay"/>
            </g>
            <defs>
              <filter id="filter0_i" x="0" y="0" width="408" height="412" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
              </filter>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0" transform="scale(0.000833333)"/>
              </pattern>
              <image id="image0" width="1200" height="1200" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwCAYAAADrIbPPAAAgAElEQVR4AezdUYjlaZrn9fj/T0RmV092DyZbM1LUhTKlsrWLLNsz2w7COAizrKCCzJYXxeAygrON7qX06EXNDtMX4rigsAi9wtAXC+2AlCDKuDbiRS0IPStSrDB6Lb0gNt60K0yPiyHvyXPqRGZnZUVGxjm/34n3UxBEZGXEeZ//93ne533ON/7n5MWF/xBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBA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OSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qZ+BhgAAIABJREFUqskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNndwOgIFBEgsPKbksOSOSCweooigWU9qskEVk9FykZCYBFYIwMJrPy+SGARWNnd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EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAgYUT+P/itlUnKtAi8QAAAABJRU5ErkJggg=="/>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {BRow, BCol, BFormGroup, BButton, BAvatar, BModal, VBModal} from 'bootstrap-vue'
import {FormWizard, TabContent} from 'vue-form-wizard'
// import 'vue-form-wizard/dist/vue-form-wizard.min.css'

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
  },
  directives: { 'b-modal': VBModal },
  computed: {
    returnLocations() {
      return this.marker.position
    },
  },
  data() {
    return {
      markerKey:0,
      marker: { position: null},
      validateCard: false,
      validateChain: true,
      currentLocation: {},
      circleOptions: {},
      location: {

      },
        // {
        //   id: 0,
        //   lat: 35.189940,
        //   lng: 33.357756
        // },
        // {
        //   id: 1,
        //   lat: 35.29940,
        //   lng: 33.387756
        // }
      pins: {
        selected: "data:image/png;base64,iVBORw0KGgo...",
        notSelected: "data:image/png;base64,iVBORw0KGgo..."
      },
      mapStyle: [],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff"
        }
      ],

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
        il: '',
        ilce: '',
        phone: '',
        personnelName: '',
        main: false,
      },
    }
  },
  methods: {
    cancelModal() {
      console.log('yo')
    },
    //Moves the marker to click position on the map
    handleMapClick(e) {
      const x = { id: 0, lat: e.event.latLng.lat(), lng: e.event.latLng.lng() };
      this.marker.position = { lat: e.event.latLng.lat(), lng: e.event.latLng.lng() }
      // this.locations[0].lat = x.lat
      // this.locations[0].lng = x.lng
      // this.location = x
      this.chainDetails.latitude = x.lat
      this.chainDetails.longitude = x.lng
      this.markerKey++
      console.log(this.marker);
    },
    //Moves the map view port to marker
    panToMarker() {
      this.$refs.gMap.panTo(this.marker.position);
      this.$refs.gMap.setZoom(18);
    },
    clickedLocation(e) {
      console.log(e)
    },
    chainPage(index){
      this.$router.push({name: 'chainInfo', params: {chain: index}})
    },
    showModal(index) {
      this.$bvModal.show('details')
      console.log(index)
    },
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
      const propNames1 = Object.getOwnPropertyNames(this.cardDetails);
      for (let i = 0; i < propNames1.length; i++) {
        let propName = propNames1[i];
        if (this.cardDetails[propName] !== null || this.cardDetails[propName] !== undefined) {
          this.cardDetails[propName] = '';
        }
      }
      console.log(this.chains)
      // this.$refs.chainDetails.reset();
      // this.$refs.myWizard.changeTab(2, 1)
      this.showModal()
    },
    validationFormChain() {
      console.log('hello')
      return new Promise((resolve, reject) => {
        this.$refs.chainDetails.validate().then(success => {
          if (success) {
            let x = {}
            Object.assign(x,this.chainDetails)
            this.chains.push(x)
            this.$bvModal.hide('details')
            this.$refs.myWizard.nextTab()
            console.log(this.chains)
            resolve(true)
          } else {
            reject()
          }
        })
      })
    },
    cancelChain () {
      const lastChain = this.chains.pop()
      this.$refs.myWizard.prevTab()
      console.log(lastChain)
    },
    async confirmChain () {
      try {
        const res = await this.$axios.$get('http://icanhazip.com')
        console.log(res)
         // this.$refs.myWizard.prevTab()
      } catch (e) {
        console.log(e)
        this.chains.pop()
        // this.$refs.myWizard.prevTab()
      }
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
    validationFormChainModal() {
      return new Promise((resolve, reject) => {
        this.$refs.chainDetails.validate().then(success => {
          if (success) {
            console.log('yes')
            let x = {}
            Object.assign(x,this.chainDetails)
            this.chains.push(x)
            this.validateCard = true
            this.validateChain = false
          } else {
            console.log('hel')
            reject()
          }
        })
      })
    },
    validationFormCardChain() {
      console.log('hello1')
      return new Promise((resolve, reject) => {
        this.$refs.cardDetails.validate().then(success => {
          if (success) {
            console.log('you did it')
            this.validateCard = false
            this.validateChain = true
            this.$bvModal.hide('card')
          } else {
            reject()
          }
        })
      })
    },
    validationFormCard() {
      console.log('hello1')
      return new Promise((resolve, reject) => {
        this.$refs.cardDetails.validate().then(success => {
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


@media (min-width: 1024px) {

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
    display: grid;
    grid-template-columns: 3fr 4fr;
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
        padding: 0 1rem;

        .wizard-footer-left {
          .btn {
            width: 250%;
            border-color: #66d466;
            color: #66d466;
          }
          .btn:hover {
            background-color: #66d466;
            color: white;
          }
        }
        .green-button {
          background-color: #66d466;
          border-color: #66d466;
        }
        .green-button:hover {
          box-shadow: 0 4px 16px 0 rgba(102, 212, 102, 0.66);
        }
        .wizard-footer-right {
          .wizard-footer-right {
            width: 250%;
            background-color: #66d466;
            border-color: #66d466;
          }
          .wizard-footer-right:hover {
            box-shadow: 0 4px 16px 0 rgba(102, 212, 102, 0.66);
          }
          .finish {
            width: 150%;
            background-color: #66d466;
            border-color: #66d466;
          }
          .finish:hover {
            box-shadow: 0 4px 16px 0 rgba(102, 212, 102, 0.66);
          }
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
        .form-card {
          //padding: 1rem;
          //border-radius: 3%;
          //box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.15);
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
          box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 29px;
        }
      }
    }
  }

}
@media (max-width: 1024px) {
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

        .wizard-footer-left {
          .btn {
            width: 150%;
            border-color: #66d466;
            color: #66d466;
          }
          .btn:hover {
            background-color: #66d466;
            color: white;
          }
        }
        .green-button {
          background-color: #66d466;
          border-color: #66d466;
        }
        .green-button:hover {
          box-shadow: 0 4px 16px 0 rgba(102, 212, 102, 0.66);
        }
        .wizard-footer-right {
          .wizard-footer-right {
            width: 150%;
            background-color: #66d466;
            border-color: #66d466;
          }
          .wizard-footer-right:hover {
            box-shadow: 0 4px 16px 0 rgba(102, 212, 102, 0.66);
          }
          .finish {
            width: 125%;
            background-color: #66d466;
            border-color: #66d466;
          }
          .finish:hover {
            box-shadow: 0 4px 16px 0 rgba(102, 212, 102, 0.66);
          }
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
        .form-card {
          //padding: 1rem;
          //border-radius: 3%;
          //box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.15);
        }
        .chain-card {
          position: relative;
          //width: 73%;
          //border-radius: 5%;
          box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.075);
          border: 1px solid rgba(255, 255, 255, 0);

          //.edit {
          //  position: absolute;
          //  top: -3%;
          //  left: 92%;
          //}
          //.edit:hover {
          //  cursor: pointer;
          //}

          //.delete {
          //  position: absolute;
          //  top: 63%;
          //  left: 76%;
          //}
          //.delete:hover {
          //  cursor: pointer;
          //}

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
