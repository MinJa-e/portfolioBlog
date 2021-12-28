<template>
<!--나중에 프로젝트 이미지 및 설명은 데이터바인딩으로 넣어서 함수적으로 노출되게 하기-->
    <div class="text-center w-100 padding-section" id="Projects">
      <h1 class="mp-title" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
        Projects
      </h1>
        <b-row style="min-width:560px;max-width:894px;margin:0 auto;">
  <b-tabs content-class="mt-3" align="center" id="projectsTab">
    <b-tab title="All" active>
      <Long />
      <Middle />
      <Short />
    </b-tab>
    <b-tab title="Long">
      <Long />
    </b-tab>
    <b-tab title="Middle">
      <Middle />
    </b-tab><!--disabled 로 비활성화 가능-->
    <b-tab title="Short">
      <Short />
    </b-tab>
  </b-tabs>
        </b-row>
    </div>
</template>

<script>
import Long from "../ProjectElements/Long.vue"
import Middle from "../ProjectElements/Middle.vue"
import Short from "../ProjectElements/Short.vue"

export default {
  name: "Projects",
  components: {
    Long,Middle,Short
  },
  }
</script>

<style>
.projectImage{
  width: 100%;
  box-shadow: rgb(0 0 0 / 55%) 5px 5px 20px 0px;
}
#projectsTab > div > ul{
  width: 50%;
  margin: auto;
  border-bottom:none;
}
#projectsTab > div > ul > li > .nav-link{
  color:black;
  border:1px solid transparent!important;
  border-radius:0.5rem;
}
#projectsTab > div > ul > li > .nav-link:hover{
  color:white!important;
  border:1px solid white!important;
  border-radius:0.5rem;
}
#projectsTab > div > ul > li > .nav-link.active{
  color:white!important;
  background:red!important;
  border:1px solid white!important;
  border-radius:0.5rem;
}
#projectsTab > div > ul > li > .nav-link.active:hover{
  border:1px solid white!important;
  border-radius:0.5rem;
}
.tab-pane > div{
  padding-top: 32px!important;
}

</style>
