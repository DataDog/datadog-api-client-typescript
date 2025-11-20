/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorNotificationRuleConditionalRecipients } from "./MonitorNotificationRuleConditionalRecipients";
import { MonitorNotificationRuleFilter } from "./MonitorNotificationRuleFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the monitor notification rule.
 */
export class MonitorNotificationRuleAttributes {
  /**
   * Use conditional recipients to define different recipients for different situations. Cannot be used with `recipients`.
   */
  "conditionalRecipients"?: MonitorNotificationRuleConditionalRecipients;
  /**
   * Filter used to associate the notification rule with monitors.
   */
  "filter"?: MonitorNotificationRuleFilter;
  /**
   * The name of the monitor notification rule.
   */
  "name": string;
  /**
   * A list of recipients to notify. Uses the same format as the monitor `message` field. Must not start with an '@'. Cannot be used with `conditional_recipients`.
   */
  "recipients"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    conditionalRecipients: {
      baseName: "conditional_recipients",
      type: "MonitorNotificationRuleConditionalRecipients",
    },
    filter: {
      baseName: "filter",
      type: "MonitorNotificationRuleFilter",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    recipients: {
      baseName: "recipients",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorNotificationRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
