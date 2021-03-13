---
title: Reset the database
---

It is often useful to restart HACC-Hui with a new database. This involves:

  1. Stopping the HACC-Hui service.
  2. Dropping the MongoDB database.
  3. Edit the settings..json file to point to the new database to load on startup.
  4. Shutdown all the docker processes.
  5. Restart the docker processes.

## Stop HACC-Hui

First, find the running docker containers and stop the hacchui container.

```shell
$ docker ps
CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS              PORTS                                                    NAMES
4cdfb3474cf3        certbot/certbot         "/bin/sh -c 'trap ex…"   25 hours ago        Up 25 hours         80/tcp, 443/tcp                                          hacchuidocker_certbot_1
1cb7d4c9785b        hacchui/hacchui:1.1.0   "docker-entrypoint.s…"   25 hours ago        Up 25 hours         0.0.0.0:3100->3100/tcp, 80/tcp, 0.0.0.0:8888->8888/tcp   hacchuidocker_hacchui_1
f825da05de1e        mongo:4.0.5             "docker-entrypoint.s…"   25 hours ago        Up 25 hours         127.0.0.1:27017->27017/tcp                               hacchui-mongo

$ docker stop [container]
```

## Drop database

Second, drop the database by invoking this command:

```shell
$ docker exec hacchui-mongo mongo radgrad --eval "db.dropDatabase();"
```

## Edit settings

Third, edit the config/settings.production.json file to specify the new database.

This usually involves changing the value of the field "databaseRestoreFileName".

## Stop the Docker processes

Fourth, stop the docker processes.

```shell
$ docker-compose down
```

## Restart with updated settings

Finally, restart the docker processes.

```shell
$ ./docker-compose-run.sh
```
