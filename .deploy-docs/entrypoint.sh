#!/bin/sh -l
apt-get -y update
apt-get -y upgrade
apt-get -y install curl software-properties-common gnupg apt-transport-https
curl -sL https://deb.nodesource.com/setup_11.x | bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
apt-get -y install yarn
yarn install