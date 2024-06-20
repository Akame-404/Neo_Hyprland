#!/usr/bin/env bash

scrDir=$(dirname "$(realpath "$0")")

cp -rf $scrDir/.config/* ~/.config 