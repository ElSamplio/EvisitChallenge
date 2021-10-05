# Coding Challenge | eVisit | Node+React

Imagine your team has developed a web service that receives requests from about 20 million unique IP addresses every day. You want to keep track of the IP addresses that are making the most requests to your service each day. Your job is to write a program that (1) tracks these IP addresses in memory (don’t use a database), and (2) returns the 100 most common IP addresses.

### Short description of my approach

- What would I do differently if I had more time?
  <p>I would implement errors handling and boundaries in the input data</p>

- What is the runtime complexity of each function?

- How does my code work?
  <p>First, I created a data dictionary, whose key is the IP address to check and the value is the IP address counter; then, in the request_handled function I start the counter with 1 if my data dictionary doesn't include the received IP address, else it would increment this counter. After this, the top_100 function is executed in order to sort the counters retrieved by each key (IP address) in descending way using the js sort function and it returns the first 100 records using the slice function. Finally, the function clear is executed to clean the data dictionary, assigning a new value of an empty object, so the reference to the previous one will be cleaned by GC.</p>

- What other approaches did I decide not to pursue?
  <p>In my firts sight I was thinking about some other data structures such as trees and handling different threads to improve performance, also using the reduce function to accumulate the IP addresses count; but after a better analysis and understanding I decide to move with the data dictionary to go faster in the code with many less lines and also achieving the desired performance.</p>

- How would I test this?
  <p>Actually I made another approach <code>main_testdata.js</code> with some little changes to run some tests, in which I take a .json file with some more than 2 million of records (I limited to this number to avoid a huge file) so I added a function named createData() to iterate 10 times this file and add the records to my data dictionary. Also I changed the output to show the number of requests by IP in the first 10 output and the response times. The results are as follows:</p>

