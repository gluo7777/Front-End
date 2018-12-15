#!/bin/bash
# Set up Babel to actively compile JSX file into JS
echo "Started watch..."
babel="./node_modules/.bin/babel"
watch=$1
output=$2
$babel --watch "$watch" --out-dir "$output"