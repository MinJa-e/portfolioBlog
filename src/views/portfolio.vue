<template>
  <div class="w-100" id="portfolio">
    <div class="text-center w-100" id="whoIsMe">
      <h1 class="py-5" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
        Who is me?
      </h1>
<!-- 
  아이콘 참고용
person-fill
사람
emoji-laughing 
웃는 이모티콘
-->
        <b-row class="mb-5" style="min-width:560px;max-width:894px;margin:0 auto;">
          <!-- 문법 예시 <b-col cols="8" md="auto"> https://bootstrap-vue.org/docs/components/layout#layout-and-grid-system -->
          <b-row>
            <b-col cols="3"><img src="../assets/증명사진흰정사각형.jpg" class="rounded-circle w-100 m-auto" style="min-width:112px;max-width:168px;"></b-col>
            <b-col>
            <b-row class="pb-4 justify-content-center">
              <b-col>
                <h4 class="fw-bold"><b-icon icon="emoji-laughing" style="width: 24px; height: 24px;"></b-icon>이름</h4>
                <div></div>
                <p>이민재</p>
              </b-col>
              <b-col>
                <h4 class="fw-bold"><b-icon icon="emoji-laughing" style="width: 24px; height: 24px;"></b-icon>생년월일</h4>
                <div></div>
                <p>1995.10.14</p>
              </b-col>
              <b-col>
                <h4 class="fw-bold"><b-icon icon="emoji-laughing" style="width: 24px; height: 24px;"></b-icon>이메일</h4>
                <div></div>
                <p>leeniesta@naver.com</p>
              </b-col>
            </b-row>
            <b-row class="pb-4 justify-content-md-center">
              <b-col>
                <h4 class="fw-bold"><b-icon icon="emoji-laughing" style="width: 24px; height: 24px;"></b-icon>이름</h4>
                <div></div>
                <p>이민재</p>
              </b-col>
              <b-col>
                <h4 class="fw-bold"><b-icon icon="emoji-laughing" style="width: 24px; height: 24px;"></b-icon>생년월일</h4>
                <div></div>
                <p>1995.10.14</p>
              </b-col>
              <b-col>
                <h4 class="fw-bold"><b-icon icon="emoji-laughing" style="width: 24px; height: 24px;"></b-icon>이메일</h4>
                <div></div>
                <p>leeniesta@naver.com</p>
              </b-col>
            </b-row>
            </b-col>
          </b-row>
        </b-row>
<!-- 
이름
생년월일
카카오톡
이메일
주소
간략소개
 -->
    </div>
    <div class="text-center w-100" id="skills">
      <h1 class="py-5" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
        Skills
      </h1>
        <b-row style="min-width:560px;max-width:894px;margin:0 auto;">
          <!-- 문법 예시 <b-col cols="8" md="auto"> https://bootstrap-vue.org/docs/components/layout#layout-and-grid-system -->
          skills
        </b-row>
    </div>
    <div class="text-center w-100" id="Projects">
      <h1 class="py-5" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
        Projects
      </h1>
        <b-row style="min-width:560px;max-width:894px;margin:0 auto;">
          <!-- 문법 예시 <b-col cols="8" md="auto"> https://bootstrap-vue.org/docs/components/layout#layout-and-grid-system -->
          Projects
        </b-row>
    </div>
    <div class="text-center w-100" id="FAQ">
      <h1 class="py-5" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
        FAQ
      </h1>
        <b-row style="min-width:560px;max-width:894px;margin:0 auto;">
          <!-- 문법 예시 <b-col cols="8" md="auto"> https://bootstrap-vue.org/docs/components/layout#layout-and-grid-system -->
          FAQ
        </b-row>
    </div>
    <div class="text-center w-100" id="Contact">
      <h1 class="py-5" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
        Contact
      </h1>
        <b-row style="min-width:560px;max-width:894px;margin:0 auto;">
          <!-- 문법 예시 <b-col cols="8" md="auto"> https://bootstrap-vue.org/docs/components/layout#layout-and-grid-system -->
          Contact
        </b-row>
    </div>
<!-- 
who is me?
Skills
Projects
FAQ
contact
 -->
  </div>
</template>

<script>
export default {
}
</script>

<style>
h4{
  padding-bottom: 0.6rem;
}
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
