<template>
  <div style="width: 100%; overflow-x: hidden">
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/* floating label */

.input-holder {
  background-color: #DFE2E5;
  padding: 16px 20px 10px;
  border-radius: 10px;
  margin-bottom: 12px;
}
.floating-label {
  width: 100%;
  position:relative;
  margin-bottom: 0!important;
}
.floating-label input {
  background-color: transparent!important;
  color: #2C3E50;
  font-weight: bold;
  font-size: 18px;
  width:100%;
  padding:10px 0px;
  margin-top: 0;
  border:none;
  outline:none;
  border-radius: 0!important;
}
.floating-label input::placeholder{
  opacity:0!important;
}
.floating-label span{
  position:absolute;
  top: -5px;
  left:0;
  transform:translateY(10px);
  font-size: 18px;
  font-weight: bold;
  transition-duration:300ms;
  cursor: text;
  user-select: none;
}

.floating-label:focus-within > span, .floating-label input:not(:placeholder-shown) + span {
  top: 0;
  color: #85909A;
  transform:translateY(-16px);
  font-size: 12px;
  font-weight: unset;
}
.floating-label input:focus + span {
  color: #19947b!important;
}
.floating-label input {
  border-right: none!important;
  border-left: none!important;
  border-top: none!important;
  border-bottom: 1px solid #DFE2E5;
}
.floating-label input:focus {
  box-shadow: none!important;
  border-right: none!important;
  border-left: none!important;
  border-top: none!important;
  border-bottom: 1px solid #19947b!important;
}

/* floating label end */


/* search-select */

.vs__dropdown-toggle {
  border: none!important;
}

.vs__search, .vs__search {
  font-weight: bold;
  font-size: 18px!important;
  color: #2C3E50;
  border: none!important;
  margin: 0!important;
}
.vs__search, .vs__search::placeholder {
  font-weight: bold;
  font-size: 18px!important;
  color: #615E7F!important;
}
.vs__search, .vs__search:focus {
  font-weight: bold;
  font-size: 18px;
  color: #85909A;
  margin: 0!important;
  padding: 0!important;
  height: 30px!important;
}
.vs__selected-options {
  font-weight: bold;
  font-size: 18px;
  color: #85909A;
}
.vs__selected {
  margin: 0!important;
  padding-left: 0!important;
}
.vs__search {
  font-weight: bold;
  font-size: 18px;
  color: #2C3E50;
  border: none!important;
  padding-left: 0!important;
}
.vs__dropdown-menu {
  color: #19947b!important;
}

/* search-select end */


/* adapas button style */

.buttonadps {
  background-color: #19947b!important;
  padding: 10px!important;
  border-radius: 10px!important;
  border: 1px solid #19947b!important;
}
.buttonadps:focus {
  padding: 10px!important;
}
.buttonadps:active {
  padding: 10px!important;
}


.buttonadps-sec {
  background-color: #2C3E50!important;
  padding: 10px!important;
  border-radius: 10px!important;
  border: 1px solid #2C3E50!important;
  font-weight: bold;
  font-size: 18px;
}
.buttonadps-sec:focus {
  padding: 10px!important;
}
.buttonadps-sec:active {
  padding: 10px!important;
}

/* adapas button style end */
</style>
