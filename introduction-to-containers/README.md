# Containers

## What is a container
https://www.docker.com/resources/what-container

## Open Container Initiative
https://github.com/opencontainers/image-spec

## Installing a container runtime

* Docker - https://docs.docker.com/get-docker/ *(Recommended)*
* Podman - https://podman.io/getting-started/installation

## Getting Started
### How to build a container
We have added the parameter `-t` to the command which allows us to tag the container with a readable name

```console
docker build -t demo .
```
### How to run a container
```console
docker run demo
```
### How to connect
We can see that the application is running, but we cant connect

```console
docker ps
```
```
CONTAINER ID    IMAGE    COMMAND                  CREATED            STATUS           PORTS     NAMES
8e9ee6083a58    demo     "docker-entrypoint.s…"   13 seconds ago     Up 13 seconds              epic_easley
```
This shows us the containers running on our machine, you can see a unique container id, and the image

The ports section is empty, which shows us that we havent forwarded the ports inside the container to our machine

```console
docker run -p 3000:3000 demo
```
```
CONTAINER ID    IMAGE   COMMAND                  CREATED         STATUS         PORTS                    NAMES
dd3a0143aba4    demo    "docker-entrypoint.s…"   4 seconds ago   Up 4 seconds   0.0.0.0:3000->3000/tcp   xenodochial_kapitsa
```

We have added the parameter `-p` to the command which allows us to forward the port to our local machine

```console
docker run -it -p 3000:3000 demo
```

We can also add the `-it` parameter so that the pod is removed after we have run it, this is useful if you need to test the container over and over, as you dont need to remove the old container that would be using the port

### Adding Environment Variables
If you need to pass configuration or settings to the application, you can use environment variables to do so. The `-e` parameter is a key pair
```console
docker run -e KEY=VALUE -it -p 3000:3000 demo
```

## Troubleshooting
### Viewing Logs
```console
docker logs <container name>
```


## Image Hosting

### Docker Hub
https://hub.docker.com/

```console
docker login
```

```console
docker build -t lareeth/demo:latest .
```

```console
docker push lareeth/demo:latest
```