import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Filter monitors by tags. Monitors must match all tags.
 */
export class MonitorNotificationRuleFilterTags {
  /**
   * A list of monitor tags.
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
