import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ComparisonRequest } from "./ComparisonRequest";
import { DashboardInlineSchema3 } from "./DashboardInlineSchema3";
import { ScalarAggregator } from "./ScalarAggregator";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryValueBackendRequest20270101OneOf4460686496 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryOptions"?: { [key: string]: DashboardInlineSchema3 };
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
  "q": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    queryOptions: {
      baseName: "_query_options",
      type: "{ [key: string]: DashboardInlineSchema3; }",
    },
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
    q: {
      baseName: "q",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryValueBackendRequest20270101OneOf4460686496.attributeTypeMap;
  }

  public constructor() {}
}
