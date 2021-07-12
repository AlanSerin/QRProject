<template>
  <div class="sign-up-container">
    <div class="card-container">
      <b-col>
        <validation-observer class="m-auto" ref="accountDetails" tag="form">
          <b-row class="mb-4">
            <b-col sm="12" class="mb-4 pt-2 pr-0">
              <h1 class="title">Giriş Yap</h1>
              <p class="title-text">Hazırda hesabınız yok mu? <nuxt-link style="color: #8ADA7D;" to="/signUp">Kayıt Ol</nuxt-link></p>
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
                    placeholder="Hesap şifreniz"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="d-flex justify-content-end">
            <b-col sm="3" class="d-grid justify-self-end">
              <BButton @click="sendLogin" variant="success">Giris Yap</BButton>
            </b-col>
          </b-row>
        </validation-observer>
      </b-col>
      <b-col class="right-side overflow-hidden">
        <div class="qr-code">
          <b-img src="~/assets/img/qr-bg.jpg" alt="Person holding phone with qr code on the screen" />
        </div>
      </b-col>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {BRow, BCol, BFormGroup, BButton, BAvatar, BModal, VBModal} from 'bootstrap-vue'
import {FormWizard, TabContent} from 'vue-form-wizard'

export default {
  name: "signUp",
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
        email: '',
        password: '',
      },
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
    async sendLogin() {
      if (!await this.validateForm('accountDetails')) return;

      let Veri = {
        MailAdres:this.companyDetails.email,
        Sifre:this.companyDetails.password
      }

      let res = await this.$axios.$post('/login',Veri);
      if (res.OK) {
        this.$axios.setToken(res.Token, 'Bearer');
        localStorage.setItem('Token', res.Token);
        localStorage.setItem('UserID', res._id);
        this.$router.push('/chain');
      }else {
        console.log(res);
      }
    },
  },
}
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
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
