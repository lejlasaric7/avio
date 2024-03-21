<template>
 
    <div id=slideset1>
  <div class="mySlides">
    <img src="../assets/image1.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <img src="../assets/image2.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <img src="../assets/image3.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <img src="../assets/image4.jpg" style="width:100%">
  </div>
</div>
  
  <div class="news">
Lejla
  </div>



</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
#slideset1 {
  height: 750px; 
  position: relative; 
  margin: 0px;
  overflow: hidden;}

#slideset1 > * {visibility: hidden; position: absolute;
  top: 0; left: 0; animation: 12s autoplay1 infinite}

  @keyframes autoplay1 {
  0% {visibility: visible}
  33.33% {visibility: hidden}
}  

#slideset1 > *:nth-child(1) {animation-delay: 0s}
#slideset1 > *:nth-child(2) {animation-delay: 4s}
#slideset1 > *:nth-child(3) {animation-delay: 8s}
#slideset1 > *:nth-child(4) {animation-delay: 12s}

.mySlides img {
  width: 100%;
  height: 100%; 
}

.news{
  background-color:burlywood ;
  margin-top: 0px;
  height: 50px;
}
</style>