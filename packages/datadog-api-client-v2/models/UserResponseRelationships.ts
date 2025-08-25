/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUsers } from "./RelationshipToUsers";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
