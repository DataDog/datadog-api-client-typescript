import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ControlNotificationSettingsResourceType } from "./ControlNotificationSettingsResourceType";
import { ControlNotificationSettingsUpdateAttributes } from "./ControlNotificationSettingsUpdateAttributes";

/**
 * The data of a control notification settings update request.
 */
export class ControlNotificationSettingsUpdateData {
  /**
   * The attributes of a governance control's notification settings that can be updated.
   */
  "attributes"?: ControlNotificationSettingsUpdateAttributes;
  /**
   * Control notification settings resource type.
   */
  "type": ControlNotificationSettingsResourceType;
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
      type: "ControlNotificationSettingsUpdateAttributes",
    },
    type: {
      baseName: "type",
      type: "ControlNotificationSettingsResourceType",
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
    return ControlNotificationSettingsUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
