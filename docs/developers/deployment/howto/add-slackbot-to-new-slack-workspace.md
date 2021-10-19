---
title: Add HACC-Hui to a new slack workspace
---

You need admin access to the Slack Workspace.

Follow the instructions in Create HACC Hui bot, choosing the new Slack Workspace.

Update the config/slackbot.signing.secret.txt and config/slackbot.token.txt to match the new HACC Hui bot.

Update the HACC Hui bot's Events to point to http://hacchui.ics.hawaii.edu:3100/slack/events. Note you might need to add some event permissions to get the save button to activate. They don't like http and would prefer https, but I don't know how to activate https on port 3100.
