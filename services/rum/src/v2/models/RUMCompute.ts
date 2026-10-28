import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMAggregationFunction } from "./RUMAggregationFunction";
import { RUMComputeType } from "./RUMComputeType";

/**
 * A compute rule to compute metrics or timeseries. In the response, the result of each rule is keyed `c0`, `c1`... following the order of the `compute` list.
 */
export class RUMCompute {
  /**
   * An aggregation function. `count` counts events and needs no metric. `cardinality` counts the distinct values of the metric. `sum`, `min`, `max`, `avg`, `median` and the percentiles (`pc75` to `pc99`) apply to a numeric metric such as `@view.loading_time`.
   */
  "aggregation": RUMAggregationFunction;
  /**
   * The time buckets' size, for example `5m`, `1h` or `1d` (only used for `type=timeseries`).
   * Defaults to a resolution of 150 points over the queried time range.
   */
  "interval"?: string;
  /**
   * The attribute to aggregate, for example `@view.loading_time`. Not needed for `count`, required for the other aggregations.
   */
  "metric"?: string;
  /**
   * The type of compute. `total` returns one value per bucket, `timeseries` returns a list of time points per bucket.
   */
  "type"?: RUMComputeType;
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
    aggregation: {
      baseName: "aggregation",
      type: "RUMAggregationFunction",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RUMComputeType",
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
    return RUMCompute.attributeTypeMap;
  }

  public constructor() {}
}
