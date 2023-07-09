 
# Project Title : Sylvr Assignment


This assignment is a full stack application where a new user can create an account or login to their account and can update their account details.

## Demo
Link : - https://sylver-frontend.vercel.app/



## Authors

- [@Shivampasvan](https://github.com/Shivampasvan)

## Screenshots 

## Home Page
![home](https://github.com/Shivampasvan/sylvr-full-assignment/assets/112854390/90c53a76-a4cd-4a72-aede-5e99a62d32f5)



## SignUp Page
![signup](https://github.com/Shivampasvan/sylvr-full-assignment/assets/112854390/4ba7dc25-3312-46ac-84eb-78b87c8b35b9)



## Login Page
![login](https://github.com/Shivampasvan/sylvr-full-assignment/assets/112854390/776e8546-988d-45d3-bf13-97c37735e39e)



## Update
![update](https://github.com/Shivampasvan/sylvr-full-assignment/assets/112854390/8b5af442-3d9c-45be-9bc1-7151c81f779a)




## Features

- LogIn
- SignUp
- Update

## To Dockerize a React app, you can follow these steps:

1. Create a Dockerfile in the root directory of your React app.
   
   touch Dockerfile
   

2. Open the Dockerfile in a text editor and add the following content:

Dockerfile
# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the app source code to the container
COPY . .

# Build the app for production
RUN npm run build

# Expose the container's port (adjust if necessary)
EXPOSE 3000

# Start the app when the container launches
CMD ["npm", "start"]


3. Save the Dockerfile.

4. Build the Docker image by running the following command in the same directory as the Dockerfile:
   
   docker build -t my-react-app .
   

   This command builds the Docker image and tags it with the name "my-react-app". You can replace "my-react-app" with your desired image name.

5. Once the build is complete, you can run a container using the newly created image:
   
   docker run -p 3000:3000 my-react-app
   

   This command runs a container using the image and maps port 3000 of the container to port 3000 on the host machine. You can change the port mapping if necessary.

6. Access your React app in a web browser at `http://localhost:3000`.

That's it! Your React app is now Dockerized and running inside a container. Make sure to replace "my-react-app" with the desired name for your Docker image.


## Feedback

If you have any feedback, please reach out to us at shivampasvan@gmail.com
