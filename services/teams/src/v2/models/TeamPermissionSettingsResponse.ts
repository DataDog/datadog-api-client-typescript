import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamPermissionSetting } from "./TeamPermissionSetting";

/**
 * Team permission settings response
 */
export class TeamPermissionSettingsResponse {
  /**
   * Team permission settings response data
   */
  "data"?: Array<TeamPermissionSetting>;
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
      type: "Array<TeamPermissionSetting>",
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
    return TeamPermissionSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
