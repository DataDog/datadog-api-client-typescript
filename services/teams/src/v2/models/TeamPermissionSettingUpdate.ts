import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamPermissionSettingType } from "./TeamPermissionSettingType";
import { TeamPermissionSettingUpdateAttributes } from "./TeamPermissionSettingUpdateAttributes";

/**
 * Team permission setting update
 */
export class TeamPermissionSettingUpdate {
  /**
   * Team permission setting update attributes
   */
  "attributes"?: TeamPermissionSettingUpdateAttributes;
  /**
   * Team permission setting type
   */
  "type": TeamPermissionSettingType;
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
      type: "TeamPermissionSettingUpdateAttributes",
    },
    type: {
      baseName: "type",
      type: "TeamPermissionSettingType",
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
    return TeamPermissionSettingUpdate.attributeTypeMap;
  }

  public constructor() {}
}
