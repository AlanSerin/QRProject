<template>
  <div>
    <div class="center">
      <div class="credit-card" v-bind:class="this.turn ? 'turn':''">
        <div class="flip">
          <div v-bind:style="cardColor" class="front">
            <div class="strip-bottom"></div>
            <div class="strip-top"></div>
<!--            <svg class="logo" width="40" height="40" viewbox="0 0 17.5 16.2">-->
<!--              <path d="M3.2 0l5.4 5.6L14.3 0l3.2 3v9L13 16.2V7.8l-4.4 4.1L4.5 8v8.2L0 12V3l3.2-3z" fill="white"></path>-->
<!--            </svg>-->
            <div class="investor">{{ company }}</div>
            <div class="chip">
              <div class="chip-line"></div>
              <div class="chip-line"></div>
              <div class="chip-line"></div>
              <div class="chip-line"></div>
              <div class="chip-main"></div>
            </div>
            <svg class="wave" viewBox="0 3.71 26.959 38.787" width="26.959" height="38.787" fill="white">
              <path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path>
              <path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path>
              <path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path>
            </svg>
            <div class="card-number">
              <div class="section" v-if="number">{{ number.substring(0, 4) }}</div>
              <div class="section" v-if="number">{{ number.substring(5, 9) }}</div>
              <div class="section" v-if="number">{{ number.substring(10, 14) }}</div>
              <div class="section" v-if="number">{{ number.substring(15, 19) }}</div>
            </div>
            <div class="end"><span class="end-text">exp. end:</span><span class="end-date">{{ exp }}</span></div>
            <div class="card-holder">{{ name }}</div>
            <div class="card-logo">
              <svg v-if="creditCard === 'visa'" width="65" height="40" viewBox="0 0 88 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M87.8247 51.7635C87.8247 53.5616 86.3863 55 84.5883 55H4.03627C2.23823 55 0.799805 53.5616 0.799805 51.7635V3.33645C0.799805 1.53841 2.23823 0.0999756 4.03627 0.0999756H84.5883C86.3863 0.0999756 87.8247 1.53841 87.8247 3.33645V51.7635V51.7635Z" fill="white"/>
                <path d="M33.8836 16.0426L24.1742 39.1773H17.8211L13.0264 20.7175C12.7866 19.6387 12.427 19.1592 11.5879 18.6797C10.1495 17.9605 7.75213 17.1214 5.71436 16.7618L5.83422 16.0426H16.0231C17.3417 16.0426 18.5403 16.8817 18.7801 18.44L21.2973 31.8653L27.5305 16.1625H33.8836V16.0426ZM58.6965 31.6256C58.6965 25.5123 50.3056 25.1526 50.3056 22.5155C50.3056 21.6764 51.1447 20.8374 52.8229 20.5976C53.662 20.4777 56.0594 20.3579 58.6965 21.6764L59.7753 16.7618C58.3369 16.2823 56.5388 15.683 54.1415 15.683C48.2679 15.683 44.0725 18.7996 44.0725 23.3546C44.0725 26.7109 47.0692 28.509 49.3467 29.5878C51.6242 30.6666 52.4633 31.3858 52.4633 32.4647C52.4633 34.023 50.6653 34.7422 48.8672 34.7422C45.8705 34.7422 44.0725 33.9031 42.7539 33.3037L41.6751 38.3382C43.1135 38.9376 45.6308 39.5369 48.2679 39.5369C54.5011 39.5369 58.5766 36.4203 58.6965 31.6256ZM74.2795 39.1773H79.7934L74.9987 16.0426H69.8443C68.6456 16.0426 67.6867 16.7618 67.3271 17.7208L58.3369 39.1773H64.5701L65.7687 35.7011H73.4404L74.2795 39.1773ZM67.5668 31.0262L70.6834 22.3956L72.4814 31.0262H67.5668ZM42.3943 16.0426L37.4797 39.1773H31.4862L36.4008 16.0426H42.3943Z" fill="#1A1F71"/>
              </svg>
              <svg v-if="creditCard === 'mastercard'" width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.7735 9.51666H22.1992V30.482H33.7735V9.51666Z" fill="#FF5F00"/>
                <path d="M22.9314 20C22.9296 17.9809 23.3835 15.9878 24.2588 14.1717C25.1341 12.3555 26.4079 10.7639 27.9836 9.51735C26.0323 7.9713 23.6888 7.00983 21.2209 6.74284C18.7531 6.47585 16.2605 6.9141 14.0281 8.00753C11.7957 9.10095 9.91347 10.8054 8.59666 12.9261C7.27985 15.0468 6.58154 17.4982 6.58154 20C6.58154 22.5018 7.27985 24.9532 8.59666 27.0739C9.91347 29.1946 11.7957 30.899 14.0281 31.9925C16.2605 33.0859 18.7531 33.5241 21.2209 33.2572C23.6888 32.9902 26.0323 32.0287 27.9836 30.4826C26.4079 29.236 25.1342 27.6444 24.2588 25.8283C23.3835 24.0122 22.9296 22.0191 22.9314 20V20Z" fill="#EB001B"/>
                <path d="M49.3878 20C49.3879 22.5018 48.6896 24.9531 47.3729 27.0738C46.0562 29.1945 44.174 30.899 41.9417 31.9924C39.7093 33.0859 37.2167 33.5241 34.7489 33.2572C32.2811 32.9902 29.9376 32.0287 27.9863 30.4826C29.5607 29.2348 30.8335 27.6429 31.7086 25.8271C32.5838 24.0112 33.0385 22.0188 33.0385 20C33.0385 17.9812 32.5838 15.9888 31.7086 14.1729C30.8335 12.3571 29.5607 10.7652 27.9863 9.51735C29.9376 7.97129 32.2811 7.00982 34.7489 6.74283C37.2167 6.47585 39.7093 6.91412 41.9417 8.00756C44.174 9.101 46.0562 10.8055 47.3729 12.9262C48.6896 15.0469 49.3879 17.4982 49.3878 20V20Z" fill="#F79E1B"/>
                <path d="M48.1254 28.2617V27.8325H48.2971V27.745H47.8599V27.8325H48.0316V28.2617H48.1254ZM48.9744 28.2617V27.7442H48.8404L48.6862 28.1002L48.532 27.7442H48.3979V28.2617H48.4925V27.8713L48.6371 28.2079H48.7353L48.8798 27.8705V28.2617H48.9744Z" fill="#F79E1B"/>
              </svg>
              <svg v-if="creditCard==='amex'" width="70" height="54" viewBox="0 0 70 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.4002 49.7L56.8002 46.8L54.1002 49.7H48.8002H37.4002V36.2H32.1002L38.7002 21.1H45.1002L47.4002 26.3V21.1H55.4002L56.8002 25L58.2002 21.1H64.3002V18.8C64.3002 17.4 63.2002 16.3 61.8002 16.3H8.2002C6.8002 16.3 5.7002 17.4 5.7002 18.8V51.3C5.7002 52.7 6.8002 53.8 8.2002 53.8H61.8002C63.2002 53.8 64.3002 52.7 64.3002 51.3V49.7H59.4002Z" fill="#0071CE"/>
                <path d="M60.1001 48.1H64.3001L58.8001 42.2L64.3001 36.4H60.2001L56.7001 40.2L53.3001 36.4H49.1001L54.7001 42.3L49.1001 48.1H53.2001L56.7001 44.3L60.1001 48.1Z" fill="#0071CE"/>
                <path d="M42.4002 45.4V43.6H49.0002V40.9H42.4002V39.1H49.1002V36.4H39.2002V48.1H49.1002V45.4H42.4002Z" fill="#0071CE"/>
                <path d="M61.2001 34.7H64.2001V22.9L59.4001 23L56.8001 30.3L54.1001 23H49.1001V34.7H52.3001V26.5L55.3001 34.7H58.1001L61.2001 26.5V34.7Z" fill="#0071CE"/>
                <path d="M44.0002 22.9999H39.9002L34.7002 34.6999H38.2002L39.2002 32.3999H44.6002L45.6002 34.6999H49.2002L44.0002 22.9999ZM40.3002 29.6999L41.9002 25.8999L43.5002 29.6999H40.3002Z" fill="#0071CE"/>
                <path d="M61.4004 41.9L64.3004 45.0999V38.7L61.4004 41.9Z" fill="#0071CE"/>
              </svg>
              <svg v-if="creditCard === 'discover'" width="69" height="43" viewBox="0 0 69 43" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="69" height="43" fill="url(#pattern0)"/>
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0" transform="translate(0 -0.00295036) scale(0.00746269 0.011975)"/>
                  </pattern>
                  <image id="image0" width="134" height="84" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
              <svg v-if="creditCard === 'diners'" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8073 4.16987C12.3958 4.16987 5.54687 11.0123 5.54687 19.4739C5.54687 27.9094 12.3958 34.7779 20.8073 34.7779C29.2448 34.7779 36.0677 27.9094 36.0677 19.4739C36.0677 11.0123 29.2448 4.16987 20.8073 4.16987V4.16987ZM17.3437 28.51C13.724 27.1259 11.1458 23.6002 11.1458 19.4739C11.1458 15.3475 13.724 11.8219 17.3437 10.4116V28.51ZM24.2708 28.5362V10.4116C27.8906 11.8219 30.4687 15.3475 30.4687 19.4739C30.4687 23.6002 27.8906 27.1259 24.2708 28.5362V28.5362ZM45.8333 0H4.16667C1.86632 0 0 1.87165 0 4.17857V34.8214C0 37.1283 1.86632 39 4.16667 39H45.8333C48.1337 39 50 37.1283 50 34.8214V4.17857C50 1.87165 48.1337 0 45.8333 0ZM28.6198 36.2143H20.7812C11.5625 36.2143 3.95833 28.7712 3.95833 19.6567C3.95833 9.68036 11.5625 2.78571 20.7812 2.78571H28.6198C37.7344 2.78571 46.0417 9.68036 46.0417 19.6567C46.0417 28.7712 37.7344 36.2143 28.6198 36.2143Z" fill="#0078BD"/>
              </svg>
              <svg v-if="creditCard === 'jcb'"
                xmlns="http://www.w3.org/2000/svg"
                height="50"
                width="60"
                xml:space="preserve"
                viewBox="0 0 300.00001 231.511"
                y="0px"
                x="0px"
                id="レイヤー_1"
                version="1.1"><metadata
     id="metadata6424"><rdf:RDF><cc:Work
         rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
                rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs
                id="defs6422" /><style
                id="style6319"
                type="text/css">
	.st0{fill:#FFFFFF;}
  .st1{fill:url(#SVGID_1_);}
  .st2{fill:url(#SVGID_2_);}
  .st3{fill:url(#SVGID_3_);}
  .st4{fill:url(#SVGID_4_);}
  .st5{fill:url(#SVGID_5_);}
</style><g
                transform="translate(-9.4000001,96.810998)"
                id="g6321"><g
       transform="matrix(1.8215159,0,0,1.8215159,-8.5437653,-109.83667)"
       id="g6323"><path
         style="fill:#ffffff"
         id="path6325"
         d="m 174,108.3 c 0,14 -11.4,25.4 -25.4,25.4 l -138.2,0 0,-100.6 c 0,-14 11.4,-25.4 25.4,-25.4 l 138.2,0 0,100.6 z"
         class="st0" /><g
                id="g6327"><linearGradient
           gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)"
           y2="81.398598"
           x2="157.3299"
           y1="81.398598"
           x1="117.3856"
           gradientUnits="userSpaceOnUse"
           id="SVGID_1_"><stop
             id="stop6330"
             style="stop-color:#007940"
             offset="0" /><stop
                id="stop6332"
                style="stop-color:#00873F"
                offset="0.2285" /><stop
                id="stop6334"
                style="stop-color:#40A737"
                offset="0.7433" /><stop
                id="stop6336"
                style="stop-color:#5CB531"
                offset="1" /></linearGradient><path
                style="fill:url(#SVGID_1_)"
                id="path6338"
                d="m 129,82.5 10.5,0 c 0.3,0 1,-0.1 1.3,-0.1 2,-0.4 3.7,-2.2 3.7,-4.7 0,-2.4 -1.7,-4.2 -3.7,-4.7 -0.3,-0.1 -0.9,-0.1 -1.3,-0.1 l -10.5,0 0,9.6 z"
                class="st1" /><linearGradient
                gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)"
                y2="75.171402"
                x2="157.3318"
                y1="75.171402"
                x1="117.3844"
                gradientUnits="userSpaceOnUse"
                id="SVGID_2_"><stop
             id="stop6341"
             style="stop-color:#007940"
             offset="0" /><stop
                id="stop6343"
                style="stop-color:#00873F"
                offset="0.2285" /><stop
                id="stop6345"
                style="stop-color:#40A737"
                offset="0.7433" /><stop
                id="stop6347"
                style="stop-color:#5CB531"
                offset="1" /></linearGradient><path
                style="fill:url(#SVGID_2_)"
                id="path6349"
                d="m 138.3,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,18.9 25.7,0 c 0.6,0 1.3,0 1.8,0.1 5.8,0.3 10.1,3.3 10.1,8.5 0,4.1 -2.9,7.6 -8.3,8.3 l 0,0.2 c 5.9,0.4 10.4,3.7 10.4,8.8 0,5.5 -5,9.1 -11.6,9.1 l -28.2,0 0,37 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-90.9 -26.6,0 z"
                class="st2" /><linearGradient
                gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)"
                y2="68.399101"
                x2="157.33051"
                y1="68.399101"
                x1="117.3846"
                gradientUnits="userSpaceOnUse"
                id="SVGID_3_"><stop
             id="stop6352"
             style="stop-color:#007940"
             offset="0" /><stop
                id="stop6354"
                style="stop-color:#00873F"
                offset="0.2285" /><stop
                id="stop6356"
                style="stop-color:#40A737"
                offset="0.7433" /><stop
                id="stop6358"
                style="stop-color:#5CB531"
                offset="1" /></linearGradient><path
                style="fill:url(#SVGID_3_)"
                id="path6360"
                d="m 143.2,63.1 c 0,-2.4 -1.7,-4 -3.7,-4.3 -0.2,0 -0.7,-0.1 -1,-0.1 l -9.5,0 0,8.8 9.5,0 c 0.3,0 0.9,0 1,-0.1 2,-0.3 3.7,-1.9 3.7,-4.3 z"
                class="st3" /></g><linearGradient
                gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)"
                y2="75.171402"
                x2="68.522102"
                y1="75.171402"
                x1="27.9594"
                gradientUnits="userSpaceOnUse"
                id="SVGID_4_"><stop
           id="stop6363"
           style="stop-color:#1F286F"
           offset="0" /><stop
                id="stop6365"
                style="stop-color:#004E94"
                offset="0.4751" /><stop
                id="stop6367"
                style="stop-color:#0066B1"
                offset="0.8261" /><stop
                id="stop6369"
                style="stop-color:#006FBC"
                offset="1" /></linearGradient><path
                style="fill:url(#SVGID_4_)"
                id="path6371"
                d="m 37.7,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,44.9 c 5.1,2.5 10.4,4.1 15.7,4.1 6.3,0 9.7,-3.8 9.7,-9 l 0,-21.2 15.6,0 0,21.1 c 0,8.2 -5.1,14.9 -22.4,14.9 -10.5,0 -18.7,-2.3 -18.7,-2.3 l 0,38.3 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-90.8 -26.6,0 z"
                class="st4" /><linearGradient
                gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)"
                y2="75.171402"
                x2="111.8553"
                y1="75.171402"
                x1="72.459503"
                gradientUnits="userSpaceOnUse"
                id="SVGID_5_"><stop
           id="stop6374"
           style="stop-color:#6C2C2F"
           offset="0" /><stop
                id="stop6376"
                style="stop-color:#882730"
                offset="0.1735" /><stop
                id="stop6378"
                style="stop-color:#BE1833"
                offset="0.5731" /><stop
                id="stop6380"
                style="stop-color:#DC0436"
                offset="0.8585" /><stop
                id="stop6382"
                style="stop-color:#E60039"
                offset="1" /></linearGradient><path
                style="fill:url(#SVGID_5_)"
                id="path6384"
                d="m 88,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,23.8 c 4.6,-3.9 12.6,-6.4 25.5,-5.8 6.9,0.3 14.3,2.2 14.3,2.2 l 0,7.7 c -3.7,-1.9 -8.1,-3.6 -13.8,-4 -9.8,-0.7 -15.7,4.1 -15.7,12.5 0,8.5 5.9,13.3 15.7,12.5 5.7,-0.4 10.1,-2.2 13.8,-4 l 0,7.7 c 0,0 -7.3,1.9 -14.3,2.2 -12.9,0.6 -20.9,-1.9 -25.5,-5.8 l 0,42 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-91 -26.7,0 z"
                class="st5" /></g><g
                id="g6386" /></g></svg>
            </div>
          </div>
          <div class="back">
            <div class="strip-black"></div>
            <div class="ccv">
              <label>ccv</label>
              <div class="mt-n3">{{ ccv }}</div>
            </div>
            <div class="terms">
              <p>Lütfen kart bilgilerinizi Başka inslanlarla paylaşmayınız.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="js">

export default {
  props: ['name', 'number', 'exp', 'ccv', 'company'],
  data() {
    return {
      creditCard: '',
      cardColor: {
        'background-image': 'linear-gradient(to right, #111, #555)',
      },
      turn: false
    }
  },
  methods: {
    checkTurn: function () {
      setTimeout(()=>{
        this.turn = false
      }, 4000)
    },
    checkCardType() {

      // Visa
      let re = new RegExp("^4")
      if (this.number.match(re) != null) {
        console.log('visa')
        this.cardColor["background-image"] = 'linear-gradient(to right, #0070ba, #0584dc)'
        this.creditCard = 'visa'
        return
      }

      // Mastercard
      // Updated for Mastercard 2017 BINs expansion
      re = new RegExp("^(5$|5[1-5])")
      if (this.number.match(re) != null) {
        console.log('mastercard')
        this.cardColor["background-image"] = 'linear-gradient(to right, #111, #555)'
        this.creditCard = 'mastercard'
        return
      }

      // AMEX
      re = new RegExp("^3[47]")
      if (this.number.match(re) != null) {
        console.log('amex')
        this.creditCard = 'amex'
        this.cardColor["background-image"] = 'linear-gradient(to right, #C0C0C0, #d3d3d3)'
        return
      }

      // Discover
      re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
      if (this.number.match(re) != null) {
        console.log('discover')
        this.cardColor["background-image"] = 'linear-gradient(to right, #7BC5DE, #8cdcf7)'
        this.creditCard = 'discover'
        return
      }

      // Diners
      re = new RegExp("^36")
      if (this.number.match(re) != null) {
        console.log('diners')
        this.cardColor["background-image"] = 'linear-gradient(to right, #111, #555)'
        this.creditCard = 'diners'
        return
      }

      // JCB
      re = new RegExp("^35(2[89]|[3-8][0-9])")
      if (this.number.match(re) != null) {
        console.log('jcb')
        this.cardColor["background-image"] = 'linear-gradient(to right, #d4af37, #e8bd3c)'
        this.creditCard = 'jcb'
        return
      }

      // Visa Electron
      re = new RegExp("^(4026|417500|4508|4844|491(3|7))")
      if (this.number.match(re) != null) {
        console.log('electron')
        this.cardColor["background-image"] = 'linear-gradient(to right, #0070ba, #0584dc)'
        this.creditCard = 'visa'
        return
      }

        this.cardColor["background-image"] = 'linear-gradient(to right, #111, #555)'
        this.creditCard = ''
      return
    },
  },
  watch: {
    ccv: function () {
      if(this.ccv) {
        if(this.ccv.length > 2) {
          this.turn = true
          this.checkTurn();
        } else {
          this.turn = true
        }
      }
    },
    number: function() {
      this.checkCardType()
    }
  }
}


</script>

<style scoped>

.right .strip-top {
  width: calc(50vw + 90px);
  transform: skewX(20deg) translateX(160px);
}
.right .strip-bottom {
  width: calc(50vw + 40px);
  transform: skewX(-15deg) translateX(90px);
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.credit-card {
  width: 400px;
  height: 250px;
}
.flip {
  width: inherit;
  height: inherit;
  transition: 0.7s;
  transform-style: preserve-3d;
  -webkit-animation: flip 2.5s ease;
  animation: flip 2.5s ease;
}
.front,
.back {
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 15px;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0,0,0,0.3);
  box-shadow: 0 1px 10px 1px rgba(0,0,0,0.3);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /*background-image: linear-gradient(to right, #111, #555);*/
  overflow: hidden;
}
.front {
  transform: translateZ(0);
}
/*.strip-bottom,*/
/*.strip-top {*/
/*  position: absolute;*/
/*  right: 0;*/
/*  height: inherit;*/
/*  background-image: linear-gradient(to bottom, #ff6767, #ff4545);*/
/*  box-shadow: 0 0 10px 0px rgba(0,0,0,0.5);*/
/*}*/
.strip-bottom {
  width: 200px;
  transform: skewX(-15deg) translateX(50px);
}
.strip-top {
  width: 180px;
  transform: skewX(20deg) translateX(50px);
}
.logo {
  position: absolute;
  top: 30px;
  right: 25px;
}
.investor {
  position: relative;
  top: 30px;
  left: 25px;
  text-transform: uppercase;
}
.chip {
  position: relative;
  top: 60px;
  left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 40px;
  border-radius: 5px;
  background-image: linear-gradient(to bottom left, #ffecc7, #d0b978);
  overflow: hidden;
}
.chip .chip-line {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #333;
}
.chip .chip-line:nth-child(1) {
  top: 13px;
}
.chip .chip-line:nth-child(2) {
  top: 20px;
}
.chip .chip-line:nth-child(3) {
  top: 28px;
}
.chip .chip-line:nth-child(4) {
  left: 25px;
  width: 1px;
  height: 50px;
}
.chip .chip-main {
  width: 20px;
  height: 25px;
  border: 1px solid #333;
  border-radius: 3px;
  background-image: linear-gradient(to bottom left, #efdbab, #e1cb94);
  z-index: 1;
}
.wave {
  position: relative;
  top: 20px;
  left: 100px;
}
.card-number {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 25px 10px;
  font-size: 23px;
  font-family: 'cc font', monospace;
}
.end {
  margin-left: 25px;
  text-transform: uppercase;
  font-family: 'cc font', monospace;
}
.end .end-text {
  font-size: 9px;
  color: rgba(255,255,255,0.8);
}
.card-holder {
  margin: 10px 25px;
  text-transform: uppercase;
  font-family: 'cc font', monospace;
}
.card-logo {
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
}
.credit-card {
  perspective: 1000;
}
.credit-card:hover .flip {
  transform: rotateY(180deg);
}
.turn .flip {
  transform: rotateY(180deg);
}
.back {
  transform: rotateY(180deg) translateZ(0);
  background: #9e9e9e;
}
.back .strip-black {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 50px;
  background: #000;
}
.back .ccv {
  position: absolute;
  top: 110px;
  left: 0;
  right: 0;
  height: 36px;
  width: 90%;
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;
  text-align: right;
  letter-spacing: 1px;
  color: #000;
  background: #fff;
}
.back .ccv label {
  display: block;
  margin: -30px 0 15px;
  font-size: 10px;
  text-transform: uppercase;
  color: #fff;
}
.back .terms {
  position: absolute;
  top: 150px;
  padding: 20px;
  font-size: 10px;
  text-align: justify;
}
@font-face {
  font-family: 'cc font';
  src: url("data:application/font-woff2;charset=utf-8;base64,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") format("woff2");
  font-weight: normal;
  font-style: normal;
}
@-webkit-keyframes flip {
  0%, 100% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
}
@keyframes flip {
  0%, 100% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
}

</style>
