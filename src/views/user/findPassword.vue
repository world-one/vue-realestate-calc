
<template>
    <div class="wrap__sign">
        <h1 class="sign__title">비밀번호 찾기</h1>
        <div v-if="!findResult">
            <form method="post">
                <ul class="input__list">
                    <li class="input__item">
                        <input type="text" name="identity" placeholder="아이디">
                    </li>
                    <li class="input__item">
                        <select name="question" >
                            <option>질문을 선택하세요</option>
                            <option value="기억에 남는 장소는?">기억에 남는 장소는?</option>
                        </select>
                    </li>
                    <li class="input__item">
                        <input type="text" name="answer"  placeholder="답변">
                    </li>
                </ul>
                <button class="btn btn-black" type="submit" @click.prevent="findPassword">비밀번호 찾기</button>
            </form>
            <router-link class="sign__text__anchor" :to="{ 'name' : 'signin' }">로그인하기</router-link>
        </div>

        <div v-else>
            <p class="find__result__text">dongkeeez님의 비밀번호는 <b>Spring******</b>입니다.</p>
            <router-link class="btn btn-black" :to="{ 'name' : 'signin' }">로그인하기</router-link>
        </div>
     
    </div>
</template>

<script>

export default {
  name: 'signup',
  data() {
      return {
          findResult : false
      }
  },
  methods :{
      findPassword(){
          this.findResult = true;
      }
  },
  components :{
      
  }

}
</script>

<style lang="scss">
  @import '@/scss/pages/_sign';
</style>
