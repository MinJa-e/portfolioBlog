<template>
<!--나중에 프로젝트 이미지 및 설명은 데이터바인딩으로 넣어서 함수적으로 노출되게 하기-->
    <div class="text-center w-100 padding-section" id="Projects">
      <h1 class="mp-title" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
        Projects
      </h1>
        <b-row style="min-width:560px;max-width:894px;margin:0 auto;">
  <b-tabs content-class="mt-3" align="center" id="projectsTab">
    <b-tab title="All" active>
      <b-row>
        <!--왼-->
        <b-col cols="5">
           <img src="@/assets/projectImage/a.jpg" class="projectImage"/>
        </b-col>
        <!--오른-->
        <b-col>
          <b-row>
            <b-col cols="2">
          <b>소개</b>
            </b-col>
            <b-col>
              <p>내가 생각하는 나의 성격 검사하기, 친구에게 나의 성격 평가 부탁하기, 나의 성격에 대한 나와 친구의 검사 결과 비교하기</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2">
          <b>사용기술</b>
            </b-col>
            <b-col>
              <p>Vue, Spring</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2">
          <b>담당업무</b>
            </b-col>
            <b-col>
              <p> RESTful API, Axios</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2">
          <b>개발기간</b>
            </b-col>
            <b-col>
              <p>2021.12.10~2021.12.11 ( 1일 소요 )</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2">
          <b>개발인원</b>
            </b-col>
            <b-col>
              <p>1인</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2">
          <b>깃허브</b>
            </b-col>
            <b-col>
              <p>https://github.com/codeInJ</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2">
          <b>주소</b>
            </b-col>
            <b-col>
              <p>http://leeniesta.cafe24.com/</p>
            </b-col>
          </b-row>
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
.projectImage{
  width: 100%;
}
#projectsTab > div > ul{
  width: 50%;
  margin: auto;
}
</style>
