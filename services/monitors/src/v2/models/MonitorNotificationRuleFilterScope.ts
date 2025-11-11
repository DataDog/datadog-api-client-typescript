import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Filter monitors by scope. Monitors must match the scope evaluation.
 */
export class MonitorNotificationRuleFilterScope {
  /**
   * The scope to which the monitor notification rule applies.
   */
  "scope": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    scope: {
      baseName: "scope",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorNotificationRuleFilterScope.attributeTypeMap;
  }

  public constructor() {}
}
