# BDSP Demo

This is a small demo app to demonstrate the power of Docker.

Build the app:

```
docker build -t wi19b034/fragen-demo .
```

Push image to Docker Hub:

```
docker push wi19b034/fragen-demo
```

Create a network:

```
docker network create demonet
```

Create a database:

```
docker run --name database --network demonet -d -e POSTGRES_PASSWORD=password postgres
```

Finally, run the app:

```
docker run -d \
  --name app \
  --network demonet \
  -e POSTGRES_URL=postgresql://postgres:password@database/postgres \
  -e QUESTION1="Worin unterscheidet sich ein Docker Container zu VMs?" \
  -e QUESTION2="Welche drei grundsätzlichen Probleme der Programmierung will Docker lösen?" \
  -e QUESTION3="In welcher Programmiersprache wurde Docker geschrieben?" \
  -p 80:3000 \
  wi19b034/fragen-demo
```
