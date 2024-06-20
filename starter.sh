#!/usr/bin/env bash



# .----------------------------------.
# |      _             _             |
# |  ___| |_ __ _ _ __| |_ ___ _ __  |
# | / __| __/ _` | '__| __/ _ \ '__| |
# | \__ \ || (_| | |  | ||  __/ |    |
# | |___/\__\__,_|_|   \__\___|_|    |
# '----------------------------------'



# Update All Packages
sudo pacman -Syu && yay -Syu

# ZSH
scrDir=$(dirname "$(realpath "$0")")

# Check if curl and git are installed
command -v curl >/dev/null 2>&1 || { echo >&2 "Error: curl is not installed."; exit 1; }
command -v git >/dev/null 2>&1 || { echo >&2 "Error: git is not installed."; exit 1; }

# Install Oh My Zsh if not installed
if [ ! -d ~/.oh-my-zsh ]; then
    yay -S zsh && sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
fi

# Backup or overwrite .zshrc
if [ -f ~/.zshrc ]; then
    cat .zshrc > ~/.zshrc
else
    cp -f .zshrc ~/.zshrc
fi

#hyprland files
if [ ! -f ~/.config ]; then
mkdir ~/.config
fi

# Function to clone plugins
clone_plugin() {
    git clone $1 $2
}

# Clone plugins and theme
if [ ! -d ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions ]; then
    clone_plugin https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
fi
if [ ! -d ~/.oh-my-zsh/custom/plugins/zsh-256color ]; then
    clone_plugin https://github.com/chrissicool/zsh-256color ~/.oh-my-zsh/custom/plugins/zsh-256color
fi

if [ ! -d ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting ]; then
    clone_plugin https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
fi

if [ ! -d ~/.oh-my-zsh/custom/themes/powerlevel10k ]; then
    clone_plugin https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/custom/themes/powerlevel10k
fi


# Grub
if pkg_installed grub && [ -f /boot/grub/grub.cfg ]; then
    echo -e "\033[0;32m[BOOTLOADER]\033[0m detected // grub"

    if [ ! -f /etc/default/grub.t2.bkp ] && [ ! -f /boot/grub/grub.t2.bkp ]; then
        echo -e "\033[0;32m[BOOTLOADER]\033[0m configuring grub..."
        sudo cp /etc/default/grub /etc/default/grub.t2.bkp
        sudo cp /boot/grub/grub.cfg /boot/grub/grub.t2.bkp

        if nvidia_detect; then
            echo -e "\033[0;32m[BOOTLOADER]\033[0m nvidia detected, adding nvidia_drm.modeset=1 to boot option..."
            gcld=$(grep "^GRUB_CMDLINE_LINUX_DEFAULT=" "/etc/default/grub" | cut -d'"' -f2 | sed 's/\b nvidia_drm.modeset=.\b//g')
            sudo sed -i "/^GRUB_CMDLINE_LINUX_DEFAULT=/c\GRUB_CMDLINE_LINUX_DEFAULT=\"${gcld} nvidia_drm.modeset=1\"" /etc/default/grub
        fi

        echo -e "Select grub theme:\n[1] Retroboot (dark)\n[2] Neo (dark)"
        read -p " :: Press enter to skip grub theme <or> Enter option number : " grubopt
        case ${grubopt} in
            1) grubtheme="Retroboot" ;;
            2) grubtheme="Neo" ;;
            *) grubtheme="None" ;;
        esac

        if [ "${grubtheme}" == "None" ]; then
            echo -e "\033[0;32m[BOOTLOADER]\033[0m Skipping grub theme..."
            sudo sed -i "s/^GRUB_THEME=/#GRUB_THEME=/g" /etc/default/grub
        else
            echo -e "\033[0;32m[BOOTLOADER]\033[0m Setting grub theme // ${grubtheme}"
            sudo tar -xzf ${cloneDir}/Source/arcs/Grub_${grubtheme}.tar.gz -C /usr/share/grub/themes/
            sudo sed -i "/^GRUB_DEFAULT=/c\GRUB_DEFAULT=saved
            /^GRUB_GFXMODE=/c\GRUB_GFXMODE=1920x1080x32,auto
            /^GRUB_THEME=/c\GRUB_THEME=\"/usr/share/grub/themes/${grubtheme}/theme.txt\"
            /^#GRUB_THEME=/c\GRUB_THEME=\"/usr/share/grub/themes/${grubtheme}/theme.txt\"
            /^#GRUB_SAVEDEFAULT=true/c\GRUB_SAVEDEFAULT=true" /etc/default/grub
        fi

        sudo grub-mkconfig -o /boot/grub/grub.cfg
    else
        echo -e "\033[0;33m[SKIP]\033[0m grub is already configured..."
    fi
fi


# systemd-boot
if pkg_installed systemd && nvidia_detect && [ $(bootctl status 2> /dev/null | awk '{if ($1 == "Product:") print $2}') == "systemd-boot" ]; then
    echo -e "\033[0;32m[BOOTLOADER]\033[0m detected // systemd-boot"

    if [ $(ls -l /boot/loader/entries/*.conf.t2.bkp 2> /dev/null | wc -l) -ne $(ls -l /boot/loader/entries/*.conf 2> /dev/null | wc -l) ]; then
        echo "nvidia detected, adding nvidia_drm.modeset=1 to boot option..."
        find /boot/loader/entries/ -type f -name "*.conf" | while read imgconf; do
            sudo cp ${imgconf} ${imgconf}.t2.bkp
            sdopt=$(grep -w "^options" ${imgconf} | sed 's/\b quiet\b//g' | sed 's/\b splash\b//g' | sed 's/\b nvidia_drm.modeset=.\b//g')
            sudo sed -i "/^options/c${sdopt} quiet splash nvidia_drm.modeset=1" ${imgconf}
        done
    else
        echo -e "\033[0;33m[SKIP]\033[0m systemd-boot is already configured..."
    fi
fi

# pacman
if [ -f /etc/pacman.conf ] && [ ! -f /etc/pacman.conf.t2.bkp ]; then
    echo -e "\033[0;32m[PACMAN]\033[0m adding extra spice to pacman..."

    sudo cp /etc/pacman.conf /etc/pacman.conf.t2.bkp
    sudo sed -i "/^#Color/c\Color\nILoveCandy
    /^#VerbosePkgLists/c\VerbosePkgLists
    /^#ParallelDownloads/c\ParallelDownloads = 5" /etc/pacman.conf
    sudo sed -i '/^#\[multilib\]/,+1 s/^#//' /etc/pacman.conf

    sudo pacman -Syyu
    sudo pacman -Fy

else
    echo -e "\033[0;33m[SKIP]\033[0m pacman is already configured..."
fi
