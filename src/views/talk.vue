<template>
<div class="position-relative w-100" style="height: 89vh;" id="talkBackground">
    <div class="text-center position-absolute top-50 start-50 translate-middle" id="talkSection">
        <h1 class="mp-title"  style="color:black;font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
            방명록
        </h1>
        <div id="talkMain">
            <div class="text-start border-top pt-3">
                1 | 이민재 <span style="color:gray">(2012.12.27 17:31)</span>
<pre class="mt-2 mb-0" style="max-height:6vh;white-space: pre-wrap;">테스트</pre>
            </div>
            <b-row class="justify-content-center mt-3 mx-0">
                <b-col>
                    <b-form-textarea
                    id="textarea"
                    class="talkTextarea"
                    v-model="text"
                    :state="text.length <= 100"
                    placeholder="100자 이하로 입력하세요."
                    rows="3"
                    max-rows="3"
                    no-resize
                    ></b-form-textarea>
                    <p class="text-start" style="font-size:14px;color:gray;">글자 수 : {{text.length}} / 100</p>
                </b-col>
                <b-col cols="auto">
                    <!--스위치 적용이 안 되는데 나중에 해결하고 일단은 체크박스로 진행-->
                    <b-form-checkbox v-model="checked" name="check-button" switch>
                        비밀글
                    </b-form-checkbox>
                    <b-button>등록</b-button>
                </b-col>
            </b-row>
                <b-pagination v-model="currentPage" pills :total-rows="rows" size="sm" align="right"></b-pagination>
        </div>
    </div>
</div>

<!--
    구현 해야할 것
1. 글 작성(글 번호,글 내용, 작성일, 닉네임, 비밀글여부)
2. 글 삭제
3. 글 수정
4. 페이지네이션
-->
</template>

<script>
  export default {
    data() {
      return {
        text: '',
        checked: false,
      }
    }
  }
</script>

<style>
#talkBackground {
   position: relative;
}
#talkBackground:after {
    content : "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('https://cdn.pixabay.com/photo/2019/08/14/15/15/macbook-4405973_960_720.jpg'); 
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity : 0.6;
    z-index: -1;
}
#talkSection{
    margin: auto;
    width: 50vw;
    min-width: none;
    max-width: 760px;
    min-height: 80vh;
    background: white;
    border-radius: 1rem;
    box-shadow: rgb(0 0 0 / 40%) 10px 10px 20px 0px;
}
#talkMain{
    margin: auto;
    width: 45vw;
    max-width: 684px;
}
.is-valid{
    border-color: #ced4da!important;
    background: white!important;
    box-shadow: none!important;
}
</style>
