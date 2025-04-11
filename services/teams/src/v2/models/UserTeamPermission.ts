import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserTeamPermissionAttributes } from "./UserTeamPermissionAttributes";
import { UserTeamPermissionType } from "./UserTeamPermissionType";

/**
 * A user's permissions for a given team
 */
export class UserTeamPermission {
  /**
   * User team permission attributes
   */
  "attributes"?: UserTeamPermissionAttributes;
  /**
   * The user team permission's identifier
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
    attributes: {
      baseName: "attributes",
      type: "UserTeamPermissionAttributes",
    },
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
    return UserTeamPermission.attributeTypeMap;
  }

  public constructor() {}
}
