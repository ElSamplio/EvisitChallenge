const ipsList = require("./CopiedMock3.json");
let finalData = [];

function createData() {
  const initialTime = new Date().getTime();
  for (let i = 0; i < 10; i++) {
    finalData = finalData.concat(ipsList);
  }
  console.log("Data length: ", finalData.length);
  const finalTime = new Date().getTime();
  console.log("Time taken in createData: ", finalTime - initialTime, " ms");
}

createData();

let ipAddressDict = {};

function request_handled(ip_address) {
  if (ipAddressDict[ip_address] === undefined) {
    ipAddressDict[ip_address] = 1;
  } else {
    ipAddressDict[ip_address] += 1;
  }
}

function top_100() {
  const initialTime = new Date().getTime();
  const keys = Object.keys(ipAddressDict);
  keys.sort((a, b) => {
    return ipAddressDict[b] - ipAddressDict[a];
  });
  const top100Keys = keys.slice(0, 100);
  const finalTime = new Date().getTime();
  const top100Addresses = [];
  for (const key of top100Keys) {
    top100Addresses.push({ ip_address: key, quantity: ipAddressDict[key] });
  }
  console.log("Time taken in top_100: ", finalTime - initialTime, " ms");
  return top100Addresses;
}
function clear() {
  ipAddressDict = {};
}

ipsList.forEach((ip) => {
  request_handled(ip.ip_address);
});

const top_100_ip = top_100();
console.log(top_100_ip);

clear();
