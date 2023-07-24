---
layout: post
title:  "Optimizing Your Workflow: The Power of Aliases"
date:   2023-07-14 22:30:01 -0400
categories: linux
tags: bash alias devops
toc: true
toc_sticky: true
---

As DevOps, MLOps, or software engineers, we're always looking for ways to increase productivity and optimize our workflows. A fantastic method to achieve this in a bash environment is by using **aliases**. 

## Why Use Aliases?

Aliases allow us to shorten complex commands or group of commands into memorable, succinct alternatives. The benefits of this include saving time, reducing the possibility of human errors, and making repetitive tasks less tedious.

If you are working with a wide range of tools - from **Docker** to **SSH**, from network management to file manipulation - aliases can greatly simplify your interactions with the terminal.

To illustrate the power of aliases, let's dive into an example of a robust alias list that a DevOps expert might use in their daily work:

```bash
# Get External IP / local IPs
alias extip="curl ipinfo.io/ip"
alias ips="ifconfig -a | perl -nle'/(\d+\.\d+\.\d+\.\d+)/ && print $1'"
alias speedtest="wget -O /dev/null http://speedtest.wdc01.softlayer.com/downloads/test10.zip"

# Quickly serve the current directory as HTTP
alias httprb='ruby -run -e httpd . -p 8000'
alias httpy='python -m http.server 8000'
alias httpjs='http-server'

# Docker container management
alias dpa='docker ps -a'
alias dps='docker ps'
alias dst='docker stats'
alias dstart='docker start'
alias dstop='docker stop'
alias drestart='docker restart'
alias dexec='docker exec -it'
alias drun='docker run'
alias dlogs='docker logs'

# Docker image management
alias dimages='docker images'
alias dinspect='docker image inspect'
alias dremove='docker image rm'

# Docker volume management
alias dvolumes='docker volume ls'
alias dvinspect='docker volume inspect'
alias dvr='docker volume rm'

# Docker network management
alias dnetworks='docker network ls'
alias dninspect='docker network inspect'
alias dnrm='docker network rm'

# Docker-compose aliases
alias dcup='docker-compose up'
alias dcdown='docker-compose down'
alias dcrestart='docker-compose restart'
alias dcb='docker-compose build'
alias dcpull='docker-compose pull'
alias dcps='docker-compose ps'
alias dclogs='docker-compose logs'

# Dockerfile build, e.g., $dbu docker/test
dbu() { docker build -t=$1 .; }

# Show all alias related docker
dalias() { alias | grep 'docker' | sed "s/^\([^=]*\)=\(.*\)/\1 => \2/"| sed "s/['|\']//g" | sort; }

# Listing files
alias l='ls -al'
alias ltr='ls -ltr'
alias lth='l -t|head'
alias lh='ls -Shl | less'
alias tf='tail -f -n 100'

# Networking - Security and Troubleshooting
alias ports='netstat -tuln'
alias ping='ping -c 5'
alias traceroute='traceroute -I'
alias ifc='ifconfig'
alias iw='iwconfig'
alias arp='arp -a'
alias nslookup='nslookup -type=any'
alias dig='dig +nocmd'
alias nmap='sudo nmap'
alias tcpdump='sudo tcpdump -i any'
alias ss='ss -tunlp'
alias mtr='sudo mtr'
alias http='curl -I'
alias headers='curl -I'

# Network Analysis and Monitoring
alias iftop='sudo iftop -nNP'
alias ngrep='sudo ngrep -d any'

# SSH
alias ssh='ssh -o StrictHostKeyChecking=no'
alias ssha='ssh-add'

# Wireless
alias wifi='nmcli device wifi list'
alias wifion='nmcli radio wifi on'
alias wifioff='nmcli radio wifi off'

# Network File Transfer
alias sftp='sftp -oBatchMode=no'
alias scp='scp -oBatchMode=no'

# Firewall
alias fwlist='sudo iptables -L -n -v --line-numbers'
alias fwc='sudo ufw enable'
alias fwa='sudo ufw allow'
alias fwi='sudo ufw deny'
alias fws='sudo ufw status'

# Disk Usage
alias duh='du -h'
alias duf='du -sh * | sort -rh'

# File Information
alias fileinfo='file -b'
alias filemime='file -i'

# Disk Usage Statistics
alias dfh='df -h'
alias dfi='df -i'
alias mount='mount | column -t'

# File Comparison
alias diff='colordiff'

#

 Archive Creation
alias tarc='tar -czvf'
alias tarx='tar -xzvf'

# Archive Extraction
alias un7z='7z x'
alias unrar='unrar x'
alias untar='tar -xzvf'
alias unzip='unzip -o'
```

As you can see, these aliases encompass a variety of functions and tools, from listing local and external IP addresses (`extip`, `ips`), Docker management (`dpa`, `dps`, `dst`), to file operations (`l`, `lh`, `tf`) and more. 

By utilizing these aliases, a user can execute complex commands with just a few keystrokes, making their work faster and more efficient. Furthermore, these aliases are easily adaptable to any Linux distribution, making them a highly portable tool in any engineer's toolkit.

## Conclusion

In the world of DevOps and MLOps, every second counts. Streamlining your workflow using bash aliases can be a game-changer, allowing for faster execution of tasks, reduced likelihood of errors, and overall improved productivity. It's time to make the most out of your bash environment, and aliases are the perfect place to start.
