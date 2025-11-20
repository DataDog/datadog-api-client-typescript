import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Filter monitor notifications by tags. A monitor notification must match all tags.
 */
export class MonitorNotificationRuleFilterTags {
  /**
   * A list of tags (key:value pairs), which can be used to filter monitor notifications on monitor and group tags.
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
