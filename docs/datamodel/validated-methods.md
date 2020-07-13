---
title: Validated Methods
sidebar_label: Validated Methods
---

HACC Hui uses [Validated Methods](https://guide.meteor.com/methods.html#validated-method) to allow the clients to update the Mongo collections and send Slack direct messages.

## Accessing the Mongo Collections

We have 3 Validated Methods to access the Mongo Collections:

* The [defineMethod](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/base/BaseCollection.methods.js#L43) allows the client to define new documents in collections. 

* The [updateMethod](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/base/BaseCollection.methods.js#L61) allows the client to update existing documents.

* The [removeItMethod](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/base/BaseCollection.methods.js#L80) allows the client to remove existing documents.

Each method has two parameters, the collection name, and the data needed to perform the operation. The methods first check the collection name to ensure it exists, then they check to see if the user has permission to perform the operation, lastly they perform the operation.

## Sending Slack DMs

We have 2 Validated Methods for sending Slack direct messages:

* The [sendDM2AdministratorsMethod](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/slackbot/Slack.methods.js#L21) allows the client to send direct messages to all the HACC Hui Administrators.

* The [sendDM2DeveloperMethod](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/slackbot/Slack.methods.js#L47) allows the client to send direct messages to a HACC Hui developer.

## Recording User Interactions

We have 3 Validated Methods for recording user interactions:

* The [userInteractionDefineMethod](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/user/UserInteractionCollection.methods.js#L8) allows the client to record a user interaction.

* The [userInteractionRemoveUserMethod](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/user/UserInteractionCollection.methods.js#L21) allows a client to remove all the user interactions for a given user. *The user must be an Administrator to run this method.*

* The [userInteractionFindMethod](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/user/UserInteractionCollection.methods.js) allows clients to query the UserInteractionCollection. *The user must be an Administrator to run this method.*
