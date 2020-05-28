
<template>
    <header class="header">
        <div class="wrap">
            <button class="header__menu__btn" @click="sidebarToggle">버튼</button>
            <h1 class="header__logo"><router-link :to="{'name' : 'create'}">PART</router-link></h1>
            <headerMenuComponent />
            <sidebarComponent 
                ref="sidebar"
            />
        </div>
    </header>
</template>

<script>
import sidebarComponent from '@/components/layout/sidebarComponent'
import headerMenuComponent from '@/components/layout/headerMenuComponent'
export default {
  name: 'Header',
  data() {
      return {
          
      }
  },
  methods:{
      sidebarToggle(){
          this.$refs.sidebar.toggle()
      }
  },
  components :{
      sidebarComponent,
      headerMenuComponent
  }

}
</script>