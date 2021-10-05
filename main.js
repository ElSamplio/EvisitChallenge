const ipsList = require("./CopiedMock3.json");

let ipAddressDict = {};

function request_handled(ip_address) {
  if (ipAddressDict[ip_address] === undefined) {
    ipAddressDict[ip_address] = 1;
  } else {
    ipAddressDict[ip_address] += 1;
  }
}

function top_100() {
  const keys = Object.keys(ipAddressDict);
  keys.sort((a, b) => {
    return ipAddressDict[b] - ipAddressDict[a];
  });
  return keys.slice(0, 100);
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
