---
title: Developer Stories
sidebar_label: Developer Stories
---

### HACC Hui Registration

**US-D1: As a developer, I want to register with HACC Hui to join a great team.**

In order for a participant to login to the HACC Hui system as a developer, they must also obtain their credentials, which they do in the same way as an administrator. After logging into the Slack workspace, they go to the `hacchui` personal DM channel and type:

```
register me 

The slackbot responds:

Welcome to HACC Hui!  Here are your credentials:
Host: https://hacchui.com
Username: mercedez
Password: foo-bar-jingo
```

This user (Mercedez) can now login to HACC Hui using their phone or laptop browser. Since the username "mercedez" was not specified as an administrator, this user will login in the role of "developer". 

### Developer profile configuration

**US-D2: As a developer, I want to login to HACC Hui and develop my profile, so I can be matched with the best open team.**

The first time a developer logs in they will fill out the HACC participation form. Then they are taken to a profile page. This allows them to fill out a form to specify the following:
* Skills: What skills would they like to be associated with.  For each skill, they can specify "Experienced", "Novice", "Don't know, but would like to learn".
* Tools: What tools would they like to be associated with.  For each tool, they can specify "Experienced", "Novice", "Don't know, but would like to learn".
* Challenges: What challenges are they interested in working on.  This is a checkbox: they must specify at least one, but can specify up to all of the challenges. 
* LinkedIn: the URL to the developer's LinkedIn account, if they have one. (Optional).
* GitHub: the URL to the developer's GitHub account, if they have one. (Optional)
* Website: the URL to the developer's home page or professional portfolio, if they have one. (Optional).
* About me: A very short free text field that allows the developer to say a little something about themselves. Limited to, say, 200 characters. (Optional). 

Like any form, the developer presses submit to save their changes, and the app updates the page to indicate their current profile. 

Developer profile configuration is optional, though I think we should encourage it because it provides us with really useful information about the background and interests of developers at HACC.

### Suggest a tool or skill

**US-D3: As a developer, I want to suggest a new skill or tool to improve HACC Hui matching.**

If there is a skill or tool that the developer wants to be associated with, they can fill out a form to suggest it to the administrators on this page. This generates a Slack DM to the admins with the suggestion, and the user who requested it.  If they approve, they can login to the system to update the set of tools or skills, and then DM the developer to say it's now added. Or they can DM the user to explain why this request is redundant or out of scope for the challenge.

### Team Creation

**US-D4: As a developer, I want to create a team, so we can solve a challenge and win the HACC.**

Developers can also create teams.  The developer that creates a team is the "owner" of that team within HACC Hui.  Team owners control who is on the team. 

To create a team, a developer visits the "Team Creation" page.  This page enables the developer to fill out a form with the following fields:
* The name of the team. Must be unique across all defined team names, as this string constitutes a unique ID.  Must be all lower case, and consist of only letters and digits.  This means no spaces or special characters. 
* Challenges: The challenge (or challenges) of interest for this team.
* Skills: The skills desired for this team that are currently unmet by its team members. 
* Tools: The tools desired for this team that are currently unmet by its members. 
* About us: A very short description of the team's personality or orientation. Limited to 200 characters.
* Availability: Whether or not this team is "open" (available for matching with other developers looking for a team) or "closed" (not available for matching). 

When the user presses submit, then the app creates the team as long as the team name is an acceptable unique ID.

**US-D5: As a team owner, I want to update the team to reflect the current status.**

Once an owner creates a team, the challenge, skills, tools, availability, and team members can be edited. The team name cannot be changed.

**US-D6: As a team owner, I want to delete the team.**

A team can be deleted. However, once a team name has been defined, it can never be used again, even if the team associated with that name is deleted.

A developer can create multiple teams. 

### Team Matching (Developer initiated)

**US-D7: As a developer, I want to see which team is the best fit for me.**

Any developer can go to their "Team Finder" page, which provides a list of all open teams in the system. This page enables the developer to sort the list by various criteria, enabling them to find teams that appear relevant to their skills, tools, and challenges. 

**US-D8: As a developer, I want to indicate I'm interested in joining a team.**

The developer can click a button associated with one or more teams labeled "Interested in joining". Clicking this button results in a Slack DM being sent to all the current members of that team indicating that someone is interested in joining their team. 

The current team members can then go into HACC Hui to a page called "Interested Developers", where that developer is listed along with their profile details, including their Slack username.  This should be followed by a discussion among the current team members, which will be conducted outside of HACC Hui (they can use phone, text, Slack, whatever).  The current team members can also DM the prospective team member in Slack to talk more about their interests and needs.

**US-D9: As a team owner, I want to issue an invitation to a developer to join our team.**

If the team decides that they want the prospective member in their team, then the team owner can issue an "invitation". 

### Joining a team

**US-D10: As a developer, I want to see all the team invitations and decide if I want to join that team.**

When a developer has been invited to join an existing team by its owner, then this invitation will show up in a page called "Team Invitations".   The team name, profile information, and current membership is displayed, along with two buttons: "Accept" or "Decline".  

The developer can accept or decline invitations.  When they click a button, a Slack DM is generated to the team leader indicating that their invitation has been accepted or declined.

A developer can be a member of multiple teams, although we should caution participants that this is generally a bad idea. 
### Direct Invitations

**US-D11: As a team owner, I want to invite all the team members to join the team.**

It is possible for a team owner to perform a "direct invite" of a Slack user. This is for the situation in which a team is already established prior to the HACC.  In this case, the team will agree on one member to act as the team owner in HACC Hui, create the team, then provide the Slack usernames of all the remaining team members to the Direct Invite form. 

A direct invite results in a Slack DM being sent to the invited member. The team will show up on their Team Invitations page.  They can accept or decline as noted above. 

If the team owner misspells a Slack username, the system should inform him/her of the error.

### Leaving a team

**US-D12: As a developer, I want to be able to leave a team at any time.**

At any time, a developer can choose to leave one or more teams.  Their profile page will list the teams that they are currently members of, along with a button to "Leave this team". If they click it, a Slack DM will be sent to the team owner informing them that the team member left.

If this is done in error, the team owner can re-invite them, and the team member can accept the invitation again. 

### Delete Account

**US-D13: As a developer, I want to be able to delete my HACC Hui account at any time.**

A developer has the ability to delete their account at any time. As part of the deletion process, we can ask the developer why they are leaving in order to improve the HACC experience for next year.  Possible responses could be: "No challenge was interesting", "Couldn't find a team I liked being on", etc as well as a free text "Other".

### Team Invitation prior to registration

**US-D14: As a team owner, I want to be able to create my team with members, but some members might not be registered with HACC Hui.**

A very common situation could be the following:
* A team is formed prior to the HACC.
* All team members join the HACC Slack, so they have Slack usernames, but one or more of the team members have not gone to the `hacchui` personal DM channel to register. 

One team member creates their team, then performs a Direct Invite of all the remaining team members. 

Since the `hacchui` slackbot cannot communicate with some team members to tell them their credentials, it should inform the team leader of the invitations that did not succeed and indicate that those team members must register with the `hacchui` slackbot.
