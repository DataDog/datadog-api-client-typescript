import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Additional options for the monitor notification rule.
 */
export class MonitorNotificationRuleOptions {
  /**
   * Whether notifications from this rule are threaded. When `true`, follow-up notifications for the same monitor alert are posted in Slack as replies to the first notification.
   * Cannot be `true` when `bundle_config` is set.
   */
  "isThreaded": boolean;
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
    isThreaded: {
      baseName: "is_threaded",
      type: "boolean",
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
    return MonitorNotificationRuleOptions.attributeTypeMap;
  }

  public constructor() {}
}
