# del-cli

## Description

delのcli化したもの。  
引数を渡すことでdelを実行することができる。  

## Requirement

* Node.js -> check cmd `node -v`

## Install

```sh
npm i -D https://github.com/ysknk/del-cli.git
```

## Usage

### add script in package.json

```json
{
  "scripts": {
    "del": "del"
  },
}
```

```sh
# check arguments help
npm run del-cli -- --help
```

### ex) set options

project local dir `.delrc.js`  
or  
cli `npm run del-cli -- -base "./test/" -src "**/[!_]*.js" -dryRun true
`
