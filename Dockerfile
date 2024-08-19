# Takes this as base Image and inherits it's configrations
FROM node:14

# working directory path
WORKDIR /app

# Copying all stuff from current directory to /app directory
COPY . /app

# Install node modules
RUN npm install

# publically available the port 8000
EXPOSE 8000

# Execute npm script command to execute the program
CMD ["npm", "run", "start"]
