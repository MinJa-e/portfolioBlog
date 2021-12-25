<template>
  <div id="app">
    <header />
    <div id="content" class="content">

      <router-view></router-view>
    
    </div>
    <footer />
  </div>
</template>

<script>
import header from "./components/layout/layoutHeader.vue"
import footer from "./components/layout/layoutFooter.vue"

export default {
  name: "App",
  components: {
    header,footer
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@300;900&display=swap');

html{
  font-size: 14px;
}

p{
  font-size: 16px;;
}

#app{
  font-family: 'Noto Sans KR', sans-serif;
}

#home {
   position: relative;
}
#home:after {
    content : "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('https://cdn.pixabay.com/photo/2019/08/14/15/15/macbook-4405973_960_720.jpg'); 
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity : 0.6;
    z-index: -1;
}
</style>
