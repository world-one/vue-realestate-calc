class calc{
  property_tax(amount){
    if( amount <= 60000000  ){
          return amount / 0.1;
    }else if( 60000000 < amount && amount <= 150000000 ){
          return 60000 + ( amount - 60000000 ) / 0.15;
    }else if( 150000000 < amount && amount <= 300000000 ){
          return 195000 + ( amount - 150000000 ) / 0.25;
    }else if( 300000000 < amount ){
          return 570000 + ( amount - 300000000 ) / 0.4;
    }
  }
  acquisition_tax(amount){
    let tax_a = 0.01;
    let tax_b = 0.001;
    let res = {
        a : null,
        b : null
    }
    if( 600000000 < amount && amount <= 900000000 ){
        tax_a = 0.02;
        tax_b = 0.002;
    }else if( amount > 900000000 ){
        tax_a = 0.03;
        tax_b = 0.003;
    }
    
    res['a'] = amount * tax_a;
    res['b'] = amount * tax_b;

    return res;

  }

  stamp_duty(amount){
      if( amount <= 10000000 ) return 0;
      else if( 40000000 < amount  && amount <= 50000000 ) return 40000;
      else if( 50000000 < amount  && amount <= 100000000 ) return 70000;
      else if( 100000000 < amount  && amount <= 1000000000 ) return 150000;
      else if( 1000000000 < amount ) return 350000;

  }
}

export default new calc();