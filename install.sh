#!/usr/bin/env bash


cat << "EOF"



# ·················································
# : _   _              ___           _        _ _ :
# :| \ | | ___  ___   |_ _|_ __  ___| |_ __ _| | |:
# :|  \| |/ _ \/ _ \   | || '_ \/ __| __/ _` | | |:
# :| |\  |  __/ (_) |  | || | | \__ \ || (_| | | |:
# :|_| \_|\___|\___/  |___|_| |_|___/\__\__,_|_|_|:
# ·················································


EOF

#--------------------------------#
# import variables and functions #
#--------------------------------#
scrDir=$(dirname "$(realpath "$0")")
source "${scrDir}/global.sh"

#--------------------#
# pre-install script #
#--------------------#
if [ ${flg_Install} -eq 1 ] && [ ${flg_Restore} -eq 1 ]; then
     cat << "EOF"


# ·······································································································································································
# :   _  _     _                            _                     _       _     _                             _    __                  _   _                     _  _   :
# : _| || |_  (_)_ __ ___  _ __   ___  _ __| |_  __   ____ _ _ __(_) __ _| |__ | | ___  ___    __ _ _ __   __| |  / _|_   _ _ __   ___| |_(_) ___  _ __  ___   _| || |_ :
# :|_  ..  _| | | '_ ` _ \| '_ \ / _ \| '__| __| \ \ / / _` | '__| |/ _` | '_ \| |/ _ \/ __|  / _` | '_ \ / _` | | |_| | | | '_ \ / __| __| |/ _ \| '_ \/ __| |_  ..  _|:
# :|_      _| | | | | | | | |_) | (_) | |  | |_   \ V / (_| | |  | | (_| | |_) | |  __/\__ \ | (_| | | | | (_| | |  _| |_| | | | | (__| |_| | (_) | | | \__ \ |_      _|:
# :  |_||_|   |_|_| |_| |_| .__/ \___/|_|   \__|   \_/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/  \__,_|_| |_|\__,_| |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/   |_||_|  :
# :                       |_|                                                                                                                                           :
# ·······································································································································································



EOF

    "${scrDir}/starter.sh"
fi

#------------#
# installing #
#------------#
if [ ${flg_Install} -eq 1 ]; then
    cat << "EOF"



# ··········································
# : _           _        _ _ _             :
# :(_)_ __  ___| |_ __ _| | (_)_ __   __ _ :
# :| | '_ \/ __| __/ _` | | | | '_ \ / _` |:
# :| | | | \__ \ || (_| | | | | | | | (_| |:
# :|_|_| |_|___/\__\__,_|_|_|_|_| |_|\__, |:
# :                                  |___/ :
# ··········································


EOF

    #----------------------#
    # prepare package list #
    #----------------------#
    shift $((OPTIND - 1))
    cust_pkg=$1
    cp "${scrDir}/custom_hypr.lst" "${scrDir}/install_pkg.lst"

    if [ -f "${cust_pkg}" ] && [ ! -z "${cust_pkg}" ]; then
        cat "${cust_pkg}" >> "${scrDir}/install_pkg.lst"
    fi

    #--------------------------------#
    # add nvidia drivers to the list #
    #--------------------------------#
    if nvidia_detect; then
        cat /usr/lib/modules/*/pkgbase | while read krnl; do
            echo "${krnl}-headers" >> "${scrDir}/install_pkg.lst"
        done
        nvidia_detect --drivers >> "${scrDir}/install_pkg.lst"
    fi

    nvidia_detect --verbose

    #----------------#
    # get user prefs #
    #----------------#
    if ! chk_list "aurhlpr" "${aurList[@]}"; then
        echo -e "Available aur helpers:\n[1] yay\n[2] paru"
        prompt_timer 120 "Enter option number"

        case "${promptIn}" in
            1) export getAur="yay" ;;
            2) export getAur="paru" ;;
            *) echo -e "...Invalid option selected..." ; exit 1 ;;
        esac
    fi

    if ! chk_list "myShell" "${shlList[@]}"; then
        echo -e "Select shell:\n[1] zsh\n[2] fish"
        prompt_timer 120 "Enter option number"

        case "${promptIn}" in
            1) export myShell="zsh" ;;
            2) export myShell="fish" ;;
            *) echo -e "...Invalid option selected..." ; exit 1 ;;
        esac
        echo "${myShell}" >> "${scrDir}/install_pkg.lst"
    fi

    #--------------------------------#
    # install packages from the list #
    #--------------------------------#
    "${scrDir}/install_pkg.sh" "${scrDir}/install_pkg.lst"
    rm "${scrDir}/install_pkg.lst"
fi

#---------------------------#
# restore my custom configs #
#---------------------------#
if [ ${flg_Restore} -eq 1 ]; then
    cat << "EOF"

# ···································
# :               _                 :
# : _ __ ___  ___| |_ ___  _ __ ___ :
# :| '__/ _ \/ __| __/ _ \| '__/ _ \:
# :| | |  __/\__ \ || (_) | | |  __/:
# :|_|  \___||___/\__\___/|_|  \___|:
# ···································

EOF

    "${scrDir}/install_pst.sh"

fi

#---------------------#
#    script #
#---------------------#
if [ ${flg_Install} -eq 1 ] && [ ${flg_Restore} -eq 1 ]; then
  cat << "EOF"


# ·····················································
# :                 _        _           _        _ _ :
# : _ __   ___  ___| |_     (_)_ __  ___| |_ __ _| | |:
# :| '_ \ / _ \/ __| __|____| | '_ \/ __| __/ _` | | |:
# :| |_) | (_) \__ \ ||_____| | | | \__ \ || (_| | | |:
# :| .__/ \___/|___/\__|    |_|_| |_|___/\__\__,_|_|_|:
# :|_|                                                :
# ·····················································


EOF

    "${scrDir}/install_pst.sh"
fi

#------------------------#
# enable system services #
#------------------------#
if [ ${flg_Service} -eq 1 ]; then
    cat << "EOF"



# ·······································
# :                     _               :
# : ___  ___ _ ____   _(_) ___ ___  ___ :
# :/ __|/ _ \ '__\ \ / / |/ __/ _ \/ __|:
# :\__ \  __/ |   \ V /| | (_|  __/\__ \:
# :|___/\___|_|    \_/ |_|\___\___||___/:
# ·······································


EOF
    while read servChk; do

        if [[ $(systemctl list-units --all -t service --full --no-legend "${servChk}.service" | sed 's/^\s*//g' | cut -f1 -d' ') == "${servChk}.service" ]]; then
            echo -e "\033[0;33m[SKIP]\033[0m ${servChk} service is active..."
        else
            echo -e "\033[0;32m[systemctl]\033[0m starting ${servChk} system service..."
            sudo systemctl enable "${servChk}.service"
            sudo systemctl start "${servChk}.service"
        fi

    done < "${scrDir}/system_ctl.lst"
fi