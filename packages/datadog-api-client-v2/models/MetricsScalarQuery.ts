/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricsAggregator } from "./MetricsAggregator";
import { MetricsDataSource } from "./MetricsDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An individual scalar metrics query.
 */
export class MetricsScalarQuery {
  /**
   * The type of aggregation that can be performed on metrics queries.
   */
  "aggregator": MetricsAggregator;
  /**
   * A data source that is powered by the Metrics backend.
   */
  "dataSource": MetricsDataSource;
  /**
   * The variable name for use in formulas.
   */
  "name"?: string;
  /**
   * A classic metrics query string.
   */
  "query": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregator: {
      baseName: "aggregator",
      type: "MetricsAggregator",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "MetricsDataSource",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricsScalarQuery.attributeTypeMap;
  }

  public constructor() {}
}
