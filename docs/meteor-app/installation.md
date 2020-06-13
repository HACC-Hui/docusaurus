---
title: Installation
sidebar_label: Installation
---
## HACC Hui Application

First, download and install [Meteor](https://www.meteor.com/). 

Second, download the HACC Hui source code from [https://github.com/HACC-Hui/HACC-Hui](https://github.com/HACC-Hui/HACC-Hui).

Next, cd to the `HACC-Hui/app/` directory and invoke `meteor npm install`:

```
HACC-Hui/app $ meteor npm install
```

This will download and install the third-party libraries required to run this system. If you are not in the `app` directory and you run `meteor npm install`. You will see something like:
```shell script
HACC-Hui $ meteor npm install
npm WARN saveError ENOENT: no such file or directory, open 'HACC-Hui\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'HACC-Hui\package.json'
npm WARN HACC-Hui No description
npm WARN HACC-Hui No repository field.
npm WARN HACC-Hui No README data
npm WARN HACC-Hui No license field.

up to date in 0.426s
found 0 vulnerabilities

HACC-Hui $
```

To make sure the database starts from an empty state, run:

```
HACC-Hui/app$ meteor reset
Project reset.
HACC-Hui/app $
```

To run the system, invoke this command:

```
HACC-Hui/app$ meteor npm run start
HACC-Hui/app$ meteor npm run start

> hacchui@ start /Users/carletonmoore/Documents/GitHub/HACC-Hui/HACC-Hui/app
> cross-env METEOR_NO_RELEASE_CHECK=1 meteor --settings ../config/settings.development.json --port 3400

[[[[[ ~/Documents/GitHub/HACC-Hui/HACC-Hui/app ]]]]]

=> Started proxy.                             
=> Started MongoDB.                           
W20200613-09:53:02.254(-10)? (STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.
W20200613-09:53:02.290(-10)? (STDERR) While this implementation will work correctly, it is known to be
W20200613-09:53:02.291(-10)? (STDERR) approximately three times slower than the native implementation.
W20200613-09:53:02.291(-10)? (STDERR) In order to use the native implementation instead, run
W20200613-09:53:02.291(-10)? (STDERR) 
W20200613-09:53:02.291(-10)? (STDERR)   meteor npm install --save bcrypt
W20200613-09:53:02.291(-10)? (STDERR) 
W20200613-09:53:02.292(-10)? (STDERR) in the root directory of your application.
I20200613-09:53:03.365(-10)? ⚡️ Bolt app is running on port 3000!
=> Started your app.

=> App running at: http://localhost:3400/
```

This will invoke the "start" script in [package.json](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/package.json), which initializes the database (if empty) with sample data.  Go to [http://localhost:3400](http://localhost:3400) to confirm that the system is running:


<img src="/img/developer/HACC-Hui-landing.png" width="100%"/>

Do not worry about the warning about the pure-JavaScript implementation of bcrypt.

## Additional Tools

During development, you are going to need [ngrok](https://ngrok.com/) to forward the Slack events and messages to the HACC Hui Slackbot. Create a free account and download `ngrok` for your development machine.
