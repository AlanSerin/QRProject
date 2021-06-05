<template>
  <div class="d-flex flex-column justify-content-between root">
    <div>
      <div class="top-area container-fluid">
        <div class="top-content w-100">
          <div class="d-flex justify-content-end">
            <img class="government-logo" src="~/assets/img/saglik-removebg-preview.png" />
          </div>
          <div class="ministry-name">
            <h2 class="text-light">Kuzey Kibris Turk Cumhuriyeti</h2>
            <h2 class="text-light">Saglik Bakanligi</h2>
          </div>
        </div>
      </div>
      <div class="body text-center container-fluid">
        <b-row class="mb-2">
          <b-col sm="5"></b-col>
          <b-col sm="7">
            <div>{{chainDetails.address}} Subesi</div>
          </b-col>
        </b-row>
        <b-row class="text-center mb-2">
          <b-col>
            <h1 class="restaurant">{{chainDetails.name}}</h1>
          </b-col>
        </b-row>
        <div class="warning p-2">
          <b-row class="justify-content-center qr-warning">
            <b-col class="text-center" sm="12">
              <h3 class="m-0">Lutfen QR Okutarak Giris Yapiniz</h3>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <div>

      <div class="d-flex justify-content-center align-content-center align-items-center">
        <div class="qr-code">
          <vue-qrcode :width="650" value="https://www.youtube.com" />
        </div>
      </div>

    </div>
    <div>
      <div class="clearfix py-3 container-fluid warning my-footer">
        <b-row class="">
          <b-col class="d-flex align-items-center justify-content-center" sm="2">
            <b-img src="https://picsum.photos/125/125/?image=58" alt="Left image" />
          </b-col>
          <b-col sm="8">
            <h2>KKTC Saglik Bakanligi</h2>
            <p>ksjdfkljsdlk fjskld jklsj dlksjdkl jklsf ashdjajhdjkahsjkdhjkahdjkhasjkhjkfhjksdhjkdshfjgh jkdfghjkdfjkghjkdfhgjkhkdjhgjkdhk jfghjkdfjkgkjdfjkjkdfhgskdjfksjdk lfjskldjfklsjdklfjklsjdklfslkdfjlksjdkfjsdjfj dlksjdlkfjklsdjklfjklsdjfkljsldfjlksjdklf</p>
          </b-col>
          <b-col sm="2" class="d-flex flex-column justify-content-center align-items-center">
            <b-row>asdasd</b-row>
            <b-row>asdasd</b-row>
          </b-col>
        </b-row>
      </div>
      <div class="footer-area my-4"></div>
    </div>
  </div>
</template>

<script>
import { BRow, BCol, BImg } from 'bootstrap-vue'
import VueQrcode from 'vue-qrcode'

export default {
  name: "chainDetails",
  components: {
    BRow,
    BCol,
    BImg,
    VueQrcode,
  },
  data() {
    return {
      chainID: this.$route.params.chain,
      chainDetails: {
        name: 'Ezic Restoran',
        address: 'Lefkosa',
        qrCode: null,
      },
    }
  },
  mounted() {
  this.getChainDetails()
  },
  methods: {
    async getChainDetails() {
      console.log('hello')
    }
  }
}
</script>

<style lang="scss" scoped>
.top-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem;
  background-color: rgb(113, 198, 67);
  margin-bottom: 0.5rem;
  .top-content {
    display: grid;
    grid-template-columns: 200px 1fr;
    align-items: center;
    .government-logo {
      width: 100px;
      height: 100px;
    }
    .ministry-name {
      display: flex;
      h2:nth-of-type(2) {
        margin-left: 12px;
      }
    }
  }
}
.body {
  .restaurant {
    font-size: 3rem;
  }
  .warning {
    border: 2px solid black;
    border-radius: 12px;
    width: 50%;
    margin: auto;
    //.qr-warning {
    //    width: 30%;
    //}
  }
}
.warning {
  border: 2px solid black;
  border-radius: 12px;
}
.footer-area {
  height: 100px;
  background-color: red;
}

.my-footer {
  width: 90%;
}
@media print {
  .root {
    height: 100vh;
  }
  .top-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.4rem;
    background-color: rgb(116, 205, 68) !important;
    -webkit-print-color-adjust: exact;
    margin-bottom: 1rem;
    .top-content {
      display: grid;
      grid-template-columns: 200px 1fr;
      align-items: center;
      .government-logo {
        width: 100px;
        height: 100px;
      }
      .ministry-name {
        display: block;
        h2:nth-of-type(2) {
          margin-left: 0;
        }
      }
    }
  }
  .body {
    .restaurant {
      font-size: 5rem;
    }
    .warning {
      border: 2px solid black;
      border-radius: 12px;
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .warning {
    border: 2px solid black;
    border-radius: 12px;
  }
  .footer-area {
    width: 100%;
    margin-top: 10px;
    height: 100px;
    background-color: rgb(156, 72, 72) !important;
    -webkit-print-color-adjust: exact;
  }
}
</style>
