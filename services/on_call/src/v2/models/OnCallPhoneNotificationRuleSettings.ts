import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationChannelPhoneConfigType } from "./NotificationChannelPhoneConfigType";
import { OnCallPhoneNotificationRuleMethod } from "./OnCallPhoneNotificationRuleMethod";

/**
 * Configuration for using a phone notification channel in a notification rule
 */
export class OnCallPhoneNotificationRuleSettings {
  /**
   * Specifies the method in which a phone is used in a notification rule
   */
  "method": OnCallPhoneNotificationRuleMethod;
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
    method: {
      baseName: "method",
      type: "OnCallPhoneNotificationRuleMethod",
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
    return OnCallPhoneNotificationRuleSettings.attributeTypeMap;
  }

  public constructor() {}
}
