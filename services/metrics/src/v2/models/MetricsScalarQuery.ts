import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricsAggregator } from "./MetricsAggregator";
import { MetricsDataSource } from "./MetricsDataSource";

/**
 * An individual scalar metrics query.
 */
export class MetricsScalarQuery {
  /**
   * The type of aggregation that can be performed on metrics-based queries.
   */
  "aggregator": MetricsAggregator;
  /**
   * A data source that is powered by the Metrics platform.
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
