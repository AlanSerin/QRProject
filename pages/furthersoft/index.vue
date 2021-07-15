<template>
  <div>
    <headerSec></headerSec>
    <div class="main-body">
      <div>
        <h1 class="texx">Active User Size</h1>
        <h1 class="counter">{{ activeCount }}</h1>
      </div>
    </div>
    <footerSec></footerSec>
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
      activeCount: 25,
    }
  },
  created() {
    this.getData()
    setInterval(()=>{
      this.getData()
    }, 5000);
  },
  methods: {
    getData: function () {
      this.$axios.$get('/furthersoft/count').then((res) => {
        console.log(res)
        if(res.Count) {
          this.activeCount = res.Count
        }
      });
    },
    newRegister: function () {
      this.$confetti.start();
      setTimeout( ()=>{
        this.$confetti.stop()
      }, 3000);
    }
  },
  watch: {
    activeCount: function (newVal, oldVal) {
      if(newVal > oldVal) {
        this.newRegister();
      }
    }
  }
}
</script>


<style>
.main-body {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.texx {
  text-align: center;
  opacity: .5;
}
.counter {
  text-align: center;
  font-size: 250px;
}
</style>
