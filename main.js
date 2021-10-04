const ipsList = require('./CopiedMock3.json'); 
 
let ipAddressDict = {}; 
 
function request_handled(ip_address) { 
    if(ipAddressDict[ip_address] === undefined) { 
        ipAddressDict[ip_address] = 1; 
    } else { 
        ipAddressDict[ip_address] += 1; 
    } 
} 
 
function top_100() { 
    const keys = Object.keys(ipAddressDict); 
    keys.sort((a,b) =>{ 
        return ipAddressDict[b] - ipAddressDict[a]; 
    }) 
    return keys.slice(0, 100); 
} 
function clear() { 
    ipAddressDict = {} 
} 
 
for (const ip of ipsList) { 
   request_handled(ip.ip_address); 
} 
 
let top_100_ip = top_100() 
console.log(top_100_ip); 
 
clear();