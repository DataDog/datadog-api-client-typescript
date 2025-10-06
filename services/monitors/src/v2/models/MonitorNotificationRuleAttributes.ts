import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleConditionalRecipients } from "./MonitorNotificationRuleConditionalRecipients";
import { MonitorNotificationRuleFilter } from "./MonitorNotificationRuleFilter";

/**
 * Attributes of the monitor notification rule.
 */
export class MonitorNotificationRuleAttributes {
  /**
   * Use conditional recipients to define different recipients for different situations.
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
   * A list of recipients to notify. Uses the same format as the monitor `message` field. Must not start with an '@'.
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
