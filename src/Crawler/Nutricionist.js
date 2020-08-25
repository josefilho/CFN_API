const puppeteer = require('puppeteer');

async function FindNutricionist( __subs ){
    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://cnn.cfn.org.br/application/index/consulta-nacional');
        //Espera o carregamento do componente
        await page.waitFor('input[name="registro"]');
        //Digita dentro de um campo selecionado
        await page.type('input[name="registro"]', __subs.toString());
        //Pressiona uma tecla do teclado simulando-a
        await page.keyboard.press('Enter');
        //Vai esperar esse componente ser carregado
        await page.waitFor('#table > tbody > tr > td');
        const data = await page.evaluate(()=>{
            const allData = document.querySelectorAll('table#table > tbody > tr > td');

            const name = allData[0].innerText;
            const subscription = allData[1].innerText;
            const crn = allData[2].innerText;
            const situation = allData[3].querySelector('div').innerText;
            const subscriptionType = allData[4].querySelector('div').innerText;
            const lastUpdate = allData[5].innerText;

            return {
                name,
                subscription,
                crn,
                situation,
                subscriptionType,
                lastUpdate
            };
        });
        await browser.close();
        return {
            name: data.name,
            subscription: data.subscription,
            crn: data.crn,
            situation: data.situation,
            subscriptionType: data.subscriptionType,
            lastUpdate: data.lastUpdate
        };
        
    } catch(error){
        return undefined;
    }
}

module.exports = FindNutricionist;
