import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallNotificationRuleCategory } from "./OnCallNotificationRuleCategory";
import { OnCallNotificationRuleChannelSettings } from "./OnCallNotificationRuleChannelSettings";

/**
 * Attributes for creating or modifying an on-call notification rule.
 */
export class UpdateOnCallNotificationRuleRequestAttributes {
  /**
   * Specifies the category a notification rule will apply to
   */
  "category"?: OnCallNotificationRuleCategory;
  /**
   * Defines the configuration for a channel associated with a notification rule
   */
  "channelSettings"?: OnCallNotificationRuleChannelSettings;
  /**
   * The number of minutes that will elapse before this rule is evaluated.  0 indicates immediate evaluation
   */
  "delayMinutes"?: number;
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
    category: {
      baseName: "category",
      type: "OnCallNotificationRuleCategory",
    },
    channelSettings: {
      baseName: "channel_settings",
      type: "OnCallNotificationRuleChannelSettings",
    },
    delayMinutes: {
      baseName: "delay_minutes",
      type: "number",
      format: "int64",
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
    return UpdateOnCallNotificationRuleRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
