/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object representing a graph snapshot.
 */
export class GraphSnapshot {
  /**
   * A JSON document defining the graph. `graph_def` can be used instead of `metric_query`.
   * The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar)
   * and should be formatted to a single line then URL encoded.
   */
  "graphDef"?: string;
  /**
   * The metric query. One of `metric_query` or `graph_def` is required.
   */
  "metricQuery"?: string;
  /**
   * URL of your [graph snapshot](https://docs.datadoghq.com/metrics/explorer/#snapshot).
   */
  "snapshotUrl"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    graphDef: {
      baseName: "graph_def",
      type: "string",
    },
    metricQuery: {
      baseName: "metric_query",
      type: "string",
    },
    snapshotUrl: {
      baseName: "snapshot_url",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GraphSnapshot.attributeTypeMap;
  }

  public constructor() {}
}
