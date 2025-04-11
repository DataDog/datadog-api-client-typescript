import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOHistoryMetricsSeriesMetadataUnit } from "./SLOHistoryMetricsSeriesMetadataUnit";

/**
 * Query metadata.
 */
export class SLOHistoryMetricsSeriesMetadata {
  /**
   * Query aggregator function.
   */
  "aggr"?: string;
  /**
   * Query expression.
   */
  "expression"?: string;
  /**
   * Query metric used.
   */
  "metric"?: string;
  /**
   * Query index from original combined query.
   */
  "queryIndex"?: number;
  /**
   * Query scope.
   */
  "scope"?: string;
  /**
   * An array of metric units that contains up to two unit objects.
   * For example, bytes represents one unit object and bytes per second represents two unit objects.
   * If a metric query only has one unit object, the second array element is null.
   */
  "unit"?: Array<SLOHistoryMetricsSeriesMetadataUnit | null>;
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
    aggr: {
      baseName: "aggr",
      type: "string",
    },
    expression: {
      baseName: "expression",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    queryIndex: {
      baseName: "query_index",
      type: "number",
      format: "int64",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    unit: {
      baseName: "unit",
      type: "Array<SLOHistoryMetricsSeriesMetadataUnit>",
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
    return SLOHistoryMetricsSeriesMetadata.attributeTypeMap;
  }

  public constructor() {}
}
