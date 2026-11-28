/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ComparisonRequest } from "./ComparisonRequest";
import { QueryValueBackendRequestAnyOfAnyOfItemRequestType4450439776 } from "./QueryValueBackendRequestAnyOfAnyOfItemRequestType4450439776";
import { QueryValueBackendRequestAnyOfAnyOfItemResponseFormat4450440096 } from "./QueryValueBackendRequestAnyOfAnyOfItemResponseFormat4450440096";
import { ScalarAggregator } from "./ScalarAggregator";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryValueBackendRequest20270101OneOf4460685056 {
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
  "ddsqlQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": QueryValueBackendRequestAnyOfAnyOfItemRequestType4450439776;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": QueryValueBackendRequestAnyOfAnyOfItemResponseFormat4450440096;

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
    ddsqlQuery: {
      baseName: "ddsql_query",
      type: "string",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "QueryValueBackendRequestAnyOfAnyOfItemRequestType4450439776",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "QueryValueBackendRequestAnyOfAnyOfItemResponseFormat4450440096",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryValueBackendRequest20270101OneOf4460685056.attributeTypeMap;
  }

  public constructor() {}
}
