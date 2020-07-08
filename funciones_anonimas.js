anonima = (function()
{

    console.log("Hola Mundo");

})

anonima2 = (function()
{

    if(arguments[0]!=undefined)
    console.log("Hola "+arguments[0])
    else
    {
            console.log("tu jefa");

    }

})


anonima();
anonima2("hexehell");
anonima2();