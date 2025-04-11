import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserTeamTeamType } from "./UserTeamTeamType";

/**
 * The team associated with the membership
 */
export class RelationshipToUserTeamTeamData {
  /**
   * The ID of the team associated with the membership
   */
  "id": string;
  /**
   * User team team type
   */
  "type": UserTeamTeamType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserTeamTeamType",
      required: true,
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
    return RelationshipToUserTeamTeamData.attributeTypeMap;
  }

  public constructor() {}
}
