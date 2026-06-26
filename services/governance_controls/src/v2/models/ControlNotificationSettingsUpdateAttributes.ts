import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ControlNotificationEventSetting } from "./ControlNotificationEventSetting";

/**
 * The attributes of a governance control's notification settings that can be updated.
 */
export class ControlNotificationSettingsUpdateAttributes {
  /**
   * The notification settings for each supported event type on the control.
   */
  "eventSettings"?: Array<ControlNotificationEventSetting>;
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
    eventSettings: {
      baseName: "event_settings",
      type: "Array<ControlNotificationEventSetting>",
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
    return ControlNotificationSettingsUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
