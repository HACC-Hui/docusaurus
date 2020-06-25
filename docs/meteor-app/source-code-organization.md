---
title: Source Code Organization
sidebar_label: Source code organization
---

## Directory Overview

The HACC-Hui repository has the following top-level directories:

```
HACC-Hui/
         app/       # The application.
         config/    # Configuration files for development and deployment.
         doc/       # Documentation directory, currently not used.
         e2e-test/  # End-to-End testing support.
```

Of these, the only directory with a complex substructure is app/. Let's look at that one:

## HACC-Hui/app/

The HACC-Hui/app/ directory layout is based on [meteor-application-template](http://ics-software-engineering.github.io/meteor-application-template/), which implements a set of conventions for file and directory naming and structure that conforms to suggestions from the Meteor Guide chapter on [Application Structure](http://guide.meteor.com/structure.html). 

The most important organizational concept is that almost all of the application code is placed inside the imports/ directory, and the code inside the client/ and server/ directories are responsible for loading the code for the client and server sides, respectively.

Here are the top-level directories in the app/ directory:

```
app/
   client/    # Responsible for loading all client-side code from imports dir. 
   imports/   # Implementation code lives here.
   private/   # Contains database fixtures. "private" means not accessible via URL.
   public/    # Contains images and semantic ui theme files. "public" means accessible via URL.
   server/    # Responsible for loading all server-side code from imports dir.
```
Of these directories, the only directory with a complex substructure is imports/.  Let's now look at that one:

### HACC-Hui/app/imports

The imports/ directory contains four subdirectories:

```
imports/
       api/           # Data model implementation
       startup/       # System startup
       test-utils/    # Functions to aide testing.
       ui/            # Client-side user interface code
```

Let's look at each in turn.

### HACC-Hui/app/imports/api

The api/ subdirectory provides the code for the HACC-Hui "data model". This code is generally loaded on both the client and server sides of the application.  See the Data Model section of this manual for detailed information on the data model. In this section, we will just briefly introduce the source organization.

```
api/
    base/        # Superclasses for collection classes.
    challenge/   # Challenge code.
    hacc-hui/    # Provides meta-data about set of collections and so forth.
    interest/    # Interest code.
    level/       # Demographic, Skill, and Tool levels. 
    role/        # HACC-Hui roles: developer and administrator.
    skill/       # Skill code.
    slackbot/    # Slackbot code.
    slug/        # Slug representation code.
    stuff/       # meteor-application-template stuff. (We will remove this later.)
    team/        # Team code.
    tool/        # Tool code.
    user/        # Represent users and their profile data.
```

### HACC-Hui/app/imports/startup

The startup/ subdirectory contains code that needs to be loaded immediately upon system startup. It contains two subdirectories:

```
startup/
       client/  # Client-only code for logging, routing, sessions, and accounts.
       server/  # Server-only code for accounts, logging, publications, and database loading.
```

Note that naming this directory does not automatically make this code loaded, much less loaded "first".  There are import
statements in client/ and server/ that are responsible for loading this code. 

### HACC-Hui/app/imports/ui

The ui/ subdirectory contains all of the client-side code for implementing the user interface. We follow the recommended Meteor convention of using "layouts" to provide a standard organization for multiple pages, "pages" to indicate the contents of a page for which there is a URL, and "components" to indicate UI elements that are embedded within a page (and may exist on multiple pages).

So, the ui/ directory structure is:

```
ui/
  components/    # widgets within a page.
  layouts/       # organization for multiple pages.     
  pages/         # URL-accessible page.
```

Within each of these directories there are subdirectories. In many cases, the subdirectories reflect a division based on role. So, for example, there is a subdirectory called "developer/" in each of the `components`, `layouts`, and `pages` directories. 
