# docker-raspberrypi-tutorial1
## Command List for installing docker in Rpasberry pi -

# Setting Up Raspberry pi -

1) sudo apt-get update      — get the update packages

2) sudo apt-get upgrade -y —install all the updates

3) curl -fsSL https://get.docker.com -o get-docker.sh    —get the docker 

4) sudo sh get-docker.sh      — install docker

# Adding group to docker 

If you want to run docker as non-root user then you need to add it to the docker group.

1. Create the docker group if it does not exist

sudo groupadd docker


2. Add your user to the docker group.

sudo usermod -aG docker $USER


3. Log in to the new `docker` group (to avoid having to log out / log in again; but if not enough, try to reboot):

newgrp docker


4. Check if docker can be run without root

docker run hello-world


# Time to run containers in raspberry pi -

## Copy the files from git 

git clone https://github.com/futureautomate/docker-raspberrypi-tutorial1.git

## build the docker container 

docker build -t hello-world-raspberry-pi .

## run the continer

docker run -d -p 80:80 hello-world-raspberry-pi

## Quick Note for running docker in interactive mode - 

docker run -it -p 80:8080 hellonode

## Stop all continers - docker stop $(docker ps -aq)

## remove all containers - docker rm $(docker ps -aq)

## remove all images - docker rmi $(docker images -q)
