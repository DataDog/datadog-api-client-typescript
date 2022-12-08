/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionEventAggregation } from "./MonitorFormulaAndFunctionEventAggregation";
import { QuerySortOrder } from "./QuerySortOrder";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Options for sorting group by results.
 */
export class MonitorFormulaAndFunctionEventQueryGroupBySort {
  /**
   * Aggregation methods for event platform queries.
   */
  "aggregation": MonitorFormulaAndFunctionEventAggregation | UnparsedObject;
  /**
   * Metric used for sorting group by results.
   */
  "metric"?: string;
  /**
   * Direction of sort.
   */
  "order"?: QuerySortOrder | UnparsedObject;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "MonitorFormulaAndFunctionEventAggregation",
      required: true,
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorFormulaAndFunctionEventQueryGroupBySort.attributeTypeMap;
  }

  public constructor() {}
}
