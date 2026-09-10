import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregatedWaterfallPerformanceCriteriaMetric } from "./AggregatedWaterfallPerformanceCriteriaMetric";

/**
 * Performance criteria used to filter view instances by a metric threshold, or null if no criteria were applied.
 */
export class AggregatedWaterfallResponseAttributesCriteria {
  /**
   * Maximum threshold in seconds (inclusive).
   */
  "max"?: number;
  /**
   * Performance metric used to filter view instances by threshold.
   */
  "metric": AggregatedWaterfallPerformanceCriteriaMetric;
  /**
   * Minimum threshold in seconds (inclusive).
   */
  "min"?: number;
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
    max: {
      baseName: "max",
      type: "number",
      format: "double",
    },
    metric: {
      baseName: "metric",
      type: "AggregatedWaterfallPerformanceCriteriaMetric",
      required: true,
    },
    min: {
      baseName: "min",
      type: "number",
      format: "double",
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
    return AggregatedWaterfallResponseAttributesCriteria.attributeTypeMap;
  }

  public constructor() {}
}
