import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToUsers } from "./RelationshipToUsers";

/**
 * Relationships formed with the team on creation
 */
export class TeamCreateRelationships {
  /**
   * Relationship to users.
   */
  "users"?: RelationshipToUsers;
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
    users: {
      baseName: "users",
      type: "RelationshipToUsers",
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
    return TeamCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
