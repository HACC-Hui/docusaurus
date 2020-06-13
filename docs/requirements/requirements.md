---
title: Requirements
sidebar_label: Requirements
---
## User stories
To provide a better sense for how the system works, here are some user stories.  There are several types of users of HACC Hui. "Installers" are software developers who have implemented the system and have brought up an instance. "Administrators" are privileged users who are normally members of the program committee.  "Developers" are HACC participants. You cannot be both an Administrator and a Developer.

### User Story: HACC Hui Installation
There are a lot of tasks involved with HACC Hui installation, but for the purpose of these user stories, there are two key tasks:

1. When an Installer stands up an instance of HACC Hui, they provide a configuration file with information about the location of the Slack Workspace associated with HACC, and the Slack usernames of all of the people who are authorized with the "Administrator" role. 

2. The installer also installs the hacchui slackbot into the HACC Slack workspace and provides it with appropriate permissions. 

These tasks enable administrators to login to HACC Hui to perform configuration activities, as described in the next user story.

### User Story: HACC Hui Configuration

Once the installer stands up HACC Hui, one or more administrators configure it for this year's challenge. To do this, they must first obtain their credentials to login to the system.  The HACC Hui Slackbot supplies these credentials to them. The administrator signs in to the HACC Slack workspace, opens `hacchui` direct message channel, and types:

```
@hacchui register me 

The slackbot responds:

Welcome to HACC Hui!  Here are your credentials:
Host: https://hacchui.com
Username: philipmjohnson
Password: eggplant-davis-frisco
```

