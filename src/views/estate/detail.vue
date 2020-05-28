
<template>
    <div>
        <div id="excelDownload">
            <div class="estate__detail__box">
                <div class="wrap">
                    <h1 class="estate__name">{{d.name}}</h1>
                    <div class="estate__category">
                        <span class="category">{{d.kinds}}</span> | <span class="size">{{d.size}} m<sup>2</sup> </span>
                    </div>
                </div>
            </div>

            <div class="estate__detail__box">
                    <div class="wrap">
                    <h2 class="box__title">투자 현황</h2>
                    <ul>
                        <li class="estate__detail__item">
                            <span class="item__key">매입금액</span>
                            <span class="item__value color-blue">{{ d.purchase_amount.format() }}원</span>
                        </li> 
                        <li class="estate__detail__item">
                            <span class="item__key">임대보증금</span>
                            <span class="item__value">{{ d.rental_deposit.format() }}원</span>
                        </li> 
                        <li class="estate__detail__item">
                            <span class="item__key">월 임대수익</span>
                            <span class="item__value">{{d.rental_income.format() }}원</span>
                        </li> 
                        <li class="estate__detail__item">
                            <span class="item__key">대출금액</span>
                            <span class="item__value">{{d.interest}}% / {{d.loan_amount.format() }}원</span>
                        </li> 
                    </ul>
                </div>
            </div>

            <div class="estate__detail__box">
                    <div class="wrap">
                    <h2 class="box__title">세금/부대비용</h2>

                    <div class="estate__detail__item total__invest">
                        <span class="item__key">실투자비용</span>
                        <span class="item__value color-blue">{{ d.total_invest.format() }}원</span>
                    </div> 

                    <ul>
                        <li class="estate__detail__item">
                            <span class="item__key">취득세</span>
                            <span class="item__value ">{{d.acquisition_tax.format()}}원</span>
                        </li> 
                        <li class="estate__detail__item">
                            <span class="item__key">지방교육세</span>
                            <span class="item__value">{{d.education_tax.format()}}원</span>
                        </li> 
                        <li class="estate__detail__item">
                            <span class="item__key">인지세</span>
                            <span class="item__value">{{d.stamp_duty.format()}}원</span>
                        </li> 
                        <li class="estate__detail__item">
                            <span class="item__key">증지세</span>
                            <span class="item__value">{{d.certificate_tax.format()}}원</span>
                        </li> 
                            <li class="estate__detail__item">
                            <span class="item__key">국민주택채권할인</span>
                            <span class="item__value">{{d.house_discount.format()}}원</span>
                        </li> 
                            <li class="estate__detail__item">
                            <span class="item__key">부대비용(수수료 등)</span>
                            <span class="item__value">{{d.other_costs.format()}}원</span>
                        </li> 
                    </ul>
                </div>
            </div>

            <div class="estate__detail__box">
                <div class="wrap">
                    <h2 class="box__title">수익률</h2>

                    <ul>
                        <li class="estate__detail__item">
                            <span class="item__key">순수 월수익</span>
                            <span class="item__value ">{{d.monthly_revenue.format()}}원</span>
                        </li> 
                        <li class="estate__detail__item">
                            <span class="item__key">연수익률</span>
                            <span class="item__value">{{d.year_revenue_rate}}%</span>
                        </li> 
                        <li class="estate__detail__item">
                            <span class="item__key">실투자금 회수기간</span>
                            <span class="item__value">{{ period.y+'년 ' + ( period.m > 0 ? period.m+'개월' : '' ) }}</span>
                        </li> 
                    </ul>
                    <div class="wrap__table">
                        <table class="estate__detail__table" id="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>임대수입</th>
                                    <th>이자지출</th>
                                    <th>세액지출</th>
                                    <th>실수익금</th>
                                </tr>
                            </thead>
                            <tbody v-if="period.ceil > 0">    
                                <tr v-for="i in period.ceil" :key="i">
                                    <td>{{i}}년</td>
                                    <td>{{(d.rental_income * 12).format()}}</td>
                                    <td>{{ Math.round(d.loan_amount / d.interest).format() }}</td>
                                    <td>{{ d.property_tax.format() }}</td>
                                    <td>{{ (d.rental_income * 12 - Math.round(d.loan_amount / d.interest) - d.property_tax).format() }}</td>
                                </tr>
                                <tr>
                                    <th>합계</th>
                                    <td>{{ ((d.rental_income * 12) * period.ceil).format()}}</td>
                                    <td>{{ ( Math.round(d.loan_amount / d.interest) * period.ceil ).format() }}</td>
                                    <td>{{ ( d.property_tax * period.ceil ).format() }}</td>
                                    <td>{{ ( (d.rental_income * 12 - Math.round(d.loan_amount / d.interest) - d.property_tax) * period.ceil ).format() }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="estate__detail__box border-none">
            <div class="wrap">
                <router-link class="btn btn-black" :to="{ 'name' : 'create', query : { 't' : $route.query.t } }">다시 계산하기</router-link>
                <button class="btn" @click="excelDownload">엑셀로 저장하기</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'estateDetail',
  data() {
      return {
          d : {},
          period : { y : null, m : null, ceil : 0 }
      }
  },
  created(){
       this.getData();
  },
  methods :{
    excelDownload(){
        let id = 'excelDownload';
        var data_type = 'data:application/vnd.ms-excel;charset=utf-8';
        var table_html = encodeURIComponent(document.getElementById(id).outerHTML);
    
        var a = document.createElement('a');
        a.href = data_type + ',%EF%BB%BF' + table_html;
        a.download = this.d.name+'_excel'+'.xls';
        a.click();
    },
    getData(){
        let data = JSON.parse( localStorage.getItem('estateData') );
        let key = this.$route.query.t;
            
        if(!data[key]){
            alert('존재하지 않는 데이터입니다.'); 
            this.$router.replace({'name' : 'create'});
        } 
      
        this.calcPeriod( data[key].total_invest, data[key].monthly_revenue, data[key].property_tax );
        this.d = data[key];
    },
    calcPeriod(t, m, p){
        let month = Math.ceil(t / ( m - p / 12 ) );
        this.period['y'] = Math.floor( month / 12 );
        this.period['m'] = month % 12;
        if( month > 0 ) this.period['ceil'] = Math.ceil( month / 12 );
        
    }
  }
}
</script>

<style lang="scss">
  @import '@/scss/pages/_estate';
</style>
