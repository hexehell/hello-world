(function()
{

    console.log("fnautoinvocable");

}) ();

(function()
{

    console.log("fnAutoinvocable con parametros");
    for(i =0;i<arguments.length;i++)
    if(typeof arguments[i] ==='function')
    {
        arguments[i]();
        

    }
    else
    {

        console.log("paramtro ["+i+"]: "+ arguments[i]);

    }
    

}
)('tu mama',3,'tu jefa',true,(function(){console.log("tu mama en pelotas")}));