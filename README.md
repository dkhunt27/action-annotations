# action-annotations

Annotates your git action

## Setup

> First, you'll need to have a reasonably modern version of `node` handy. This won't work with versions older than 9, for instance.

Install the dependencies  

```bash
npm install
```

Build the typescript and package it for distribution

```bash
npm run build && npm run package
```

Run the tests :heavy_check_mark:  

```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```


## Inputs

```yaml
  type: 
    required: false
    description: 'The type of annotation: error, warning, or notice (default)'
    default: 'notice'
  msg: 
    required: true
    description: 'Message for annotation'
```

## Usage
  
```yaml
      - name: Annotate 
        uses: dkhunt27/action-annotations@v1
        with:
          type: notice
          msg: Annotate This!
```
  
## Making changes and pushing releases

- wait for pipelines to finish
- git checkout main
- git pull
- git tag v0.3.0
- SKIP_HOOKS=true git push origin v0.3.0
- in github, edit tag and save (this will push to marketplace)

## NPM Check

```bash
npx npm-check

npm run npm:check
```

## License

[MIT](LICENSE)
