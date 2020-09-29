---
title: Administrator Stories
sidebar_label: Admin Stories
---
### HACC Hui Registration

**US-A1: As an administrator, I want to register with HACC Hui so I can get my credentials.**

Once the installer stands up HACC Hui, one or more administrators configure it for this year's challenge. To do this, they must first obtain their credentials to login to the system.  The HACC Hui Slackbot supplies these credentials to them. The administrator signs in to the HACC Slack workspace, opens `hacchui` direct message channel, and types:

```
register me 

The slackbot responds:

Welcome to HACC Hui!  Here are your credentials:
Host: https://hacchui.com
Username: philipmjohnson
Password: eggplant-davis-frisco
```

What has happened is that the slackbot has communicated with the HACC Hui application and told it to register a new user account with the username "philipmjohnson" (this is the admin's Slack username which the bot had access to) and provided an initial randomly generated password (eggplant-davis-frisco). 

### HACC Hui Configuration

**US-A2: As an administrator, I want to login to HACC Hui and configure the application.**

Now that the administrator has obtained their credentials, they can login to the HACC Hui application through their phone or laptop browser and perform basic configuration. Because the system has been configured to know which logins are administrators, the system will provide this user with admin capabilities, including the capability to configure the system for a specific year.  This involves specifying:

* The names of the challenges for this year's HACC
* The initial set of "skills" that users can select
* The initial set of "tools" that the users can select.

The set of challenges, skills, and tools can be expanded at any time by administrators. By requiring participants to choose from a pre-specified list of skills, tools, and challenges, HACC Hui can easily perform "matching". The matching process is vastly more complicated if participants can specify skills and tools using free text. 

### Team Formation Status

**US-A3: As an administrator, I want to learn the team formation status to better understand the situation.**

All admins have access to a page called "Team Formation Status".  This page provides the current status of all created teams: their names, members, invitations, skills and interests, whether they are open or closed, etc. 

On this page the administrator can assign the team's GitHub repository.

The purpose of this page is to provide HACC administrators some real-time insight into the status of team formation, including: how many teams have been created, how many participants have found a team, how many teams are still looking for members, etc. 

The intent is that administrators will check this page on a daily basis during the first week of the HACC to see how team formation is proceeding, and to use this information to formulate messages to the HACC Slack workspace to help team formation move along. 

### Analytics Page

**US-A4: As an administrator, I want to see analytics of user interactions to improve team formation process in future years.**

HACC Hui Administrators will have access to a page called "Analytics".  This page will interpret instrumentation (logging) data collected through user interaction with the system in order to answer questions about the team formation process.  The questions are intended to enable HACC Administrators (along with the results of surveys of participants) to improve the team formation process in future years. HACC Hui analytics might also be useful to identify emergent problems with team formation during the current HACC.

Here are some questions that could be answered through an Analytics page.

* How many (and what percentage) of participants have signed their participation agreements. Are there any team members who are non-compliant?

* How many (and what percentage) of participants who register with Slack actually attempt to form a team? The number of participants who attempt to form a team is simply the number of participants who /invited the hacchui slackbot.  The percentage is the number of participants who /invited hacchui divided by the total number of participants in Slack.  (The total number of participants is the total number of users in the workspace minus the number of people in the organizing committee, who cannot be a participant.) We want to minimize this first stage of "attrition", whereby someone who joins the Slack workspace for some reason bails without even trying to form a team.

* How many (and what percentage) of participants try and fail to join a team? Some people might /invite the hacchui slackbot, but never get invited (or never accept an invitation to join) a team. This can be calculated in the obvious way: the number of registered users of HaccHui who are not members of any team. We want to minimize this second stage of "attrition". 

* How many (and what percentage) of teams are "pre-formed" prior to the HACC?  We can use logging data to approximate this number by looking for teams in which all members were "direct invited" and which were never "open" for matching. The percentage is just the proportion of the total number of teams. 

* How many (and what percentage) of teams used HACC Hui matching? We can use logging data to find out how many teams invited at least one person based on a match. 

* How many (and what percentage) of participants used HACC Hui matching? We can use logging data to find out how many HACC Hui users set up a profile and clicked the "Interested in Joining" for at least one team. 

* How many participants leave HACC Hui? This is the number of users who explicitly delete their account.

* What are the skills and tools of HACC Hui users and what are the levels of expertise?  This analyzes the profiles of HACC Hui users to provide anonymous aggregate statistics about skills and tools. 

* What skills and interests are needed by teams? This analyzes Team Profile logging data to find out what skills and tools teams look for.

The next page discusses the participant user stories.
