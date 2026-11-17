/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayBudgetLimitMode } from "./AiGatewayBudgetLimitMode";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Health across all counters in the active accounting window. Includes hidden counters; contains no scope values or identities.
 */
export class AiGatewayBudgetReportingSummary {
  /**
   * Number of counters at or above capacity.
   */
  "exceededCapacityCount": Int64;
  /**
   * Number of counters in the active window. Counters are created on first use.
   */
  "instanceCount": Int64;
  /**
   * How the budget limit applies. `shared` is one limit for all matching traffic. `per_instance` is one
   * limit for each counter of a template budget that splits by value.
   */
  "limitMode": AiGatewayBudgetLimitMode;
  /**
   * Number of counters at or above the warning threshold.
   */
  "overWarningThresholdCount": Int64;
  /**
   * Combined capacity of the counters in the active window, in microcents. A shared budget reports its configured limit before its first counter exists.
   */
  "totalCapacityMicrocents": Int64;

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
    exceededCapacityCount: {
      baseName: "exceeded_capacity_count",
      type: "number",
      required: true,
      format: "int64",
    },
    instanceCount: {
      baseName: "instance_count",
      type: "number",
      required: true,
      format: "int64",
    },
    limitMode: {
      baseName: "limit_mode",
      type: "AiGatewayBudgetLimitMode",
      required: true,
    },
    overWarningThresholdCount: {
      baseName: "over_warning_threshold_count",
      type: "number",
      required: true,
      format: "int64",
    },
    totalCapacityMicrocents: {
      baseName: "total_capacity_microcents",
      type: "number",
      required: true,
      format: "int64",
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
    return AiGatewayBudgetReportingSummary.attributeTypeMap;
  }

  public constructor() {}
}
