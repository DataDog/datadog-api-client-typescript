/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricDatasetCloudCostScalarAggregation } from "./MetricDatasetCloudCostScalarAggregation";
import { MetricDatasetCloudCostScalarDataSource } from "./MetricDatasetCloudCostScalarDataSource";
import { TimeWindow } from "./TimeWindow";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
