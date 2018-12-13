# Guide
https://reactjs.org/docs

## Set up nodejs project
https://docs.npmjs.com/cli/init.html

## install babel
npm init -y
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
Set up .babelrc
'''json
{
    "presets": ["@babel/preset-env","@babel/preset-react"]
}
''''

## Run Babel
'''bash
./node_modules/.bin/babel --watch src --out-dir out
''''

## Install React Developer Tools (Chrome Extension)