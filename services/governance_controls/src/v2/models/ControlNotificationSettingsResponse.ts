import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ControlNotificationSettingsData } from "./ControlNotificationSettingsData";

/**
 * The notification settings for a governance control.
 */
export class ControlNotificationSettingsResponse {
  /**
   * A control notification settings resource.
   */
  "data": ControlNotificationSettingsData;
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
      type: "ControlNotificationSettingsData",
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
    return ControlNotificationSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
