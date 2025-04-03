import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamPermissionSettingAttributes } from "./TeamPermissionSettingAttributes";
import { TeamPermissionSettingType } from "./TeamPermissionSettingType";

/**
 * Team permission setting
 */
export class TeamPermissionSetting {
  /**
   * Team permission setting attributes
   */
  "attributes"?: TeamPermissionSettingAttributes;
  /**
   * The team permission setting's identifier
   */
  "id": string;
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
      type: "TeamPermissionSettingAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return TeamPermissionSetting.attributeTypeMap;
  }

  public constructor() {}
}
