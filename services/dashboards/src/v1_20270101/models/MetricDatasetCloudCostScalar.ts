import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricDatasetCloudCostScalarAggregation } from "./MetricDatasetCloudCostScalarAggregation";
import { MetricDatasetCloudCostScalarDataSource } from "./MetricDatasetCloudCostScalarDataSource";
import { TimeWindow } from "./TimeWindow";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class MetricDatasetCloudCostScalar {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": MetricDatasetCloudCostScalarAggregation;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": MetricDatasetCloudCostScalarDataSource;
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
      type: "MetricDatasetCloudCostScalarAggregation",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "MetricDatasetCloudCostScalarDataSource",
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
    return MetricDatasetCloudCostScalar.attributeTypeMap;
  }

  public constructor() {}
}
