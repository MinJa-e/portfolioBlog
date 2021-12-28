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
import Header from "./components/layout/Header.vue"
import Footer from "./components/layout/footerStatic.vue"

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
  font-size: 16px;
  margin-bottom: 0.5rem!important;
}

#app{
  font-family: 'Noto Sans KR'!important;
  min-width: 746px;;
}
pre{
  margin: 0!important;
  white-space: pre-wrap;
}
</style>
