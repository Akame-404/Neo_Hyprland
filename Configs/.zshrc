# Path to your Oh My Zsh installation.
export ZSH="$HOME/.oh-my-zsh"

#ZSH_Theme
ZSH_THEME="powerlevel10k/powerlevel10k"

# List of plugins used
plugins=(git z git zsh-autosuggestions zsh-syntax-highlighting)
source $ZSH/oh-my-zsh.sh


alias  c='clear' # clear terminal
alias  l='eza -lh  --icons=auto' # long list
alias ls='eza -1   --icons=auto' # short list
alias ll='eza -lha --icons=auto --sort=name --group-directories-first' # long list all
alias ld='eza -lhD --icons=auto' # long list dirs
alias lt='eza --icons=auto --tree' # list folder as tree
alias un='$aurhelper -Rns' # uninstall package
alias up='$aurhelper -Syu' # update system/package/aur
alias pl='$aurhelper -Qs' # list installed package
alias pa='$aurhelper -Ss' # list availabe package
alias pc='$aurhelper -Sc' # remove unused cache
alias po='$aurhelper -Qtdq | $aurhelper -Rns -' # remove unused packages, also try > $aurhelper -Qqd | $aurhelper -Rsu --print -
alias vc='code' # gui code editor
alias zshconfig="mate ~/.zshrc"
alias ohmyzsh="mate ~/.oh-my-zsh"
alias m="nvim"
alias sm="sudo nvim"
alias pacmans="sudo pacman"
alias ls="lsd"
alias vim="nvim"
alias open="xdg-open"
alias sudom="sudo vim"
alias glc="git clone"
#alias exegol="~/app/Exegol/./exegol.py"
alias s="sudo"
alias wesh="history | grep"
alias ip="ip -c"
alias upme="yay -Syu && pacmans -Syu"
alias blueon="sudo systemctl restart bluetooth.service"
alias blueoff="sudo systemctl stop bluetooth.service"
alias notionpid="ps -ef | grep "notion""
alias update-grub="sudo grub-mkconfig -o /boot/grub/grub.cfg "$@""
alias show-timezone="timedatectl list-timezones"
alias set-timezone="timedatectl set-timezone"
# Handy change dir shortcuts
alias ..='cd ..'
alias ...='cd ../..'
alias .3='cd ../../..'
alias .4='cd ../../../..'
alias .5='cd ../../../../..'

# Always mkdir a path (this doesn't inhibit functionality to make a single dir)
alias mkdir='mkdir -p'

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
