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
저는 디자인을 했었으며 현재는 퍼블리싱 겸 프론드엔드를 맡고 있습니다.
제가 디자인을 알고, 마크업을 아는 만큼 디자인팀과 UI/UX 관련 커뮤니케이션이 쉽게 오갑니다.
디자이너들이 지금까지 개발을 몰라 답답했던 부분을 설명하며 이해하는 것을 돕고 그들이 원하는 만큼 아웃풋을 만들기 위해 노력합니다.
기능적으로 어려운 일이 생겨도 디자이너의 맘을 알기에 안된다는 말보다는 차선 안을 제시합니다.
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
      <p class="mt-2" style="font-size:14px;color:rgb(0 0 0 / 60%);">* 탭 활성화 후에, 키보드로 제어가 가능합니다 :)</p>
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
  margin:0px;
  box-shadow: rgb(0 0 0 / 20%) 5px 5px 20px 0px!important;
}
#FAQtabs > *{
  margin: auto;
  padding: 0px!important;
}

.nav-link{
  color:gray!important;
  
}

/*헤더바에 간섭생기니까 나중에 클래스명 바꾸기*/
.nav-link:hover{
  color:black!important;
}

.nav-link.active{
  background: #6c757d!important;
  color:white!important;
  
}
pre{
  font-family: 'Noto Sans KR'!important;
  font-weight: 500!important;
  font-size: 16px!important;
  color: rgb(0 0 0 / 60%);
  }
</style>