What has happened is that the slackbot has communicated with the HACC Hui application and told it to register a new user account with the username "philipmjohnson" (this is the admin's Slack username which the bot had access to) and provided an initial randomly generated password (eggplant-davis-frisco). 

Now that the administrator has obtained their credentials, they can login to the HACC Hui application through their phone or laptop browser and perform basic configuration. Because the system has been configured to know which logins are administrators, the system will provide this user with admin capabilities, including the capability to configure the system for a specific year.  This involves specifying:

* The names of the challenges for this year's HACC
* The initial set of "skills" that users can select
* The initial set of "tools" that the users can select.

The set of challenges, skills, and tools can be expanded at any time by administrators. By requiring participants to choose from a pre-specified list of skills, tools, and challenges, HACC Hui can easily perform "matching". The matching process is vastly more complicated if participants can specify skills and tools using free text. 

### User Story: Developer initial login
In order for a participant to login to the HACC Hui system as a developer, they must also obtain their credentials, which they do in the same way as an administrator. After logging into the Slack workspace, they go to the `hacchui` personal DM channel and type:

```
@hacchui register me 

The slackbot responds:

Welcome to HACC Hui!  Here are your credentials:
Host: https://hacchui.com
Username: mercedez
Password: foo-bar-jingo
```

This user (Mercedez) can now login to HACC Hui using their phone or laptop browser. Since the username "mercedez" was not specified as an administrator, this user will login in the role of "developer". 

### User Story: Developer profile configuration
Once a developer logs in, they are taken to a profile page. This allows them to fill out a form to specify the following:
* Skills: What skills would they like to be associated with.  For each skill, they can specify "Experienced", "Novice", "Don't know, but would like to learn".
* Tools: What tools would they like to be associated with.  For each tool, they can specify "Experienced", "Novice", "Don't know, but would like to learn".
* Challenges: What challenges are they interested in working on.  This is a checkbox: they must specify at least one, but can specify up to all of the challenges. 
* LinkedIn: the URL to the developer's LinkedIn account, if they have one. (Optional).
* GitHub: the URL to the developer's GitHub account, if they have one. (Optional)
* Website: the URL to the developer's home page or professional portfolio, if they have one. (Optional).
* About me: A very short free text field that allows the developer to say a little something about themselves. Limited to, say, 200 characters. (Optional). 

Like any form, the developer presses submit to save their changes, and the app updates the page to indicate their current profile. 

Developer profile configuration is optional, though I think we should encourage it because it provides us with really useful information about the background and interests of developers at HACC.

### User Story: Suggest a tool or skill
If there is a skill or tool that the developer wants to be associated with, they can fill out a form to suggest it to the administrators on this page. This generates a Slack DM to the admins with the suggestion and the user who requested it.  If they approve, they can login to the system to update the set of tools or skills, and then DM the developer to say it's now added. Or they can DM the user to explain why this request is redundant or out of scope for the challenge.

### User Story: Team Creation
Developers can also create teams.  The developer that creates a team is the "owner" of that team within HACC Hui.  Team owners control who is on the team. 

To create a team, a developer visits the "Team Creation" page.  This page enables the developer to fill out a form with the following fields:
* The name of the team. Must be unique across all defined team names, as this string constitutes a unique ID.  Must be all lower case, and consist of only letters and digits.  This means no spaces or special characters. 
* Challenges: The challenge (or challenges) of interest for this team.
* Skills: The skills desired for this team that are currently unmet by its team members. 
* Tools: The tools desired for this team that are currently unmet by its members. 
* About us: A very short description of the team's personality or orientation. Limited to 200 characters.
* Availability: Whether or not this team is "open" (available for matching with other developers looking for a team) or "closed" (not available for matching). 

When the user presses submit, then the app creates the team as long as the team name is an acceptable unique ID.

Once a team is created, the challenge, skills, tools, and availability can be edited. The team name cannot be changed.

A team can be deleted. However, once a team name has been defined, it can never be used again, even if the team associated with that name is deleted.

A developer can create multiple teams. 

### User Story: Team Matching (Developer initiated)
Any developer can go to their "Team Finder" page, which provides a list of all open teams in the system. This page enables the developer to sort the list by various criteria, enabling them to find teams that appear relevant to their skills, tools, and challenges. 

The developer can click a button associated with one or more teams labeled "Interested in joining". Clicking this button results in a Slack DM being sent to all the current members of that team indicating that someone is interested in joining their team. 

The current team members can then go into HACC Hui to a page called "Interested Developers", where that developer is listed along with their profile details, including their Slack username.  This should be followed by a discussion among the current team members, which will be conducted outside of HACC Hui (they can use phone, text, Slack, whatever).  The current team members can also DM the prospective team member in Slack to talk more about their interests and needs.

If the team decides that they want the prospective member in their team, then the team owner can issue an "invitation". 
### User Story: Joining a team
When a developer has been invited to join an existing team by its owner, then this invitation will show up in a page called "Team Invitations".   The team name, profile information, and current membership is displayed, along with two buttons: "Accept" or "Decline".  

The developer can accept or decline invitations.  When they click a button, a Slack DM is generated to the team leader indicating that their invitation has been accepted or declined.

A developer can be a member of multiple teams, although we should caution participants that this is generally a bad idea. 
### User Story: Direct Invitations
It is possible for a team owner to perform a "direct invite" of a Slack user. This is for the situation in which a team is already established prior to the HACC.  In this case, the team will agree on one member to act as the team owner in HACC Hui, create the team, then provide the Slack usernames of all the remaining team members to the Direct Invite form. 

A direct invite results in a Slack DM being sent to the invited member. The team will show up on their Team Invitations page.  They can accept or decline as noted above. 

If the team owner misspells a Slack username, the system should inform him/her of the error.
### User Story: Leaving a team
At any time, a developer can choose to leave one or more teams.  Their profile page will list the teams that they are currently members of, along with a button to "Leave this team". If they click it, a Slack DM will be sent to the team owner informing them that the team member left.

If this is done in error, the team owner can re-invite them, and the team member can accept the invitation again. 
### User Story: Delete Account
A developer has the ability to delete their account at any time. As part of the deletion process, we can ask the developer why they are leaving in order to improve the HACC experience for next year.  Possible responses could be: "No challenge was interesting", "Couldn't find a team I liked being on", etc as well as a free text "Other".
### User Story: Team Invitation prior to registration
A very common situation could be the following:
A team is formed prior to the HACC.
All team members join the HACC Slack, so they have Slack usernames, but one or more of the team members have not gone to their personal DM channel to /invite @hacchui. 
One team member creates their team, then performs a Direct Invite of all the remaining team members. 

Since the hacchui SlackBot cannot communicate with some of the team members to tell them their credentials, it should inform the team leader of the invitations that did not succeed and indicate that those team members must invite the HACCHui slackbot.
### User Story: Team Formation Status
All admins have access to a page called "Team Formation Status".  This page provides the current status of all created teams: their names, members, invitations, skills and interests, whether they are open or closed, etc.  

The purpose of this page is to provide HACC administrators some real-time insight into the status of team formation, including: how many teams have been created, how many participants have found a team, how many teams are still looking for members, etc. 

The intent is that administrators will check this page on a daily basis during the first week of the HACC to see how team formation is proceeding, and to use this information to formulate messages to the HACC Slack workspace to help team formation move along. 
### User Story: Analytics Page
HACC Hui Administrators will have access to a page called "Analytics".  This page will interpret instrumentation (logging) data collected through user interaction with the system in order to answer questions about the team formation process.  The questions are intended to enable HACC Administrators (along with the results of surveys of developers) to improve the team formation process in future years. HACC Hui analytics might also be useful to identify emergent problems with team formation during the current HACC.

Here are some questions that could be answered through an Analytics page.

How many (and what percentage) of participants who register with Slack actually attempt to form a team? The number of participants who attempt to form a team is simply the number of participants who /invited the hacchui slackbot.  The percentage is the number of participants who /invited hacchui divided by the total number of participants in Slack.  (The total number of participants is the total number of users in the workspace minus the number of people in the organizing committee, who cannot be a participant.) We want to minimize this first stage of "attrition", whereby someone who joins the Slack workspace for some reason bails without even trying to form a team.

How many (and what percentage) of participants try and fail to join a team? Some people might /invite the hacchui slackbot, but never get invited (or never accept an invitation to join) a team. This can be calculated in the obvious way: the number of registered users of HaccHui who are not members of any team. We want to minimize this second stage of "attrition". 

How many (and what percentage) of teams are "pre-formed" prior to the HACC?  We can use logging data to approximate this number by looking for teams in which all members were "direct invited" and which were never "open" for matching. The percentage is just the proportion of the total number of teams. 

How many (and what percentage) of teams used HACC Hui matching? We can use logging data to find out how many teams invited at least one person based on a match. 

How many (and what percentage) of participants used HACC Hui matching? We can use logging data to find out how many HACC Hui users set up a profile and clicked the "Interested in Joining" for at least one team. 

How many participants leave HACC Hui? This is the number of users who explicitly delete their account.

What are the skills and tools of HACC Hui users and what are the levels of expertise?  This analyzes the profiles of HACC Hui users to provide anonymous aggregate statistics about skills and tools. 

What skills and interests are needed by teams? This analyzes Team Profile logging data to find out what skills and tools teams look for.
HACC Team Management
There is potential for HACC Hui to improve the HACC experience after team formation, and perhaps even replace DevPost.  Teams need to fill out forms, teams need to submit things by certain deadlines, and HACC Hui can help with this process. However, I suggest we cross that bridge after the Team Formation issue has been addressed. 
