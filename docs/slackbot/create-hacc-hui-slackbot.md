---
title: Creating HACC Hui Slackbot
sidebar_label: Creating HACC Hui bot
---

### Create a new App for Slack

Go to [api.slack.com](https://api.slack.com/) and click on `Start Building`. This creates a new Slack App.

<img src="/img/developer/new-slack-app.png" width="100%"/>

Name your app. We're going to use hacchui.

<img src="/img/developer/slack-app-name.png" width="100%"/>

Then choose your Slack Workspace. We highly recommend that you choose a development workspace. We don't want to be interacting with actual developers yet.

<img src="/img/developer/choose-workspace.png" width="100%"/>

Click `Create App`

<img src="/img/developer/new-app-basics-page.png" width="100%"/>

Now we are going to add the Permissions out slackbot needs. Click on `OAuth & Permissions`. Scroll down to Scopes.

<img src="/img/developer/bot-scopes.png" width="100%"/>

Click `Add an OAuth Scope`. Then add `app_mentions:read`, `chat:write`, `im:history`, `im:read`, `im:write`, and `users.profile:read`. This should give our slackbot enough permissions to interact with the participants and administrators.

<img src="/img/developer/selected-scopes.png" width="100%"/>

Now click `Event Subscriptions`.

<img src="/img/developer/bot-event-subscription.png" width="100%"/>

Enable events. We'll fill out the Request URL later. See [Running HACC Hui](../meteor-app/running-hacc-hui).

Lastly, install your app. 

After you install the app, copy the Bot User OAuth Access Token from the `Install App` page and the Signing Secret from the `Basic Information` page into the HACC Hui app's `.env` file. Here's an example .env file: 
```.env
SLACK_BOT_TOKEN=# your slackbot token xoxb-#####-####-####
SLACK_SIGNING_SECRET=# your slackbot signing secret
```
