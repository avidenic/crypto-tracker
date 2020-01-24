# Crypto tracker
Tracks top 100 crypto currencies - task for Povio labs.

## Prerequisites
* (__preffered__) [Docker Desktop for Windows or MacOs](https://www.docker.com/products/docker-desktop) or [Docker engine for Linux](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* (_optional_) [NodeJS](https://nodejs.org/en/)
* Open your favorite CLI, navigate to the root of this project
* Depending on your OS, run 
  * Linux or MacOs: `cp src/environments/environment.ts src/environments/environment.dev.ts`
  * Windows (Powershell): `copy-item "src\environments\environment.ts" -Destination "src\environments\environment.dev.ts"`
  * Windows (CMD): `copy src\environments\environment.ts src\environments\environment.dev.ts`
* Using your favourite text editor, open `src/environments/environment.dev.ts` and enter your own Coinmarketcap's api key

## How to run
Using your CLI and being in the root of this project:
* (__preffered__) Run `docker-compose up`
* (_optional_) Run `npm install & npm run start`
* Open your browser and navigate to http://localhost:4200