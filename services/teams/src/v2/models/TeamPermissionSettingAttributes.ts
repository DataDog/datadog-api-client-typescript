import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamPermissionSettingSerializerAction } from "./TeamPermissionSettingSerializerAction";
import { TeamPermissionSettingValue } from "./TeamPermissionSettingValue";

/**
 * Team permission setting attributes
 */
export class TeamPermissionSettingAttributes {
  /**
   * The identifier for the action
   */
  "action"?: TeamPermissionSettingSerializerAction;
  /**
   * Whether or not the permission setting is editable by the current user
   */
  "editable"?: boolean;
  /**
   * Possible values for action
   */
  "options"?: Array<TeamPermissionSettingValue>;
  /**
   * The team permission name
   */
  "title"?: string;
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
    action: {
      baseName: "action",
      type: "TeamPermissionSettingSerializerAction",
    },
    editable: {
      baseName: "editable",
      type: "boolean",
    },
    options: {
      baseName: "options",
      type: "Array<TeamPermissionSettingValue>",
    },
    title: {
      baseName: "title",
      type: "string",
    },
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
    return TeamPermissionSettingAttributes.attributeTypeMap;
  }

  public constructor() {}
}
