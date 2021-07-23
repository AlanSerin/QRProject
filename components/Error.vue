<template>
  <main>

    <!-- error area start -->
    <section class="error__area pt-105 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2">
            <div class="error__wrapper text-center">
              <div class="error__thumb mb-65">
                <img src="~/assets/img/error/error.png" alt="AdaPass">
              </div>
              <div class="error__content">
                <h3>Page not found</h3>
                <p>Starkers pardon you knees up is Elizabeth geeza Why, quain standard  guvnor gosh cras brilliant.</p>
                <nuxt-link to="/" class="w-btn w-btn-11">Go Home</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- error area end -->
  </main>
</template>

<script>
export default {
  name: "Error"
}
</script>

<style scoped>

</style>
