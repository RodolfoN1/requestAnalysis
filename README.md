## Análise de requisição
<small>Data da análise: 18/06/2024</small>

Finalidade da criação dos arquivos é somente para acompanhar o vídeo feito sobre as requisições na loja. <br />
No checkout, páginas `checkout#/cart`, `checkout#/shipping` e `checkout#/payment` foi colhido <br />
os dados via devTools, aba Rede e exportanto o HAR com filtro para Fetch/XHR. <br />
Via código foi adicionado uma condicional para filtrar somente: "api/checkout".  

Não houve excessos de requisíções conforme foi apontado.

Página: `checkout#/cart` teve total de: 6 requisições - `GET`: 2 e `POST`: 4. <br />
Página: `checkout#/shipping` teve total de: 5 requisições - `GET`: 2 e `POST`: 3. <br />
Página: `checkout#/payment` teve total de: 14 requisições - `GET`: 1 e `POST`: 13. <br />

### Link das páginas de análise:
Cart: <a href="https://rodolfon1.github.io/requestAnalysis/checkout-cart"> checkout-cart </a> <br />
Shipping: <a href="https://rodolfon1.github.io/requestAnalysis/checkout-shipping"> checkout-shipping </a> <br />
Payment: <a href="https://rodolfon1.github.io/requestAnalysis/checkout-payment"> checkout-payment </a> <br />


### Link Vídeo da análise:
https://github.com/RodolfoN1/requestAnalysis/assets/149804409/b9df6a92-0e2d-4a79-9f9d-5aacacade6be