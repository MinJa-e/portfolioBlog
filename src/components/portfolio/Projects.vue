<template>
    <div class="text-center w-100 padding-section" id="Projects">
      <h1 class="mp-title" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
        Projects
      </h1>
        <b-row style="min-width:560px;max-width:894px;margin:0 auto;">
  <b-tabs content-class="mt-3" align="center" id="projectsTab">
    <b-tab title="All" active>
      <b-row>
        <!--왼-->
        <b-col>
          왼
        </b-col>
        <!--오른-->
        <b-col>
          오른
        </b-col>
      </b-row>
    </b-tab>
    <b-tab title="Long">long</b-tab>
    <b-tab title="Middle" disabled>middle테스트</b-tab>
    <b-tab title="Short" disabled>short테스트</b-tab>
  </b-tabs>
        </b-row>
    </div>
</template>

<script>
export default {
  name: "Projects"
  }
</script>

<style>
#projectsTab > div > ul{
  width: 50%;
  margin: auto;
}
</style>
