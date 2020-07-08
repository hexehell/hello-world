fn1 =(function(param1,param2)
{
    function fn2()
    {
        return "Parametro 1 "+  param1; 
    }

    function  fn3()
    {

        return "Parametro 2 "+  param2; 

    }

console.log( fn2() + '\n'+ fn3());
})("pito","chu");