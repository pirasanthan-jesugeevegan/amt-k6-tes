<p align="center">
 <img src="https://www.adamboddison.com/wp-content/uploads/2020/03/Times_Educational_Supplement_masthead_logo.png" />

 </p>
 <p align="center">
 <img height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/K6-logo.svg/1200px-K6-logo.svg.png" />
  <img height="50px" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png" />
    <img height="50px" src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png" />
      <img height="50px" src="https://influxdata.github.io/branding/img/downloads/influxdata-logo--symbol-preview--castle.svg" />
 </p>
<h1 align="center">K6.io</h1>

This is a POC to demonstrate Performance testing using K6.io with the support of Grafana, docker & Influxdb. I will be using Tes.com to achieve this. 

## Install

1.  clone the repo
2.  `npm install` or 	`yarn install`

## Requirements:

-   Installation  [**k6**](https://k6.io/docs/getting-started/installation/)
-   Installation  [**docker/docker-compose**](https://www.docker.com/get-started)

## Run tests
**Without docker, influxdb and grafana:** 
```
USER_EMAIL=[email] USER_PASSWORD=[password] npm run LoginTest 
```
**With docker, influxdb and grafana:** 
```
USER_EMAIL=[email] USER_PASSWORD=[password] npm run docker:LoginTest 
```



## Technology used:

 - Javascript  
 - NPM
 - K6
 - Docker
 - Grafana
 - Influxdb

## Dashboard
[Grafana's Dashboard](http://localhost:3000/d/k6/k6-load-testing-results?orgId=1&refresh=5s)
