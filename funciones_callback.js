fnCallback = (function(fn1,fn2)
{
    console.log( fn1() + fn2());
})
fn1 = (function(nNumero){ return 10});
fn2 = (function(nNumero){ return 20});

fnCallback(fn1,fn2);

// fnCallback(fn1(10),fn1(20));

// fn2 = (function(nNumero){return n})