const labelbtc = document.getElementById('labelbtc');
const buttonConsult = document.getElementById('buttonConsult');

const API = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
});

async function consultarBTC(){
    const response = await API.get();
    console.log(response.data.ticker.high);
    labelbtc.innerHTML = response.data.ticker.high;
}

buttonConsult.onclick = ()=>{
    consultarBTC();
};