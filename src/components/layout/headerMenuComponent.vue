
<template>
    <div class="wrap__header__menu" > 
        <router-link class="header__menu__anchor" :to="{ 'name' : 'main' }">매입 계산 리스트</router-link>
            
        <router-link class="header__menu__anchor" :to="{ 'name' : 'create' }">주택 매입 계산하기</router-link>
        
        <div v-if="false">
          <a class="header__menu__anchor" href="mailto:worldone@grabity.org" >이메일로 문의하기</a>    
          <router-link class="header__menu__anchor" :to="{ 'name' : 'signin' }">공식 모아보기</router-link>
              
          <div class="header__menu__button">
              <router-link class="btn btn-black" :to="{ 'name' : 'signin' }">로그인</router-link>
              <router-link class="btn" :to="{ 'name' : 'signup' }">회원가입</router-link>
          </div>
        </div>
   </div>
</template>

<script>

export default {
  name: 'sidebar',
  methods:{
   
  }
  
  
  

}
</script>