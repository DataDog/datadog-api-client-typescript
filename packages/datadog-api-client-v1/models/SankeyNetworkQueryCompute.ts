/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsAggregation } from "./EventsAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Compute aggregation for network queries.
 */
export class SankeyNetworkQueryCompute {
  /**
   * The type of aggregation that can be performed on events-based queries.
   */
  "aggregation": EventsAggregation;
  /**
   * Metric to aggregate.
   */
  "metric": string;

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
      type: "EventsAggregation",
      required: true,
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SankeyNetworkQueryCompute.attributeTypeMap;
  }

  public constructor() {}
}
