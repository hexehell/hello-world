prtObjeto = (function()
{

    fn1 =(function()
    {
        if(arguments[0]!=undefined)
        return "algo con el parametro 1: "+ arguments[0]
        else
        return "no hay parametros que mostrar";
    })

    return fn1;
})

fn2 = prtObjeto()

console.log(fn2("Arthur Morgan"));