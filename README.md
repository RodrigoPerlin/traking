# Encontre.com

This app is built on the [Next.js](https://nextjs.org/) starter project created with the[`create-next-app`] tool and includes Material UI integration for a more enjoyable experience."

To access the tracking page, use the tracking code below.

```bash
10Aa  
```
or
```bash
2020
```

## 📋 Requirements

To run the project locally, make sure you have [Node](https://nodejs.org/en/download) installed on your machine, with a version equal to or greater than 18.

## 🚀 How to use

[Clone the repo](https:/git@github.com:RodrigoPerlin/traking.git):


```bash
git clone git@github.com:RodrigoPerlin/traking.git
```

Install it and run:

```bash
npm install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 🔩  Running the tests

To perform all unit testing, you can simply use the following command:

* [Jest](https://jestjs.io/pt-BR/) - Testing Framework used for unit testing.  
```bash
yarn test
```

* [Cypress](https://docs.cypress.io/guides/overview/why-cypress) - E2E Testing Tool.  

```bash
yarn cy:run
```

## 🛠️ Built with

* [Next.js](https://nextjs.org/) - The web framework used
* [Styled-components](https://styled-components.com/) - Library that allows you to write CSS in JS.
* [PWA](https://pt.wikipedia.org/wiki/Progressive_web_app) - Progressive Web App.
* [Mui](https://mui.com/) - Customizable, and accessible library of React components.

## 📦 Environments
It is possible to use Docker to run encontre.com, using the following steps:

-  In the project root folder, open the terminal and run the following command to create the image:

```bash
docker build -t docker-next .
```
-  In the root folder, run the next command once the previous one is complete, to run the image inside the container.
```bash
docker run -p 3000:3000 --rm -d  docker-next:latest
```
-  When finished, to view the process, open the browser to the port http://localhost:3000/
