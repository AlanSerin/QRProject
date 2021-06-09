<template>
  <div class="container-fluid">
    <h1>BILGILENDIRME EKRANI</h1>
    <p>Bilgi bilgi bilgi bilgi bilgi bilgi bilgi bilgi bilgi bilgi bilgi bilgi bilgi</p>
    <b-button block @click="userForward">Ilerle</b-button>
  </div>
</template>

<script>
import {BButton} from 'bootstrap-vue'

export default {
  name: "chainInfo",
  components: {
    BButton,
  },
  data() {
    return {
      chainID: this.$route.params.chain.toString(),
    }
  },
  methods: {
    userForward () {
      this.$router.push({name: 'chainDetails', params: {chain: this.chainID}})
    }
  },
}
</script>

<style scoped>

</style>
