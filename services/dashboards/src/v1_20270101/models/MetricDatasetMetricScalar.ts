import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricDatasetMetricScalarAggregation } from "./MetricDatasetMetricScalarAggregation";
import { MetricDatasetMetricScalarDataSource } from "./MetricDatasetMetricScalarDataSource";
import { TimeWindow } from "./TimeWindow";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class MetricDatasetMetricScalar {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": MetricDatasetMetricScalarAggregation;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": MetricDatasetMetricScalarDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "metricName": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryFilter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tagNames"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeWindow"?: TimeWindow;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "MetricDatasetMetricScalarAggregation",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "MetricDatasetMetricScalarDataSource",
      required: true,
    },
    metricName: {
      baseName: "metric_name",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    queryFilter: {
      baseName: "query_filter",
      type: "string",
    },
    tagNames: {
      baseName: "tag_names",
      type: "Array<string>",
    },
    timeWindow: {
      baseName: "time_window",
      type: "TimeWindow",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricDatasetMetricScalar.attributeTypeMap;
  }

  public constructor() {}
}
