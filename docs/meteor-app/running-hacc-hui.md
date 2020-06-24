---
title: Running HACC Hui
sidebar_label: Running HACC Hui
---

## Start up HACC Hui Application

Be sure to be in the `HACC-Hui/app` directory. Then run `meteor npm run start`.

```
HACC-Hui/app$ meteor npm run start

> hacchui@ start ~/HACC-Hui/HACC-Hui/app
> cross-env METEOR_NO_RELEASE_CHECK=1 meteor --settings ../config/settings.development.json --port 3400

[[[[[ ~/HACC-Hui/HACC-Hui/app ]]]]]

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

Check both HACC Hui and the Bolt app are running. You should see a line like `⚡️ Bolt app is running on port 3000!` and `App running at: http://localhost:3400/`.

## Start ngrok to set up a Public URL

1. Check the port Bolt is using. In the above example it is running on port 3000.
2. Start ngrok.
```
$ ngrok http 3000
```
```
ngrok by @inconshreveable                                                                               (Ctrl+C to quit)
                                                                                                                        
Session Status                online                                                                                    
Account                       <Your ngrok account> (Plan: Free)                                                            
Version                       2.3.35                                                                                    
Region                        United States (us)                                                                        
Web Interface                 http://127.0.0.1:4040                                                                     
Forwarding                    http://<random name>.ngrok.io -> http://localhost:3000                                     
Forwarding                    https://<random name>.ngrok.io -> http://localhost:3000                                    
```

## Setup the SlackBot

Go to [api.slack.com](https://api.slack.com/). Then click on `Your Apps`. Choose the hacc_hui app.

<img src="/img/developer/hacc-hui-slack-app.png" width="100%"/>

On the left-hand side click `Event Subscriptions`.

<img src="/img/developer/event-subscriptions.png" width="100%"/>

Update the Request URL with the `ngrok` https URL.

<img src="/img/developer/events-connected.png" width="100%"/>

Notice the Request URL is verified.

Then click `Save Changes`.

The hacc_hui Slackbot is now connected to the HACC Hui application. You can verify this by opening Slack and DM'ing `hacchui`.

<img src="/img/developer/hacc-hui-dm.png" width="100%"/>
