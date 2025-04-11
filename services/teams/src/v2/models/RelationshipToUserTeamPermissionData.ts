import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserTeamPermissionType } from "./UserTeamPermissionType";

/**
 * Related user team permission data
 */
export class RelationshipToUserTeamPermissionData {
  /**
   * The ID of the user team permission
   */
  "id": string;
  /**
   * User team permission type
   */
  "type": UserTeamPermissionType;
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
      type: "UserTeamPermissionType",
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
    return RelationshipToUserTeamPermissionData.attributeTypeMap;
  }

  public constructor() {}
}
