
<template>
    <div class="wrap__sign">
        <h1 class="sign__title">회원가입</h1>

        <form method="post">
            <ul class="input__list">
                <li class="input__item">
                    <input type="text" name="identity"  placeholder="아이디">
                </li>
                <li class="input__item">
                    <input type="password" name="password"  placeholder="비밀번호">
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
            <button class="btn btn-black" type="submit">회원가입</button>
        </form>
        
        <router-link class="sign__text__anchor" :to="{ 'name' : 'signin' }">로그인하기</router-link>
    </div>
</template>

<script>

export default {
  name: 'signup',
  data() {
      return {
      }
  },

  components :{
      
  }

}
</script>

<style lang="scss">
  @import '@/scss/pages/_sign';
</style>
