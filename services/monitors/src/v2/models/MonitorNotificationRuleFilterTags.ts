import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Filters monitor notifications by a list of tag key:value pairs.
 */
export class MonitorNotificationRuleFilterTags {
  /**
   * A list of tag key:value pairs (e.g. `team:product`). All tags must match (AND semantics).
   */
  "tags": Array<string>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorNotificationRuleFilterTags.attributeTypeMap;
  }

  public constructor() {}
}
