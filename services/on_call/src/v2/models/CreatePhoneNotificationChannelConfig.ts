import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationChannelPhoneConfigType } from "./NotificationChannelPhoneConfigType";

/**
 * Configuration to create a phone notification channel
 */
export class CreatePhoneNotificationChannelConfig {
  /**
   * The E-164 formatted phone number (e.g. +3371234567)
   */
  "number": string;
  /**
   * Indicates that the notification channel is a phone
   */
  "type": NotificationChannelPhoneConfigType;
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
    number: {
      baseName: "number",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotificationChannelPhoneConfigType",
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
    return CreatePhoneNotificationChannelConfig.attributeTypeMap;
  }

  public constructor() {}
}
