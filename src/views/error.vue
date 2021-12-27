<template>
<div class="position-relative w-100" style="height: 89vh;" id="home"
    >
      <div class="text-center position-absolute top-50 start-50 translate-middle">
        <h1 style="font-weight:bold;color:white;">
미구현 or 에러 수정중
        </h1>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
#home {
   position: relative;
}
#home:after {
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
</style>
