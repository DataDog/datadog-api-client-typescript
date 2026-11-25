import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DistributionBackendRequestAnyOfAnyOfItemRequestType4445472224 } from "./DistributionBackendRequestAnyOfAnyOfItemRequestType4445472224";
import { FormulaApmMetricsQuery } from "./FormulaApmMetricsQuery";
import { RequestStyle } from "./RequestStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionBackendRequest20270101OneOf4455775456 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": FormulaApmMetricsQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": DistributionBackendRequestAnyOfAnyOfItemRequestType4445472224;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: RequestStyle;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    query: {
      baseName: "query",
      type: "FormulaApmMetricsQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "DistributionBackendRequestAnyOfAnyOfItemRequestType4445472224",
      required: true,
    },
    style: {
      baseName: "style",
      type: "RequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionBackendRequest20270101OneOf4455775456.attributeTypeMap;
  }

  public constructor() {}
}
