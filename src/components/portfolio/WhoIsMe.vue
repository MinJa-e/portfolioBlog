<template>

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
        <b-row style="min-width:560px;max-width:894px;margin:0 auto 60px auto ;">
          <!-- 문법 예시 <b-col cols="8" md="auto"> https://bootstrap-vue.org/docs/components/layout#layout-and-grid-system -->
          <b-row style="margin-bottom: 12px!important;"><!--사진12 40-->
            <b-col cols="3"><img src="@/assets/증명사진흰정사각형.jpg" class="rounded-circle w-100 m-auto" style="
            border: 2.9px solid hsl(0deg 0% 0% / 30%);box-shadow: rgb(0 0 0 / 65%) 0px 0px 16px 0px;min-width:112px;max-width:168px;"></b-col>
            <b-col>
            <b-row class="pb-4 justify-content-center"><!--프로필 첫째 줄-->
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
            </b-row>
            <b-row class="pb-4 justify-content-md-center"><!--프로필 둘째 줄-->
              <b-col>
                <h4 class="fw-bold"><b-icon icon="emoji-laughing" style="width: 24px; height: 24px;"></b-icon>이메일</h4>
                <div></div>
                <p>leeniesta@naver.com</p>
              </b-col>
              <b-col>
                <h4 class="fw-bold"><b-icon icon="emoji-laughing" style="width: 24px; height: 24px;"></b-icon>거주지</h4>
                <div></div>
                <p>부산광역시 해운대구 반여1동</p>
              </b-col>
              <!-- <b-col>
                <h4 class="fw-bold"><b-icon icon="emoji-laughing" style="width: 24px; height: 24px;"></b-icon>생년월일</h4>
                <div></div>
                <p>1995.10.14</p>
              </b-col>
              <b-col>
                <h4 class="fw-bold"><b-icon icon="emoji-laughing" style="width: 24px; height: 24px;"></b-icon>이메일</h4>
                <div></div>
                <p>leeniesta@naver.com</p>
              </b-col> -->
            </b-row>
            </b-col>
          </b-row>
          <b-row><!--간략소개-->
  <!-- Using value -->
  <b-button v-b-toggle="'collapse-2'">간략소개</b-button>

  <!-- Element to collapse -->
  <b-collapse id="collapse-2">
    <b-card>
<p class="mb-0">
안녕하세요!<br>
헬로!
</p>
      </b-card>
  </b-collapse>
          </b-row>
        </b-row>
    </div>
</template>


<script>
export default {
  name: "a"
  }
</script>


<style>
</style>
