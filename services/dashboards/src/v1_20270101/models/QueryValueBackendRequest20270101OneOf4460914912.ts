import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ComparisonRequest } from "./ComparisonRequest";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ScalarAggregator } from "./ScalarAggregator";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryValueBackendRequest20270101OneOf4460914912 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregator"?: ScalarAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "comparison"?: ComparisonRequest;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "syntheticsBatches": LogQueryDefinition;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregator: {
      baseName: "aggregator",
      type: "ScalarAggregator",
    },
    comparison: {
      baseName: "comparison",
      type: "ComparisonRequest",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
    syntheticsBatches: {
      baseName: "synthetics_batches",
      type: "LogQueryDefinition",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryValueBackendRequest20270101OneOf4460914912.attributeTypeMap;
  }

  public constructor() {}
}
