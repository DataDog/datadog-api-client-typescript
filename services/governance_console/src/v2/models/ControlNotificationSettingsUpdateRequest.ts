import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ControlNotificationSettingsUpdateData } from "./ControlNotificationSettingsUpdateData";

/**
 * A request to update the notification settings for a governance control.
 */
export class ControlNotificationSettingsUpdateRequest {
  /**
   * The data of a control notification settings update request.
   */
  "data": ControlNotificationSettingsUpdateData;
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
      type: "ControlNotificationSettingsUpdateData",
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
    return ControlNotificationSettingsUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
