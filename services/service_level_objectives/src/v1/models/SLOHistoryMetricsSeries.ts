import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOHistoryMetricsSeriesMetadata } from "./SLOHistoryMetricsSeriesMetadata";

/**
 * A representation of `metric` based SLO timeseries for the provided queries.
 * This is the same response type from `batch_query` endpoint.
 */
export class SLOHistoryMetricsSeries {
  /**
   * Count of submitted metrics.
   */
  "count": number;
  /**
   * Query metadata.
   */
  "metadata"?: SLOHistoryMetricsSeriesMetadata;
  /**
   * Total sum of the query.
   */
  "sum": number;
  /**
   * The query values for each metric.
   */
  "values": Array<number>;
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
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    metadata: {
      baseName: "metadata",
      type: "SLOHistoryMetricsSeriesMetadata",
    },
    sum: {
      baseName: "sum",
      type: "number",
      required: true,
      format: "double",
    },
    values: {
      baseName: "values",
      type: "Array<number>",
      required: true,
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
    return SLOHistoryMetricsSeries.attributeTypeMap;
  }

  public constructor() {}
}
