import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmMetricsHistogramRequestRequestType } from "./ApmMetricsHistogramRequestRequestType";
import { FormulaApmMetricsQuery } from "./FormulaApmMetricsQuery";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ApmMetricsHistogramRequest {
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
  "requestType": ApmMetricsHistogramRequestRequestType;
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
      type: "ApmMetricsHistogramRequestRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApmMetricsHistogramRequest.attributeTypeMap;
  }

  public constructor() {}
}
