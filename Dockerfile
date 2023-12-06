ARG APP_NAME=frontend

FROM node:20.10.0-alpine3.18

ARG APP_NAME

WORKDIR /usr/src/frontend

# Copy package.json (and package-lock.json)
COPY package.json ./
COPY package-lock.json* ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy application files
COPY . .

# Step 6: Build the application (if necessary)
RUN npm run build

EXPOSE 3000

# Step 7: Start command
CMD ["npm", "start"]
