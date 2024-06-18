async function getJson(){
    const response = await fetch('/requestAnalysis/checkout-cart/data.json');
    const json = await response.json();
    const obj = [];
    const qtdPost= [];
    const qtdGet= [];
    const ul = document.createElement('ul');
    const parent = document.getElementById('container');
    let data; 

    json.log.entries.map(( item )=>{
        
        if( item.request.url.search('api/checkout') !== -1 ){
            data = item.startedDateTime?.replaceAll(/([.].*)/g, '').replace('T', ' ');
            
            const method = item.request.method;
            const url = item.request.url;
            
            obj.push({ method, url, data }) 
        }
    })

    obj.map(( { method, url, data } )=>{
        if( method === "POST" ){
            qtdPost.push(method)
        }
        if( method === "GET" ){
            qtdGet.push(method)
        }
        ul.innerHTML += `
            <div>
                <li><strong>Método:</strong> ${method}</li>
                <li><strong>URL:</strong> ${url}</li>
                <li><strong>Data:</strong> ${data}</li>
            </div>
        `;
    })

    parent.innerHTML = `
        <h2>Quantidade Total: ${obj.length}</h2>
        <div style="display:flex; column-gap: 10px">
            <p>Quantidade de GET: <strong>${qtdGet.length}</strong></p>
            <p>Quantidade de POST: <strong>${qtdPost.length}</strong></p>
        </div>
    `;

    parent.append(ul);    
}

getJson()