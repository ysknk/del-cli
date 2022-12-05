# glob-del

## Description

delをcli化。globで複数ファイルを指定して削除できるようにしたもの。  
引数を渡すことでdelを実行することができる。  

## Requirement

* Node.js -> check cmd `node -v`

## Install

```sh
npm i -D https://github.com/ysknk/glob-del.git
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
npm run del -- --help
```

### ex) set options

project root `.delrc.js`  
or  
cli `npm run del -- -cwd \"./test/\" -src \"**/[!_]*.js\" -dryRun true
`
