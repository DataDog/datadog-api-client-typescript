import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamPermissionSettingValue } from "./TeamPermissionSettingValue";

/**
 * Team permission setting update attributes
 */
export class TeamPermissionSettingUpdateAttributes {
  /**
   * What type of user is allowed to perform the specified action
   */
  "value"?: TeamPermissionSettingValue;
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
    value: {
      baseName: "value",
      type: "TeamPermissionSettingValue",
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
    return TeamPermissionSettingUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
