import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserTeamUserType } from "./UserTeamUserType";

/**
 * A user's relationship with a team
 */
export class RelationshipToUserTeamUserData {
  /**
   * The ID of the user associated with the team
   */
  "id": string;
  /**
   * User team user type
   */
  "type": UserTeamUserType;
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
      type: "UserTeamUserType",
      required: true,
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
    return RelationshipToUserTeamUserData.attributeTypeMap;
  }

  public constructor() {}
}
