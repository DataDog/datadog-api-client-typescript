import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmStatsHistogramRequestRequestType } from "./ApmStatsHistogramRequestRequestType";
import { FormulaApmStatsQuery } from "./FormulaApmStatsQuery";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ApmStatsHistogramRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": FormulaApmStatsQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": ApmStatsHistogramRequestRequestType;
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
      type: "FormulaApmStatsQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "ApmStatsHistogramRequestRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApmStatsHistogramRequest.attributeTypeMap;
  }

  public constructor() {}
}
