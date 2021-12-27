<template>
    <div class="text-center w-100 padding-section" id="FAQ">
      <h1 class="mp-title" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
        FAQ
      </h1>
        <b-row style="min-width:560px;max-width:894px;margin:0 auto;">
          <!-- 부트스트랩 Tab으로 해결 안 될 거 같으면 아코디언 더 찾아보기 -->
          
  <b-card no-body class="mp-reset">
    <b-tabs pills card vertical>
      <b-tab title="질문 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="질문 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="질문 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
        </b-row>
    </div>
</template>

<script>
export default {
  name: "FAQ"
  }
</script>

<style>
</style>
