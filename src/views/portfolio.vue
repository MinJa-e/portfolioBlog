<template>
  <div class="w-100" id="portfolio">
    <WhoIsMe />
    <Skills />
    <Projects />
    <FAQ />
    <Contact />
  </div>
</template>

<script>
import WhoIsMe from "../components/portfolio/WhoIsMe.vue"
import Skills from "../components/portfolio/Skills.vue"
import Projects from "../components/portfolio/Projects.vue"
import FAQ from "../components/portfolio/FAQ.vue"
import Contact from "../components/portfolio/Contact.vue"

export default {
  name: "portfolio",
  components: {
    WhoIsMe,Skills,Projects,FAQ,Contact
  },
  data() {
      return {
        visible: true
      }
  }
}
</script>

<style>
#portfolio{
   color:black;
   font-size:16px;
}
#whoIsMe{
   position: relative;
}
#whoIsMe:after {
    content : "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    /* background-image: url('https://cdn.pixabay.com/photo/2019/08/14/15/15/macbook-4405973_960_720.jpg'); 
    background-size: cover; */
    width: 100%;
    height: 100%;
    /* opacity : 0.6; */
    z-index: -1;
}
#skills{
   position: relative;
}
#skills:after {
    content : "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: lightskyblue;
    /* background-image: url('https://cdn.pixabay.com/photo/2019/08/14/15/15/macbook-4405973_960_720.jpg'); 
    background-size: cover; */
    width: 100%;
    height: 100%;
    /* opacity : 0.6; */
    z-index: -1;
}
#Projects{
   position: relative;
}
#Projects:after {
    content : "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: lightseagreen;
    /* background-image: url('https://cdn.pixabay.com/photo/2019/08/14/15/15/macbook-4405973_960_720.jpg'); 
    background-size: cover; */
    width: 100%;
    height: 100%;
    /* opacity : 0.6; */
    z-index: -1;
}
#FAQ{
   position: relative;
}
#FAQ:after {
    content : "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: lightsalmon;
    /* background-image: url('https://cdn.pixabay.com/photo/2019/08/14/15/15/macbook-4405973_960_720.jpg'); 
    background-size: cover; */
    width: 100%;
    height: 100%;
    /* opacity : 0.6; */
    z-index: -1;
}
#Contact{
   position: relative;
}
#Contact:after {
    content : "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: lightgreen;
    /* background-image: url('https://cdn.pixabay.com/photo/2019/08/14/15/15/macbook-4405973_960_720.jpg'); 
    background-size: cover; */
    width: 100%;
    height: 100%;
    /* opacity : 0.6; */
    z-index: -1;
}
</style>
