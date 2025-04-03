import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * User team permission attributes
 */
export class UserTeamPermissionAttributes {
  /**
   * Object of team permission actions and boolean values that a logged in user can perform on this team.
   */
  "permissions"?: any;
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
    permissions: {
      baseName: "permissions",
      type: "any",
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
    return UserTeamPermissionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
