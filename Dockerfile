# Use an Alpine-based Python image
FROM python:3.11-alpine

# Set the working directory in the container
WORKDIR /usr/src/backend

# Install necessary packages for psycopg2-binary
RUN apk update && \
    apk add postgresql-dev gcc python3-dev musl-dev libffi-dev


# Install Python packages
RUN pip install --upgrade pip
COPY requirements.txt ./
RUN pip install -r requirements.txt

# Copy the rest of your application's code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Define the command to run your app
CMD ["python", "manage.py", "runserver"]
