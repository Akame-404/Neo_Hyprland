#!/usr/bin/env bash

scrDir=$(dirname "$(realpath "$0")")

cp -rf $scrDir/.config/* ~/.config 
cp -rf $scrDir/.zshrc ~/
git clone https://github.com/NvChad/starter ~/.config/nvim && nvim
sudo cp -rf $scrDir/Sources/grub .config 
sudo cp -rf $scrDir/Sources/arcs/Neo_Grub /usr/share/grub/themes/
