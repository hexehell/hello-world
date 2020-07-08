 balls = (function(){


        objeto = 
        {
            mensaje_1: 'Hola',
            mensaje_2:'mundo'

        }

        console.log(objeto.mensaje_1 +" "+ objeto.mensaje_2);

        //muestra la lista
        function fnMuestraLista()
        {

            for(i=0;i<arguments.length;i++)
            {
                console.log(arguments[i]);


            }


        };
        fnMuestraLista("jad","jas","jqa","jaw","jfa","jaa","jas","jaw","jr","jae",);
});

balls();