/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallNotificationRuleCategory } from "./OnCallNotificationRuleCategory";
import { OnCallNotificationRuleChannelSettings } from "./OnCallNotificationRuleChannelSettings";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or modifying an on-call notification rule.
 */
export class OnCallNotificationRuleRequestAttributes {
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
    return OnCallNotificationRuleRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
