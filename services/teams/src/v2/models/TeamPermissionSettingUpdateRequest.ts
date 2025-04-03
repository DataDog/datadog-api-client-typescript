import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamPermissionSettingUpdate } from "./TeamPermissionSettingUpdate";

/**
 * Team permission setting update request
 */
export class TeamPermissionSettingUpdateRequest {
  /**
   * Team permission setting update
   */
  "data": TeamPermissionSettingUpdate;
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
      type: "TeamPermissionSettingUpdate",
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
    return TeamPermissionSettingUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
