---
title: Motivation
sidebar_label: Motivation
---

The goal of this site is to provide a public repository for documents pertaining to the design, implementation, and evaluation of the ICS 414 Fall 2020 HACC Hui Project. The HACC Hui project consists of a Meteor application and a Slackbot. The Meteor app and Slackbot are running in the same application.

## ICS 414 Motivation and Goal
The Hawaii Annual Code Challenge (HACC) has some unique characteristics as a hackathon when it comes to team formation:

In a typical year, over 200 developers attend the kick-off meeting. This size makes it difficult for developers to know each other and form teams through informal mechanisms. While some teams are pre-formed prior to the challenge, there are a substantial number of developers who are not attached to any team.  We believe that this results in some developers not finding a team to work with, as well as some teams not having an optimal set of team members because they could not find a member with appropriate skills. 

Developers range from high school students, to college students, to professionals. Different teams may be willing or not willing to allow participation from developers in one or more of these demographics. For example, some high school students may want to only work with other high school students, while other high school students might relish the opportunity to work with college students or professionals. It is hard with informal mechanisms to address this.

Unlike 24 or 48 hour hackathons, where team formation must happen extremely quickly and the cost of bad team assignments is only a weekend of effort, the HACC lasts for a month and the investment of time from developers can be much more substantial.  This means that team formation need not happen in just minutes, and that appropriate team formation has much more significant implications for the success of a team (and the HACC as a whole).

For the past four years, team formation at HACC has been ad-hoc and informal.  Some techniques for team formation have included:

* Participants find friends to work with prior to the HACC, then they come to the challenge with their team already formed.  The team then selects a challenge to work on. 

* A participant comes to the HACC unattached, finds a challenge that is interesting to them, and then tries to join a team working on that challenge by hanging around the challenge table during the kickoff day, or using the challenge slack channel to see if any teams are interested in new members. 

* During the kickoff day lunch, participants attach a colored sticker indicating if they are a developer or whatever and try to mingle to find a team that might want them. 

Clearly, these ad-hoc and informal mechanisms can lead to a high failure rate: teams that don't have the right mixture of members for optimal success, and/or participants who either fail to find a team entirely or end up on a team where they are underutilized or simply don't have fun.

### Initial System Goal

The initial goal of the HACC Hui system is to provide an easy-to-use system that simplifies and improves the team formation process for the Hawaii Annual Code Challenge.  In a nutshell, participants will use HACC Hui to:

1. Create a team and specify its membership.  A team can be "closed", in which case it is no longer interested in new members, or "open", in which case it is potentially interested in acquiring new members. Teams can specify that they are in need of new members with specific high-level "skills" (such as videography, user interface design, database management) and/or specific low-level "tools" (such as "Java", "Postgres", etc.).  Teams can specify that they are committed to a specific challenge, or have not yet decided between two or more challenges.

2. Create a personal profile providing details about one's skills, tools, and challenge interests, and one's demographic level (high school, college, professional). The profile can also indicate if the individual is looking for a team to be on.

Given (1) and (2),  HACC Hui can: 

 1. show current teams a list of prospective new team members with interests matching their needs, and 

 2. current developers a set of teams who might want their skills. Participants use this set of matches to contact each other in Slack to pursue the matching process further. This is expected to accelerate the process of team formation, reduce the number of participants who never find a team, and produce higher quality, higher functioning teams. 

### Future Goals

Ultimately, HACC Hui can go beyond team formation to support ongoing team management, but this document focuses only on team formation. The last section of this documentation will briefly discuss potential team management extensions. 

### ICS 414 Project Architecture

* A Meteor-based web application with a MongoDB backend. The UI will be mobile first. This application allows participants to provide all the information for (1) and (2). 

* A Slackbot that provides a communication channel between the HACC Slack Workspace and the HACC Hui application. This facilitates subsequent communication between participants as they decide whether a team is a good match.

