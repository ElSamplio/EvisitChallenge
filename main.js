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
  const initialTime = new Date().getTime();
  const keys = Object.keys(ipAddressDict);
  keys.sort((a, b) => {
    return ipAddressDict[b] - ipAddressDict[a];
  });
  const finalTime = new Date().getTime();
  console.log(
    `initialTime on top_100: ${initialTime}, finalTime on top_100: ${finalTime}, totalTime in top_100: ${
      finalTime - initialTime
    }`
  );
  return keys.slice(0, 100);
}

function clear() {
  ipAddressDict = {};
}
const initialTime = new Date().getTime();
ipsList.forEach((ip) => {
  request_handled(ip.ip_address);
});
const finalTime = new Date().getTime();
console.log(
  `initialTime on forEach: ${initialTime}, finalTime on forEach: ${finalTime}, totalTime in forEach: ${
    finalTime - initialTime
  }`
);

const top_100_ip = top_100();
console.log(top_100_ip);

clear();
