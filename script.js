const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";


//fetch data using async await
const fetchData = async function (url) {
  const response = await fetch(url);
  let data = await response.json();
   data && showTable(data);
};

//fetch data using .then
// const fetchData = async function (url) {
//    const response = fetch('url')  
//    .then(response => response.json())
//    .then(data => console.log(data));
// };


fetchData(API_URL);

function showTable(data) {
  let table = `<tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>ID</th>
          <th>Price</th>
          <th>Total Volume</th>
          <th>Market Cap</th>
         </tr>`;

  for (let r of data) {
    table += `<tr> 
    <td class="imgh"><img src=${r.image} alt="alternatetext"></td>         
    <td>${r.id} </td>
    <td>${r.symbol}</td>         
    <td>$${r.current_price}</td>         
    <td>$${r.total_volume}</td>                 
    <td>Mkt Cap: $${r.market_cap}</td>         
</tr>`;
  }
  document.getElementById("table-main").innerHTML = table;
}
