import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUsers } from "./RelationshipToUsers";

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
      type: "{ [key: string]: any; }",
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
