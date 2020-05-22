# The FROM command selects the docker image we want to use as the base image for our container
FROM node:14

# We need to add the files from the machine into the image, they do not get copied automatically
ADD ./src/package.json ./

# Any commands you would normally run need to be added, such as npm install to install packages
RUN npm install

# Finally we can add our code to the image
ADD ./src/index.js ./

# This is the command that will be run when the container starts up when run
CMD node index.js