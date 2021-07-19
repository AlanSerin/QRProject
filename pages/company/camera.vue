<template>
  <div>
    <div class="camera-body">
      <div class="camera-header">
        <h1 class="head-text-camera">QR Kodunu Okutunuz</h1>
        <div class="d-flex align-items-center justify-content-center ml-auto">
          <span class="fas fa-times-circle close-camera" @click="$router.push('dashboard')"></span>
        </div>
      </div>
      <qrcode-stream :camera="camera" @decode="onDecode"></qrcode-stream>
      <div class="camera-footer" @click="$router.push('dashboard')">
        <span class="fas fa-edit"></span>
        <h5 class="footer-camera-text">Elle Gir</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'camera',
  data() {
    return {
      camera: '',
      result: '',
      error: ''
    }
  },
  mounted() {
    this.startCamera()
  },
  methods: {
    startCamera: function () {
      /*console.log("camera started")*/
    },
    onDecode (result) {
      this.camera = 'off'
      this.result = result;
      this.$router.push({ name: 'company-cameraResult', params: { qr: result } })
    },
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    }
  },
  destroyed() {
    this.camera = 'off'
  }
}
</script>

<style>
.camera-body {
  height: 100vh;
  overflow: hidden;
}
.camera-header {
  padding: 15px;
  background-color: #19947b;
  display: flex;
  align-items: center;
}
.head-text-camera {
  font-size: 18px;
  color: #FFFFFF;
  margin-bottom: 0!important;
}
.camera-footer {
  cursor: pointer;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #19947b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  color: #FFFFFF;
}
.footer-camera-text {
  margin-bottom: 0;
  color: #FFFFFF;
  margin-left: 10px;
}
.close-camera {
  font-size: 30px;
  color: #FFFFFF;
  transition: .2s;
  cursor: pointer;
}
.close-camera:hover {
  color: #2C3E50;
}
</style>
