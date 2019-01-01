'use strict';

// this file using only for building font-cache
// not use in lambda env :-)

const exec = require('child_process').execSync;

module.exports.fontcache = async (event, context) => {
  process.env.HOME = process.env.LAMBDA_TASK_ROOT;

  const fontdir = `${process.env.HOME}/.fonts`;
  const tempdir = "/tmp/cache/fontconfig/";

  console.log(exec(`fc-cache -v ${fontdir}`).toString());
  //console.log(exec(`ls ${process.env.HOME}`).toString());
  //console.log(exec(`ls -la ${tempdir}`).toString());
  console.log(exec(`cp ${tempdir}\* /tmp/result`).toString());

  return { message: 'OK' };
};
