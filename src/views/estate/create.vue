
<template>
    <div class="wrap">
        
        <h1 class="estate__name">주택 매입 계산</h1>
        <p class="estate__create__text">투자 물건을 등록해서<br>편리하게 계산해보세요.</p>
        
        <form method="post" name="estateForm" @submit.prevent="insertStorage">
            <ul class="input__list">
                <li class="input__item">
                    <span class="label">물건명</span>
                    <input type="text" required name="name" id="" placeholder="삼성래미안" autocomplete="off">
                </li>
                <li class="input__item">
                    <span class="label">매입금액</span>
                    <input type="number" required name="purchase_amount" id="" placeholder="000,000,000" autocomplete="off">
                </li>
                <li class="input__item">
                    <span class="label">시가표준액</span>
                    <input type="number" required name="standard_value" id="" placeholder="000,000,000" autocomplete="off">
                </li>
                <li class="input__item">
                    <span class="label">임대보증금</span>
                    <input type="number" name="rental_deposit" id="" placeholder="000,000,000" autocomplete="off">
                </li>
                <li class="input__item">
                    <span class="label">월임대수익</span>
                    <input type="number" name="rental_income" id="" placeholder="000,000,000" autocomplete="off">
                </li>
                <li class="input__item">
                    <span class="label">대출금액</span>
                    <input type="number" step="any" name="loan_amount" id="" placeholder="000,000,000" autocomplete="off">
                     <div class="radio__box price__percent" @click="amountPercent()">
                        <a class="label" data-percent="50">50%</a>
                        <a class="label" data-percent="60">60%</a>
                        <a class="label" data-percent="70">70%</a>
                        <a class="label" data-percent="80">80%</a>
                    </div>
                </li>
                <li class="input__item">
                    <span class="label">대출이자율</span>
                    <input type="number" step="any" name="interest" id="" placeholder="0.0%" autocomplete="off">
                </li>
                <li class="input__item">
                    <span class="label">투자기간</span>
                    <input type="number" name="investment_period" id="" placeholder="N년" autocomplete="off">
                </li>
                <li class="input__item">
                    <span class="label">물건종류</span>
                    <input type="text" name="kinds" id="" placeholder="아파트, 다세대주택, 상가" autocomplete="off">
                    <!-- <select name="kinds" >
                        <option value="단독주택">단독주택</option>
                        <option value="다중주택">다중주택</option>
                        <option value="다가구주택">다가구주택</option>
                        <option value="아파트">아파트</option>
                        <option value="연립주택">연립주택</option>
                        <option value="다세대주택">다세대주택</option>
                        <option value="기타">기타</option>
                    </select> -->
                </li>
                <li class="input__item">
                    <span class="label">공급면적 ( m<sup style="font-size:10px;">2</sup> )</span>
                    <input type="number" name="size" id="" placeholder="85" autocomplete="off">
                </li>
                <li class="input__item">
                    <span class="label">부대비용(이사, 법무사, 셀프등기)</span>
                    <input type="number" name="other_costs" id="" placeholder="000,000,000" autocomplete="off">
                </li>
                <li class="input__item">
                    <span class="label">지역</span>
                    <div class="radio__box location">
                        <input type="radio" name="area" id="area_big" value="특별시/광역시">
                        <label for="area_big">특별시/광역시</label>
                        <input type="radio" name="area" id="area_etc" value="그 외">
                        <label for="area_etc">그 외</label>
                    </div>
                </li>
                <li class="input__item">
                    <span class="label">국민주택채권할인율</span>
                    <input type="number" step="any" name="house_discount_rate" id="" placeholder="4%" autocomplete="off">
                </li>
            </ul>
            <button class="btn btn-black" type="submit">계산하기</button>
        </form>
    </div>
</template>

<script>
import calc from '@/assets/js/calc';
export default {
  name: 'signup',
  data() {
      return {

      }
  },
  mounted(){
      this.update();
    //   localStorage.removeItem('estateData');
  },
  methods :{
      update(){
        let t =  this.$route.query.t; 
        if( t ){
            let local = localStorage.getItem('estateData');
            let obj = JSON.parse(local);
            let f = document.estateForm;
            let o = obj[t]; 
            
            if( obj[t] ){
                
                f.name.value = o.name;
                f.purchase_amount.value = o.purchase_amount;
                f.standard_value.value = o.standard_value;
                f.rental_deposit.value = o.rental_deposit;
                f.rental_income.value = o.rental_income;
                f.loan_amount.value = o.loan_amount;
                f.interest.value = o.interest;
                f.investment_period.value = o.investment_period;
                f.kinds.value = o.kinds;
                f.size.value = o.size;
                f.other_costs.value = o.other_costs;
                f.area.value = o.area;
                f.house_discount_rate.value = o.house_discount_rate;

            }else{
                alert( '존재하지 않는 데이터입니다. 새로 입력됩니다.' );
            }

        }
      },
      amountPercent(){
        let target = event.target;
        let p = target.dataset.percent;
        let amount;

        if( p ){
            amount = document.estateForm.purchase_amount.value;            
            document.estateForm.loan_amount.value = amount * p / 100;
        }

      },
      insertStorage(){
            let t;
            let obj = {};
            let local = localStorage.getItem('estateData');
            let key = Date.now()
            let form = document.estateForm;
            let data = new FormData(form);
            let objData = {};
            let purchase_tax;

            if(local){
                obj = JSON.parse(local);
            }

            data.forEach( ( v, k ) => {
                objData[k] = v;
            } )

            purchase_tax = calc.acquisition_tax( objData['purchase_amount'] );
        
            objData['acquisition_tax'] = purchase_tax['a'];
            objData['education_tax'] = purchase_tax['b'];
            objData['stamp_duty'] = calc.stamp_duty(objData['loan_amount']);
            objData['certificate_tax'] = 9000;
            objData['house_discount'] = objData['standard_value'] * 0.026 * objData['house_discount_rate'];
            objData['total_invest'] = objData['purchase_amount'] - ( + objData['loan_amount'] + + objData['rental_deposit']
                                        + + objData['acquisition_tax'] + + objData['education_tax'] + + objData['stamp_duty'] 
                                        + + objData['certificate_tax'] + + objData['house_discount'] + + objData['other_costs'] );
            objData['monthly_revenue'] = Math.round( objData['rental_income'] - ( (objData['loan_amount'] / objData['interest']) / 12 ) );
            objData['year_revenue_rate'] = ( 
                                            ( objData['rental_income'] * 12 - ( objData['loan_amount'] / objData['interest'] / 12 ) ) 
                                            / objData['total_invest'] 
                                        ).toFixed(1);
            objData['property_tax'] = calc.property_tax( objData['standard_value'] );

            t = this.$route.query.t
            if(t && obj[t]) key = t;
                
            obj[key] = objData;
                
            localStorage.setItem('estateData', JSON.stringify(obj));

            this.$router.push({name:'main'});
            
      },
      dataSet(){
          
      }
  },
}
</script>

<style lang="scss">
  @import '@/scss/pages/_estate';
</style>
