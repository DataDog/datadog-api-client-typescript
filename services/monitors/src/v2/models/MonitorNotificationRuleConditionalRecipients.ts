import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleCondition } from "./MonitorNotificationRuleCondition";

/**
 * Use conditional recipients to define different recipients for different situations. Cannot be used with `recipients`.
 */
export class MonitorNotificationRuleConditionalRecipients {
  /**
   * Conditions of the notification rule.
   */
  "conditions": Array<MonitorNotificationRuleCondition>;
  /**
   * A list of recipients to notify. Uses the same format as the monitor `message` field. Must not start with an '@'. Cannot be used with `conditional_recipients`.
   */
  "fallbackRecipients"?: Array<string>;
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
    conditions: {
      baseName: "conditions",
      type: "Array<MonitorNotificationRuleCondition>",
      required: true,
    },
    fallbackRecipients: {
      baseName: "fallback_recipients",
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
    return MonitorNotificationRuleConditionalRecipients.attributeTypeMap;
  }

  public constructor() {}
}
