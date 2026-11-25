import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricsLikeQueryFragmentMetricsDataSource } from "./MetricsLikeQueryFragmentMetricsDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class MetricsLikeQueryFragmentMetrics {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": MetricsLikeQueryFragmentMetricsDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "metricName": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    dataSource: {
      baseName: "data_source",
      type: "MetricsLikeQueryFragmentMetricsDataSource",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "string",
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricsLikeQueryFragmentMetrics.attributeTypeMap;
  }

  public constructor() {}
}
