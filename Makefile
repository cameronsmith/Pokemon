# We want to use spaces not tabs
.RECIPEPREFIX +=
.PHONY: *

build:
    docker-compose up --build
up:
    docker-compose up
up-d:
    docker-compose up -d
down:
    docker-compose down
test:
    docker exec -it react-app eslint .
help:
    @echo "build  - Install, launch, and run tests on the application.\nup-d       - Launch the application in deamon mode.\ndown     - Close the application.\nup       - Launch the application.\ndown     - Close the application.\ntest     - Run tests for the application.\nhelp     - This message.\n"
