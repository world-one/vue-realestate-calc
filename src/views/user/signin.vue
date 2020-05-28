
<template>
    <div class="wrap__sign">
        <h1 class="sign__title">로그인</h1>

        <form method="post">
            <ul class="input__list">
                <li class="input__item">
                    <input type="text" name="identity"  placeholder="아이디">
                </li>
                <li class="input__item">
                    <input type="password" name="password"  placeholder="비밀번호">
                </li>
            </ul>
            <button class="btn btn-black" type="submit">로그인</button>
        </form>

        <router-link class="btn" :to="{ 'name' : 'signup' }">회원가입하기</router-link>
        <router-link class="sign__text__anchor" :to="{ 'name' : 'passowrdFind' }">비밀번호찾기</router-link>
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
