
<template>
    <div class="wrap__sidebar" :class=" {'active' : active}" @click="toggle()">
        <div class="sidebar">
            <div class="sidebar__box siderbar__button">
                <h1 class="sidebar__title" >PART</h1>
                <!-- <router-link class="btn btn-black" :to="{ 'name' : 'signin' }">로그인</router-link>
                <router-link class="btn" :to="{ 'name' : 'signup' }">회원가입하기</router-link> -->
            </div>

            <div class="sidebar__box sidebar__menu__list">
                <router-link class="siderbar__menu__anchor" :to="{ 'name' : 'create' }">주택 매입 계산하기</router-link>
                <router-link class="siderbar__menu__anchor" :to="{ 'name' : 'main' }">매입 계산 리스트</router-link>
            </div>
        </div>
   </div>
</template>

<script>

export default {
  name: 'sidebar',
  data() {
      return {
        active : false
      }
  },
  methods:{
      toggle(){
          return this.active = !this.active;
      }
  }
  
  
  

}
</script>