import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToUserTeamPermissionData } from "./RelationshipToUserTeamPermissionData";
import { TeamRelationshipsLinks } from "./TeamRelationshipsLinks";

/**
 * Relationship between a user team permission and a team
 */
export class RelationshipToUserTeamPermission {
  /**
   * Related user team permission data
   */
  "data"?: RelationshipToUserTeamPermissionData;
  /**
   * Links attributes.
   */
  "links"?: TeamRelationshipsLinks;
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
    data: {
      baseName: "data",
      type: "RelationshipToUserTeamPermissionData",
    },
    links: {
      baseName: "links",
      type: "TeamRelationshipsLinks",
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
    return RelationshipToUserTeamPermission.attributeTypeMap;
  }

  public constructor() {}
}
