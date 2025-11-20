import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Filter monitor notifications. A monitor notification must match the scope.
 */
export class MonitorNotificationRuleFilterScope {
  /**
   * A scope composed of one or several key:value pairs, which can be used to filter monitor notifications on monitor and group tags.
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
