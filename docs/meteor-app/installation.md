---
title: Installation
sidebar_label: Installation
---
## HACC Hui Meteor Application

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

Copy the `example.env` file to `.env`. This is necessary for the Bolt slackbot. Don't worry about the values for the token and signing secret. We'll change them later.

To make sure the database starts from an empty state, run:

```
HACC-Hui/app$ meteor reset
Project reset.
HACC-Hui/app $
```

To run the system, invoke this command:

```
HACC-Hui/app$ meteor npm run start


> hacc-hui@ start ~/HACC-Hui/app
> cross-env METEOR_NO_RELEASE_CHECK=1 meteor --settings ../config/settings.development.json --port 3400

[[[[[ ~/HACC-Hui/app ]]]]]

=> Started proxy.                             
=> Started MongoDB.                           
W20200616-12:49:22.460(-10)? (STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.
W20200616-12:49:22.509(-10)? (STDERR) While this implementation will work correctly, it is known to be
W20200616-12:49:22.509(-10)? (STDERR) approximately three times slower than the native implementation.
W20200616-12:49:22.510(-10)? (STDERR) In order to use the native implementation instead, run
W20200616-12:49:22.510(-10)? (STDERR) 
W20200616-12:49:22.510(-10)? (STDERR)   meteor npm install --save bcrypt
W20200616-12:49:22.510(-10)? (STDERR) 
W20200616-12:49:22.511(-10)? (STDERR) in the root directory of your application.
I20200616-12:49:23.862(-10)? Creating the default user(s)
I20200616-12:49:23.862(-10)?   Creating user admin@foo.com.
I20200616-12:49:24.130(-10)?   Creating user john@foo.com.
I20200616-12:49:25.314(-10)? ⚡️ Bolt app is running on port 3000!
I20200616-12:49:25.480(-10)? Loading database from file database/2020-06-16-11-34-22.json, dumped an hour ago.
I20200616-12:49:25.481(-10)? Defining 0 AdministratorCollection documents.
I20200616-12:49:25.481(-10)? Have 0 documents.
I20200616-12:49:25.481(-10)? Defining 3 InterestCollection documents.
I20200616-12:49:25.546(-10)? Have 3 documents.
I20200616-12:49:25.547(-10)? Defining 3 SkillCollection documents.
I20200616-12:49:25.606(-10)? Have 3 documents.
I20200616-12:49:25.606(-10)? Defining 3 ToolCollection documents.
I20200616-12:49:25.663(-10)? Have 3 documents.
I20200616-12:49:25.664(-10)? Defining 4 ChallengeCollection documents.
I20200616-12:49:25.828(-10)? Have 4 documents.
I20200616-12:49:25.829(-10)? Defining 0 DeveloperCollection documents.
I20200616-12:49:25.830(-10)? Have 0 documents.
I20200616-12:49:25.831(-10)? Defining 0 TeamCollection documents.
I20200616-12:49:25.831(-10)? Have 0 documents.
I20200616-12:49:25.832(-10)? Defining 0 SlackUserCollection documents.
I20200616-12:49:25.832(-10)? Have 0 documents.
I20200616-12:49:25.832(-10)? Finished loading database.
=> Started your app.

=> App running at: http://localhost:3400/

```

This will invoke the "start" script in [package.json](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/package.json), which initializes the database (if empty) with sample data.  Go to [http://localhost:3400](http://localhost:3400) to confirm that the system is running:


<img src="/img/developer/HACC-Hui-landing.png" width="100%"/>

Do not worry about the warning about the pure-JavaScript implementation of bcrypt.

## Additional Tools

During development, you are going to need [ngrok](https://ngrok.com/) to forward the Slack events and messages to the HACC Hui Slackbot. Create a free account and download `ngrok` for your development machine.
