import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Performance stats association.
 */
export class EntityV3DatadogPerformance {
  /**
   * A list of APM entity tags that associates the APM Stats data with the entity.
   */
  "tags"?: Array<string>;
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
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3DatadogPerformance.attributeTypeMap;
  }

  public constructor() {}
}
