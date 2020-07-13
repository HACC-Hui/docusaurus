---
title: Collection Class Hierarchy
sidebar_label: Collection Class Hierarchy
---

Based upon our experience with [HACC Hui](https://radgrad.github.io), we've wrapped every MongoDB collection by a Javascript class with the same name. As we implemented this encapsulation, we observed that there was common functionality that could be abstracted out into a set of two superclasses:

  * *BaseCollection*.  All classes (with the single exception of the UserCollection class) inherit either directly or indirectly from BaseCollection. This class provides the methods and fields used to manage a MongoDB collection that are common across HACC Hui.
  
  * *BaseSlugCollection*.  This class extends BaseCollection with methods to support the MongoDB collections whose documents must include a "slug". For more details, see the section on [slugs](entity-relationship-model#slugs).

Here is the resulting HACC Hui collection class hierarchy:

<img src="/img/datamodel/HACCHuiCollectionClassHierarchy.png" width="100%"/>

There is one exceptional class: UserCollection, which does not inherit from any of the Base classes.  This is because the UserCollection class encapsulates a "special" MongoDB collection managed by the Meteor.Accounts package. The behavior of this collection is sufficiently different from regular user-defined collections that we did not feel it was appropriate to make it a subclass of any other class. 

All collections that extend BaseCollection are required to implement three methods:

1. **define(definitionData)**: The `define` method creates a document in the collection. It returns the `_id` of the resulting document. The `define` method takes and object as its one parameter. The values in the object that refer to other documents should use [slugs](entity-relationship-model#slugs). This supports the loading from a database fixture. The [BaseCollection.define](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/base/BaseCollection.js#L35) throws an exception.

2. **update(docID, updateData)**: The `update` method supports changing certain fields of a document. Some fields are immutable by design. The `update` method takes two parameters, the docID or slug that identifies which document to update, and an object containing the fields to change. The [BaseCollection.update](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/base/BaseCollection.js#L45) method throws an exception.

3. **dumpOne(docID)**: The `dumpOne` method creates a JSON object representing the document. HACC Hui uses the dump object to restore the document. Restoring an object is calling define using the dump object. This means that the dump object should have slugs not IDs. The `dumpOne` method has one parameter the docID to dump.  The [BaseCollection.dumpOne](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/base/BaseCollection.js#L214) method throws an exception.

Complex collections should also implement two methods:

1. **removeIt(docID)**: The `removeIt` method removes a single document from the collection. This may have side affects depending on the relationships between collections. The method takes one parameter, the docID or slug, that defines which document to remove. The `removeIt` method may throw a Meteor exception if there are other documents refering to it.

2. **assertValidRoleForMethod(userId)**: The `assertValidRoleForMethod` method checks to see if the user is in the correct role to run the Meteor method. The [BaseCollection](https://github.com/HACC-Hui/HACC-Hui/blob/master/app/imports/api/base/BaseCollection.js#L248) implements this method only allowing `Administrators` to call the methods.
