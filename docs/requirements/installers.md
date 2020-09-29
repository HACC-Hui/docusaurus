---
title: Installer Stories
sidebar_label: Installer Stories
---

## User stories
To provide a better sense for how the system works, here are some user stories.  There are several types of users of HACC Hui. "Installers" are software developers who have implemented the system and have brought up an instance. ["Administrators"](administrators) are privileged users who are normally members of the program committee.  ["Participants"](participants) are HACC participants. You cannot be both an Administrator and a Participant.

### HACC Hui Installation

**US-I1: As a HACC Hui installer, I want to deploy the HACC Hui Meteor application and `hacchui` slackbot, so Administrators and Participants can use the system.**

There are a lot of tasks involved with HACC Hui installation, but for the purpose of these user stories, there are two key tasks:

1. When an Installer stands up an instance of HACC Hui, they provide a configuration file with information about the location of the Slack Workspace associated with HACC, and the Slack usernames of all of the people who are authorized with the "Administrator" role. 

2. The installer also installs the `hacchui` slackbot into the HACC Slack workspace and provides it with appropriate permissions. 

These tasks enable administrators to login to HACC Hui to perform configuration activities, as described in the next document.
