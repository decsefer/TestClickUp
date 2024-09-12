const puppeteer = require('puppeteer');

(async () => {
    
    const browser = await puppeteer.launch({ headless: false }); 
    const page = await browser.newPage();

    try {
       
        await page.goto('https://www.mercadolibre.com'); 

        // 2. Seleccionar México
        await page.waitForSelector('#MX');
        await page.click('#MX'); 
     

        // 3. Buscar "PlayStation 5"
        await page.waitForSelector('#cb1-edit');
        await page.type('#cb1-edit', 'PlayStation 5');
        await page.click('.nav-search-btn');
     

       
    await page.waitForSelector('.ui-search-filter-dl');

    // filtro "Nuevo" y hacer 
    await page.evaluate(() => {
        const newFilterLink = Array.from(document.querySelectorAll('.ui-search-filter-container a'))
            .find(a => a.querySelector('.ui-search-filter-name')?.textContent.includes('Nuevo'));
            newFilterLink.scrollIntoView();
            newFilterLink.click();
    });
    await page.waitForSelector('.ui-search-results');
        //  ubicación "CDMX"
        await page.evaluate(() => {
            const federalFilterLink = Array.from(document.querySelectorAll('.ui-search-filter-container a'))
                .find(a => a.querySelector('.ui-search-filter-name')?.textContent.includes('Distrito Federal'));
    
            if (federalFilterLink) {
                federalFilterLink.scrollIntoView();
                federalFilterLink.click();
            }
        });
        // Esperar hasta que cargue el resultado filtrado
        await page.waitForSelector('.ui-search-results');
    

 
  // cambio a precio mayor
await page.focus('button[aria-labelledby=":R2m55e6:-label :R2m55e6:-display-values"]');

await page.click('button[aria-labelledby=":R2m55e6:-label :R2m55e6:-display-values"]');

await page.waitForSelector('li[data-key="price_desc"]', { visible: true });

await page.click('li[data-key="price_desc"]');
        

  await page.waitForSelector('ol.ui-search-layout');

  // nombres y precios de los primeros 5 productos
  const productos = await page.evaluate(() => {
    const listaProductos = [];
    const items = document.querySelectorAll('ol.ui-search-layout li.ui-search-layout__item');

    // Iterar sobre los primeros 5 productos
    for (let i = 0; i < 5 && i < items.length; i++) {
      const item = items[i];
      
      // nombre del producto
      const nombre = item.querySelector('h2.ui-search-item__title')?.innerText || 'Nombre no disponible';
      
      // precio del producto
      const precio = item.querySelector('.ui-search-price__second-line .andes-money-amount__fraction')?.innerText || 'Precio no disponible';

      listaProductos.push({ nombre, precio });
    }

    return listaProductos;
  });

  console.log(productos);

    } catch (error) {
        console.error(error);
    } finally {
        await browser.close();
    }
})();