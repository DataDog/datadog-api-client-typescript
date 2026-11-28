/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricDatasetMetricScalarAggregation } from "./MetricDatasetMetricScalarAggregation";
import { MetricDatasetMetricScalarDataSource } from "./MetricDatasetMetricScalarDataSource";
import { TimeWindow } from "./TimeWindow";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
