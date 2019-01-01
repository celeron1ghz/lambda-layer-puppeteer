#!/bin/sh
cd `dirname $0`
cd font

echo building...

if [ -d .fontconfig ]; then
    rm -Rf .fontconfig
fi

mkdir -p .fontconfig
chmod 0777 .fontconfig

docker run \
    -v "$PWD:/var/task" \
    -v "$PWD/.fontconfig:/tmp/result:rw" \
    -it lambci/lambda:nodejs8.10 \
    handler.fontcache

chmod 0755 .fontconfig
