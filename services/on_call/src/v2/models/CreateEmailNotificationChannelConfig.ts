import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationChannelEmailConfigType } from "./NotificationChannelEmailConfigType";
import { NotificationChannelEmailFormatType } from "./NotificationChannelEmailFormatType";

/**
 * Configuration to create an e-mail notification channel
 */
export class CreateEmailNotificationChannelConfig {
  /**
   * The e-mail address to be notified
   */
  "address": string;
  /**
   * Preferred content formats for notifications.
   */
  "formats": Array<NotificationChannelEmailFormatType>;
  /**
   * Indicates that the notification channel is an e-mail address
   */
  "type": NotificationChannelEmailConfigType;
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
    address: {
      baseName: "address",
      type: "string",
      required: true,
    },
    formats: {
      baseName: "formats",
      type: "Array<NotificationChannelEmailFormatType>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotificationChannelEmailConfigType",
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
    return CreateEmailNotificationChannelConfig.attributeTypeMap;
  }

  public constructor() {}
}
