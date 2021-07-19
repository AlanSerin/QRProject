<template>
  <div>
    <div class="main-body">
      <div>
        <h5 class="texx">Created QR Codes  </h5>
        <h1 class="count" v-bind:class="loading ? 'loading' : 'no-loading'">{{ activeCount }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import headerSec from "@/components/loyout/headerSec";
import footerSec from "@/components/loyout/footerSec";

export default {
  components: {
    headerSec,
    footerSec
  },
  name: 'furtherSoft',
  data(){
    return {
      activeCount: 0,
      loading: false,
      interval: null
    }
  },
  created() {
    this.getData()
    this.interval = setInterval(()=>{
      this.getData()
    }, 5000);
  },
  methods: {
    getData: function () {
      this.loading = true
      this.$axios.$get('furthersoft/count').then((res) => {
        this.activeCount = res.Count
        this.loading = false
      });
    },
    newRegister: function () {
      this.$confetti.start();
      setTimeout( ()=>{
        this.$confetti.stop();
      }, 3000);
      setTimeout( ()=>{
        document.getElementById("confetti-canvas").remove();
      }, 8000);
    }
  },
  watch: {
    activeCount: function (newVal, oldVal) {
      if(newVal > oldVal) {
        this.newRegister();
      }
    }
  },
  destroyed() {
    clearInterval(this.interval)
  }
}
</script>


<style>
.main-body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.texx {
  text-align: center;
  opacity: .5;
  font-size: 40px;
}
.count {
  text-align: center;
  font-size: 20vw;
}
.count.loading {
  opacity: .2;
}
</style>
