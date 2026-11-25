import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BarChartBackendRequest20270101OneOfQuery } from "./BarChartBackendRequest20270101OneOfQuery";
import { BarChartBackendRequestAnyOfAnyOfItemRequestType4443924544 } from "./BarChartBackendRequestAnyOfAnyOfItemRequestType4443924544";
import { BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443924864 } from "./BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443924864";
import { TabularProjection } from "./TabularProjection";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class BarChartBackendRequest20270101OneOf4454436672 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection"?: TabularProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": BarChartBackendRequest20270101OneOfQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": BarChartBackendRequestAnyOfAnyOfItemRequestType4443924544;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443924864;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
    projection: {
      baseName: "projection",
      type: "TabularProjection",
    },
    query: {
      baseName: "query",
      type: "BarChartBackendRequest20270101OneOfQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "BarChartBackendRequestAnyOfAnyOfItemRequestType4443924544",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443924864",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BarChartBackendRequest20270101OneOf4454436672.attributeTypeMap;
  }

  public constructor() {}
}
