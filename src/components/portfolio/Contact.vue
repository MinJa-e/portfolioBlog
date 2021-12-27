<template>
    <div class="text-center w-100 padding-section" id="Contact">
      <h1 class="mp-title" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
        Contact
      </h1>
        <b-row class="justify-content-center" style="min-width:0px;max-width:400px;margin:0 auto;">
          <!--1-->
          <b-row class="justify-content-center">
          <b-col cols="auto">
            <a href="https://www.instagram.com/minjae._.95/">
            <b-icon icon="instagram" class="contactIcon"></b-icon>
            </a>
          </b-col>
          <b-col cols="auto">
            <h4>- @minjae._.95</h4>
          </b-col>
          </b-row>
          <!--2-->
          <b-row class="justify-content-center">
          <b-col cols="auto">
            <img src="@/assets/headerContact/kakao.png" class="contactIcon"/>
          </b-col>
          <b-col cols="auto">
            <h4>- @minjae._.95</h4>
          </b-col>
          </b-row>
          <!--3-->
          <b-row class="justify-content-center">
          <b-col cols="auto">
            <b-icon icon="github" class="contactIcon"></b-icon>
          </b-col>
          <b-col cols="auto">
            <h4>- @minjae._.95</h4>
          </b-col>
          </b-row>
          <!--4-->
          <b-row class="justify-content-center">
          <b-col cols="auto">
            <img src="@/assets/headerContact/tistory.svg" class="contactIcon"/>
          </b-col>
          <b-col cols="auto">
            <h4>- @minjae._.95</h4>
          </b-col>
          </b-row>
        </b-row>
    </div>
</template>

<script>
export default {
  name: "Contact"
  }
</script>

<style>
.contactIcon{
  color:black;
  width: 32px!important;
  height: 32px!important;
  margin-left: 0px!important;
  margin-right: 0px!important;
  margin-top: 0px!important;
  margin-bottom: 8px!important;
  padding: 0px!important;
}
</style>
