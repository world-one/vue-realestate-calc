
<template>
    <div class="wrap wrap__estate__list">
       <ul class="estate__list">
           <li class="estate__item" v-for="(item, key, index) in list" :key="index">
               <button class="estate__item__delete__btn" @click="deleteData(key, item.name)" >X</button>
               <router-link class="estate__item__title" :to="{'name' : 'detail', query: { t : key }}">{{item.name}}</router-link>
               <div class="estate__summary">
                    <div class="wrap__estate__category">
                        <span class="category">{{item.kinds}}</span> | <span class="size">{{item.size}} m<sup>2</sup></span>
                    </div>
                    <div class="wrap__estate__price">
                        <span class="label">매입금액</span>
                        <span class="price">{{item.purchase_amount.format()}}원</span>
                    </div>
               </div>
           </li>
       </ul>
    </div>
</template>

<script>

export default {
  name: 'list',
  data() {
      return {
          list : []
      }
  },
  mounted(){
    this.getList();  
  },
  methods :{
      getList(){
          let data = localStorage.getItem('estateData');
          if(data){
              this.list = JSON.parse( data );
          }
      },
      deleteData(k, n){
        if( confirm( '[ '+n+' ] 삭제하시겠습니까?' ) ){
            let data =  JSON.parse(localStorage.getItem('estateData'));
            if(data[k]){
                delete data[k];
                localStorage.setItem( 'estateData', JSON.stringify(data) );
                this.list = data;
            }
        }
      }
  },
  components :{
      
  }

}
</script>

<style lang="scss">
  @import '@/scss/pages/_estate';
</style>
