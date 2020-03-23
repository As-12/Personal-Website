#!/bin/sh

rm -rf dist
mkdir dist
cp -r ./src/css ./dist
cp ./src/*.html ./dist
cp -r ./src/assets ./dist
cp -r ./src/app.js ./dist