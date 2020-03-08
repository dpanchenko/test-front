# Test API

## Environment

 - Development environment
`Node v12.13.1`

## Start

 - Clone or download this repository
``` bash
git clone git@github.com:dpanchenko/test-front.git
```

 - Enter your local directory, and install dependencies:

``` bash
npm i
```

 - Open and edit `public/config.json` file, put proper test-api url inside:

``` json
{
  "API_URL": "<put proper test-api url here>",
  "API_PREFIX": ""
}
```

## Commands

``` bash
# run server in development mode
npm start
```

``` bash
# run build and prepare prod build
npm run build
```

