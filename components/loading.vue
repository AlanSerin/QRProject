<template>
  <div>
    <div v-if="status" class="bg-loading">
      <div>
        <img style="width: 20vh" class="mb-50" src="../static/company/aplogo.png" alt="AdaPass"/>
        <div class="d-flex align-items-center justify-content-center">
          <b-spinner large></b-spinner>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading-comp',
  props: ['status'],
}
</script>

<style>
.bg-loading {
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #FFFFFF!important;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
