---
title: Entity-Relationship Model
sidebar_label: Entity-Relationship Model
---
## Slugs 

"Slug" is a term commonly used in web application development to denote a unique string that can be used as part of a URL to identify a domain entity.  To facilitate their use in URLs, slugs are generally lower case, and consist only of letters, numbers, and hyphens or underscores. For example, in HACC Hui, the slug for the "Software Engineering" Interest might be "software-engineering".

In HACC Hui, both slugs and the 14 character MongoDB document IDs uniquely identify documents.  However, if you reset and reinitialize a HACC Hui database, the document ID will be different, but its slug will stay the same.

Slugs are used heavily in HACC Hui when initializing the database from a fixture file in order to represent relationships between different entities without reference to their docID.  For example, here is an example invocation of the Challenges define method:

```js
Challenges.define({
          title: "HGIA Green Loan Portal",
          description: "Leveraging and integrating existing solutions (such as Salesforce, etc.) to provide our applicants with a more intuitive, customer friendly and timely experience with government loan programs.",
          interests: ["community-engagement"],
          submissionDetail: "https://hacc.hawaii.gov/wp-content/uploads/2019/10/Challenge-Submission-Form_2019_HGIA_Final.pdf",
          pitch: "https://hacc.hawaii.gov/wp-content/uploads/2019/10/HGIA_Green_Loan.pdf"
        });
```

First, the Challenges collection will create a slug based upon the title. In this case the slug is 'hgia-green-loan-portal'. This document can be referred to in future definitions by that string.

Second, the interests field contains an array of one slug: "community-engagement". Internally, the MongoDB document for this Challenge will contain the 14 character document IDs for this interest, but we don't need to worry about that in the fixture file: we can just refer to the slugs. 

HACC Hui does not support forward referencing of Slugs. For example, when the above CareerGoal definition executes, if a Slug is referenced (such as "community-engagement") that is not defined, then an error is thrown. Thus, the order in which HACC Hui data is loaded is important and there can be no circular dependencies among entity definitions.

Slugs form a unique namespace across all entities: you cannot use the same string to denote an Interest Slug and a Challenge slug, for example.

## Entity Relationships

There are two ways to have entities in a database refer to each other.

One, store the relationship in the entity. For example, a Challenge has a list of interests. We could store the interests in the Challenge document as an array of the interest ids.

Two, create another table to hold the Challenge, Interest pairs.

In HACC Hui, we've chosen the second option. This allows us to easily find the Challenges for a given interest or find the Interests for a given challenge. If we stored the interests in the challenge document it would be much more difficult to find the challenges for a given interest. 
