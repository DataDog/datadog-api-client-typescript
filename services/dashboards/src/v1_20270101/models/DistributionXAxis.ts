import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AxisBound } from "./AxisBound";
import { DistributionScaleType } from "./DistributionScaleType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionXAxis {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "includeZero"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "max"?: AxisBound;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "min"?: AxisBound;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numBuckets"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scale"?: DistributionScaleType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    includeZero: {
      baseName: "include_zero",
      type: "boolean",
    },
    max: {
      baseName: "max",
      type: "AxisBound",
    },
    min: {
      baseName: "min",
      type: "AxisBound",
    },
    numBuckets: {
      baseName: "num_buckets",
      type: "number",
      format: "double",
    },
    scale: {
      baseName: "scale",
      type: "DistributionScaleType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionXAxis.attributeTypeMap;
  }

  public constructor() {}
}
