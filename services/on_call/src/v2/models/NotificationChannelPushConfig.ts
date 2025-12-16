import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationChannelPushConfigType } from "./NotificationChannelPushConfigType";

/**
 * Push notification channel configuration
 */
export class NotificationChannelPushConfig {
  /**
   * The name of the application used to receive push notifications
   */
  "applicationName": string;
  /**
   * The name of the mobile device being used
   */
  "deviceName": string;
  /**
   * Indicates that the notification channel is a mobile device for push notifications
   */
  "type": NotificationChannelPushConfigType;
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
    applicationName: {
      baseName: "application_name",
      type: "string",
      required: true,
    },
    deviceName: {
      baseName: "device_name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotificationChannelPushConfigType",
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
    return NotificationChannelPushConfig.attributeTypeMap;
  }

  public constructor() {}
}