```sh
Data length:  22104110
Time taken in createData:  1232  ms
Time taken in top_100:  0  ms
[
  { ip_address: '227.126.206.152', quantity: 14028 },
  { ip_address: '164.113.159.189', quantity: 12024 },
  { ip_address: '196.33.152.230', quantity: 12023 },
  { ip_address: '68.138.64.25', quantity: 6012 },
  { ip_address: '5.185.128.49', quantity: 6012 },
  { ip_address: '133.76.192.232', quantity: 6012 },
  { ip_address: '222.102.90.114', quantity: 6012 },
  { ip_address: '103.114.71.75', quantity: 6012 },
  { ip_address: '78.193.24.138', quantity: 6012 },
  { ip_address: '116.36.51.172', quantity: 6012 },
  { ip_address: '42.244.22.104', quantity: 6012 },
  { ip_address: '226.7.57.51', quantity: 6012 },
  { ip_address: '159.152.197.44', quantity: 6012 },
  { ip_address: '207.220.96.57', quantity: 6012 },
  { ip_address: '246.50.108.242', quantity: 6012 },
  { ip_address: '218.245.97.250', quantity: 6012 },
  { ip_address: '3.56.9.1', quantity: 6012 },
  { ip_address: '11.228.175.30', quantity: 6012 },
  { ip_address: '248.60.57.122', quantity: 6012 },
  { ip_address: '210.201.121.142', quantity: 6012 },
  { ip_address: '200.202.206.56', quantity: 6012 },
  { ip_address: '178.36.118.71', quantity: 6012 },
  { ip_address: '127.0.11.127', quantity: 6012 },
  { ip_address: '77.119.22.228', quantity: 6012 },
  { ip_address: '173.195.248.203', quantity: 6012 },
  { ip_address: '233.125.108.164', quantity: 4008 },
  { ip_address: '51.247.230.63', quantity: 4008 },
  { ip_address: '50.52.147.96', quantity: 4008 },
  { ip_address: '151.79.254.195', quantity: 4008 },
  { ip_address: '249.67.106.175', quantity: 4008 },
  { ip_address: '168.19.88.222', quantity: 4008 },
  { ip_address: '233.74.2.143', quantity: 4008 },
  { ip_address: '78.50.114.138', quantity: 4008 },
  { ip_address: '96.31.143.116', quantity: 4008 },
  { ip_address: '54.98.97.252', quantity: 4008 },
  { ip_address: '155.126.35.208', quantity: 4008 },
  { ip_address: '158.97.143.25', quantity: 4008 },
  { ip_address: '168.221.53.38', quantity: 4008 },
  { ip_address: '254.193.151.22', quantity: 4008 },
  { ip_address: '237.12.29.73', quantity: 4008 },
  { ip_address: '1.205.146.154', quantity: 4008 },
  { ip_address: '242.1.134.151', quantity: 4008 },
  { ip_address: '243.185.123.118', quantity: 4008 },
  { ip_address: '238.173.90.160', quantity: 4008 },
  { ip_address: '88.156.207.223', quantity: 4008 },
  { ip_address: '48.68.162.47', quantity: 4008 },
  { ip_address: '211.251.56.217', quantity: 4008 },
  { ip_address: '134.205.166.77', quantity: 4008 },
  { ip_address: '33.251.228.8', quantity: 4008 },
  { ip_address: '240.134.253.190', quantity: 4008 },
  { ip_address: '77.51.254.7', quantity: 4008 },
  { ip_address: '219.37.108.117', quantity: 4008 },
  { ip_address: '102.61.110.231', quantity: 4008 },
  { ip_address: '209.140.252.213', quantity: 4008 },
  { ip_address: '243.103.36.210', quantity: 4008 },
  { ip_address: '226.54.29.134', quantity: 4008 },
  { ip_address: '170.138.37.205', quantity: 4008 },
  { ip_address: '23.245.174.206', quantity: 4008 },
  { ip_address: '84.233.213.198', quantity: 4008 },
  { ip_address: '214.223.83.19', quantity: 4008 },
  { ip_address: '34.87.125.36', quantity: 4008 },
  { ip_address: '63.47.14.42', quantity: 4008 },
  { ip_address: '80.34.160.37', quantity: 4008 },
  { ip_address: '194.137.219.244', quantity: 4008 },
  { ip_address: '213.155.20.106', quantity: 4008 },
  { ip_address: '209.91.82.165', quantity: 4008 },
  { ip_address: '175.179.79.252', quantity: 4008 },
  { ip_address: '139.54.159.142', quantity: 4008 },
  { ip_address: '218.189.95.95', quantity: 2004 },
  { ip_address: '126.113.82.80', quantity: 2004 },
  { ip_address: '33.90.104.150', quantity: 2004 },
  { ip_address: '102.80.37.115', quantity: 2004 },
  { ip_address: '222.226.197.35', quantity: 2004 },
  { ip_address: '156.86.36.191', quantity: 2004 },
  { ip_address: '233.72.71.95', quantity: 2004 },
  { ip_address: '153.191.152.138', quantity: 2004 },
  { ip_address: '90.164.36.35', quantity: 2004 },
  { ip_address: '65.12.35.252', quantity: 2004 },
  { ip_address: '174.118.255.177', quantity: 2004 },
  { ip_address: '155.141.28.135', quantity: 2004 },
  { ip_address: '33.51.123.116', quantity: 2004 },
  { ip_address: '163.207.169.172', quantity: 2004 },
  { ip_address: '210.252.193.154', quantity: 2004 },
  { ip_address: '205.219.225.38', quantity: 2004 },
  { ip_address: '162.54.122.205', quantity: 2004 },
  { ip_address: '184.242.78.156', quantity: 2004 },
  { ip_address: '141.7.87.218', quantity: 2004 },
  { ip_address: '231.205.5.208', quantity: 2004 },
  { ip_address: '227.124.0.219', quantity: 2004 },
  { ip_address: '101.15.126.3', quantity: 2004 },
  { ip_address: '21.28.113.135', quantity: 2004 },
  { ip_address: '141.38.194.180', quantity: 2004 },
  { ip_address: '175.24.211.114', quantity: 2004 },
  { ip_address: '73.193.161.214', quantity: 2004 },
  { ip_address: '115.217.198.52', quantity: 2004 },
  { ip_address: '199.158.126.63', quantity: 2004 },
  { ip_address: '130.155.233.45', quantity: 2004 },
  { ip_address: '124.212.81.4', quantity: 2004 },
  { ip_address: '13.124.101.171', quantity: 2004 },
  { ip_address: '149.180.42.31', quantity: 2004 }
```

I made some changes in the input file to test the functionality and it is working as expected. Thanks! :)
