<template>
    <div id="map" style="height: 90%; width: 90%; margin: 2% auto 0;border-radius: 10px; position: relative">
    </div>
</template>


<script>
import { defineComponent, ref, onMounted, computed} from "vue"
import listData from '../sample/listData.json'
import { useQuasar } from 'quasar'

import { Loader } from "@googlemaps/js-api-loader"


let map;
const additionalOptions = {};

const loader = new Loader({
  apiKey: "AIzaSyBVK0Bb0YCGhC-fmuIcl3M9PeA9pSkRTmM",
  version: "weekly"
})

const columns = [
  { name:'name', label: '이름', align: 'left', field: row => row.name },
  { name:'email', label: '이메일', align: 'left', field: 'email' },
  { name:'company', label: '회사', align: 'left', field: 'company' },
];

const colors =[
  'primary', 'amber', 'secondary', 'orange', 'accent',
  'lime', 'cyan', 'purple', 'brown', 'blue'
]

export default defineComponent({
  name: 'CountryList',

  setup() {
    const $q = useQuasar();
    const rows = ref(listData);
    const filter = ref('');

    const color = ref(colors[0])
    const index = ref(0)



    onMounted(async () => {
      const polyfill = () => {
        console.log("hi")
          const script = document.createElement("script");
          script.src = "https://polyfill.io/v3/polyfill.min.js?features=default";
          document.head.appendChild(script);
      };
      await polyfill();

      loader.load().then(() => {
        console.log("map")
        console.log(google);
        map = new google.maps.Map(
          document.getElementById("map"),
          {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          }
        );
      });


    })



    return{
      columns,
      rows,
      filter,
      index,
      classes: computed(() => '${color.value'),

    }
  }
})

</script>
