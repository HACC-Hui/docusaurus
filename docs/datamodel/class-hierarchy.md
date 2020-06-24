---
title: Collection Class Hierarchy
sidebar_label: Collection Class Hierarchy
---

Based upon our experience with [RadGrad](https://radgrad.github.io), we've wrapped every MongoDB collection by a Javascript class with the same name. As we implemented this encapsulation, we observed that there was common functionality that could be abstracted out into a set of two superclasses:

  * *BaseCollection*.  All classes (with the single exception of the UserCollection class) inherit either directly or indirectly from BaseCollection. This class provides the methods and fields used to manage a MongoDB collection that are common across HACC Hui.
  
  * *BaseSlugCollection*.  This class extends BaseCollection with methods to support the MongoDB collections whose documents must include a "slug". For more details, see the section on [slugs](entity-relationship-model#slugs).

Here is the resulting HACC Hui collection class hierarchy:

<img src="/img/datamodel/CollectionClassHierarchy.png" width="100%"/>

There is one exceptional class: UserCollection, which does not inherit from any of the Base classes.  This is because the UserCollection class encapsulates a "special" MongoDB collection managed by the Meteor.Accounts package. The behavior of this collection is sufficiently different from regular user-defined collections that we did not feel it was appropriate to make it a subclass of any other class. 
