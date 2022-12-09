/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionEventAggregation } from "./MonitorFormulaAndFunctionEventAggregation";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Compute options.
 */
export class MonitorFormulaAndFunctionEventQueryDefinitionCompute {
  /**
   * Aggregation methods for event platform queries.
   */
  "aggregation": MonitorFormulaAndFunctionEventAggregation;
  /**
   * A time interval in milliseconds.
   */
  "interval"?: number;
  /**
   * Measurable attribute to compute.
   */
  "metric"?: string;

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
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorFormulaAndFunctionEventQueryDefinitionCompute.attributeTypeMap;
  }

  public constructor() {}
}
