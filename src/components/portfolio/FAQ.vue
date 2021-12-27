<template>
    <div class="text-center w-100 padding-section" id="FAQ">
      <h1 class="mp-title" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
        FAQ
      </h1>
        <b-row style="min-width:560px;max-width:894px;margin:0 auto;">
          <!-- 부트스트랩 Tab으로 해결 안 될 거 같으면 아코디언 더 찾아보기 -->
          <!-- https://bootstrap-vue.org/docs/components/tabs 에서 탭 css 조정 방법 찾기 -->
          
  <b-card no-body class="mp-reset">
    <b-tabs pills card vertical id="FAQtabs">
      <b-tab title="개발자가 된 계기" active><b-card-text>
        <pre>
테스트1
테스트1
        </pre>
      </b-card-text></b-tab>
      <b-tab title="관심 파트"><b-card-text>
        <pre>
테스트1
테스트1
        </pre>
      </b-card-text></b-tab>
      <b-tab title="성격의 장단점"><b-card-text>
        <pre>
테스트1
테스트1
        </pre>
      </b-card-text></b-tab>
      <b-tab title="프로젝트 경험"><b-card-text>
        <pre>
테스트1
테스트1
        </pre>
      </b-card-text></b-tab>
      <b-tab title="기술 역량"><b-card-text>
        <pre>
테스트1
테스트1
        </pre>
      </b-card-text></b-tab>
      <b-tab title="원래 전공에 대해"><b-card-text>
        <pre>
테스트1
테스트1
        </pre>
      </b-card-text></b-tab>
    </b-tabs>
  </b-card>
      <p class="mt-1" style="font-size:14px;color:rgb(0 0 0 / 60%);">* 탭 활성화 후에, 키보드로 제어가 가능합니다 :)</p>
        </b-row>
    </div>
</template>

<script>
export default {
  name: "FAQ"
  }
</script>

<style>
#FAQtabs{
  
}
</style>
