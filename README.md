# Análise de requisição

Finalidade da criação dos arquivos é somente para acompanhar o vídeo feito sobre as requisições na loja. <br />
No checkout, páginas `checkout#/cart`, `checkout#/shipping` e `checkout#/payment` foi colhido <br />
os dados via devTools, aba Rede e exportanto o HAR com filtro para Fetch/XHR. 

Não houve excessos de requisíções conforme foi apontado.

Página: `checkout#/cart` teve total de: 6 requisições - `GET`: 2 e `POST`: 4. <br />
Página: `checkout#/shipping` teve total de: 5 requisições - `GET`: 2 e `POST`: 3. <br />
Página: `checkout#/payment` teve total de: 14 requisições - `GET`: 1 e `POST`: 13. <br />