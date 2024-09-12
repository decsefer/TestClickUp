Proyecto hecho en javascript y puppeteer para la automatizacion del proceso:
In website https://www.mercadolibre.com

	Select México as a country  

	Search for the term “playstation 5”  

	Filter by condition “Nuevos”  

	Filter by location “Cdmx”  

	Order by “mayor a “menor precio”  

	Obtain the name and the price of the first 5 products   

	Print these products in the console  

 Para la ejecucion del programa necesitaremos tener instalado node.js, puppeteer y cualquier sistema de gestion de paquetes por lote (en este caso NPM).
 
-Liga de instalación de node en caso de no tenerlo previamente: https://nodejs.org/en

-Liga de instalación de npm: https://www.npmjs.com/

-Desde la consola podemos instalar puppeteer con la ayuda de NPM:
           -npm install puppeteer

 Una vez instalado solo falta ejecutar el proyecto normalmente: "node prueba.js" desde consola dentro de la carpeta del proyecto.

 !!!!IMPORTANTE¡¡¡¡¡
 En la ejecución se abrira una instancia web con Chrome que hara la selección de pais e inicilizará los filtros, se quedara en espera para que se puedan ver que los filtros
 de Mercado Libre estan activos, que son "Nuevo" y "CDMX", una vez se haya comprobado visualmente que los filtros estan seleccionados solo habrá que dar 
 click sobre el menu desplegable "ordenar por" (tendrá focus azul) para que automaticamente seleccione el mayor precio, tome los primeros 
 cinco resultados, cierre la aplicacion e imprima los resultados por consola. 

 En caso de querer que la pagina web no cierre habra que comentar la linea de codigo: "await browser.close();" en la linea 87.
