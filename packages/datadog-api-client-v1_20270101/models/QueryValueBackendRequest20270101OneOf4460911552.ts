/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ComparisonRequest } from "./ComparisonRequest";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ScalarAggregator } from "./ScalarAggregator";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryValueBackendRequest20270101OneOf4460911552 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregator"?: ScalarAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "ciTestQuery": LogQueryDefinition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "comparison"?: ComparisonRequest;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;

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
    ciTestQuery: {
      baseName: "ci_test_query",
      type: "LogQueryDefinition",
      required: true,
    },
    comparison: {
      baseName: "comparison",
      type: "ComparisonRequest",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryValueBackendRequest20270101OneOf4460911552.attributeTypeMap;
  }

  public constructor() {}
}
