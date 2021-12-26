<template>
  <div id="app">
    <Header />
    <div id="content" class="content">

      <router-view></router-view>
    
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/layoutHeader.vue"
import Footer from "./components/layout/layoutFooter.vue"

export default {
  name: "App",
  components: {
    Header,Footer
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@300;400;700;900&display=swap');

html{
  font-size: 14px;
}

p{
  font-size: 16px;;
}

#app{
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
