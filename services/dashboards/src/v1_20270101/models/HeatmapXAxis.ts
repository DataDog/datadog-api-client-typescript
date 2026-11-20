import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatmapXAxis {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numBuckets"?: number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    numBuckets: {
      baseName: "num_buckets",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatmapXAxis.attributeTypeMap;
  }

  public constructor() {}
}
