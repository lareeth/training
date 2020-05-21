# Containers

## What is a container


```
docker run demo
```

We can see that the application is running, but we cant connect

```
docker ps
```

This shows us the containers running on our machine, you can see a unique container id, and the image
The ports section is empty, which shows us that we havent forwarded the ports inside the container to our machine

```
docker run -it -p 3000:3000 demo
```


## Docker

## Image Hosting
- Docker hub