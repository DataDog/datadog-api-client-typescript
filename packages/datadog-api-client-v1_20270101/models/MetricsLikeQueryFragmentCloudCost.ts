/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricsLikeQueryFragmentCloudCostDataSource } from "./MetricsLikeQueryFragmentCloudCostDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class MetricsLikeQueryFragmentCloudCost {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": MetricsLikeQueryFragmentCloudCostDataSource;
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
      type: "MetricsLikeQueryFragmentCloudCostDataSource",
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
    return MetricsLikeQueryFragmentCloudCost.attributeTypeMap;
  }

  public constructor() {}
}
