# puppeteer-on-lambda
Building puppeteer and japanese font Lambda layer

## HOW TO USE

1. Put font file (*.ttc) into `font/.fonts/`

2. Run build script `sh build.sh`

3. Deploy! `sls deploy`

4. Use layer in other serverless script

#### in serverless.yml
```
functions:
  main:
    handler: handler.main
    layers:
      - Fn::Join: [ ":", [ "arn:aws:lambda", { Ref: AWS::Region }, { Ref: AWS::AccountId }, "layer:puppeteer:1" ] ]
      - Fn::Join: [ ":", [ "arn:aws:lambda", { Ref: AWS::Region }, { Ref: AWS::AccountId }, "layer:japanese_font:1" ] ]
```

#### in handler.js
```
module.exports.main = async (event, context) => {
  process.env.HOME = "/opt/"; //ADD THIS LINE
};
```
