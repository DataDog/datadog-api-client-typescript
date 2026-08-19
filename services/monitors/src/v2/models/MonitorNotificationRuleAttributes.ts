import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleBundleConfig } from "./MonitorNotificationRuleBundleConfig";
import { MonitorNotificationRuleConditionalRecipients } from "./MonitorNotificationRuleConditionalRecipients";
import { MonitorNotificationRuleFilter } from "./MonitorNotificationRuleFilter";

/**
 * Attributes of the monitor notification rule.
 */
export class MonitorNotificationRuleAttributes {
  /**
   * Use bundle config to enable alert bundling to reduce monitor signal noises. **Note**: This feature is in preview and is subject to change.
   * If you have any feedback, contact [Datadog support](https://docs.datadoghq.com/help/).
   */
  "bundleConfig"?: MonitorNotificationRuleBundleConfig;
  /**
   * Use conditional recipients to define different recipients for different situations. Cannot be used with `recipients`.
   */
  "conditionalRecipients"?: MonitorNotificationRuleConditionalRecipients;
  /**
   * Specifies the matching criteria for monitor notifications.
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
    bundleConfig: {
      baseName: "bundle_config",
      type: "MonitorNotificationRuleBundleConfig",
    },
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
