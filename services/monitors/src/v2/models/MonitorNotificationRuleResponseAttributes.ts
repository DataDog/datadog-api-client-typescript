import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleBundleConfig } from "./MonitorNotificationRuleBundleConfig";
import { MonitorNotificationRuleConditionalRecipients } from "./MonitorNotificationRuleConditionalRecipients";
import { MonitorNotificationRuleFilter } from "./MonitorNotificationRuleFilter";

/**
 * Attributes of the monitor notification rule.
 */
export class MonitorNotificationRuleResponseAttributes {
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
   * Creation time of the monitor notification rule.
   */
  "created"?: Date;
  /**
   * Specifies the matching criteria for monitor notifications.
   */
  "filter"?: MonitorNotificationRuleFilter;
  /**
   * Time the monitor notification rule was last modified.
   */
  "modified"?: Date;
  /**
   * The name of the monitor notification rule.
   */
  "name"?: string;
  /**
   * A list of recipients to notify. Uses the same format as the monitor `message` field. Must not start with an '@'. Cannot be used with `conditional_recipients`.
   */
  "recipients"?: Array<string>;
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
    bundleConfig: {
      baseName: "bundle_config",
      type: "MonitorNotificationRuleBundleConfig",
    },
    conditionalRecipients: {
      baseName: "conditional_recipients",
      type: "MonitorNotificationRuleConditionalRecipients",
    },
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    filter: {
      baseName: "filter",
      type: "MonitorNotificationRuleFilter",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    recipients: {
      baseName: "recipients",
      type: "Array<string>",
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
    return MonitorNotificationRuleResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
