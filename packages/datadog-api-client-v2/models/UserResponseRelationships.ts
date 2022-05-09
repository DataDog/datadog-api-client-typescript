/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUsers } from "./RelationshipToUsers";

import { AttributeTypeMap } from "../util";

/**
 * Relationships of the user object returned by the API.
 */
export class UserResponseRelationships {
  /**
   * Relationship to an organization.
   */
  "org"?: RelationshipToOrganization;
  /**
   * Relationship to organizations.
   */
  "otherOrgs"?: RelationshipToOrganizations;
  /**
   * Relationship to users.
   */
  "otherUsers"?: RelationshipToUsers;
  /**
   * Relationship to roles.
   */
  "roles"?: RelationshipToRoles;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    org: {
      baseName: "org",
      type: "RelationshipToOrganization",
    },
    otherOrgs: {
      baseName: "other_orgs",
      type: "RelationshipToOrganizations",
    },
    otherUsers: {
      baseName: "other_users",
      type: "RelationshipToUsers",
    },
    roles: {
      baseName: "roles",
      type: "RelationshipToRoles",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserResponseRelationships.attributeTypeMap;
  }

  public constructor() {}
}
