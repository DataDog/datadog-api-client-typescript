/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Relationships of the user object returned by the API.
 */

export class UserResponseRelationships {
  "org"?: RelationshipToOrganization;
  "otherOrgs"?: RelationshipToOrganizations;
  "otherUsers"?: RelationshipToUsers;
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
