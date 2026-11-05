/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Aggregate state across budget instance counters.
 */
export class AiGatewayBudgetInstancesSummaryAttributes {
  /**
   * Budget identifier.
   */
  "budgetId": string;
  /**
   * Number of instances at or above capacity.
   */
  "exceededCapacityCount": Int64;
  /**
   * Number of instance counters.
   */
  "instanceCount": Int64;
  /**
   * Number of instances at or above the warning threshold.
   */
  "overWarningThresholdCount": Int64;
  /**
   * Whether instances were withheld because their provider or model is hidden. Summary counts and totals exclude those instances.
   */
  "restrictedDetails": boolean;
  /**
   * Spend summed across all instances, in microcents.
   */
  "totalSpendMicrocents": Int64;
  /**
   * Start of the accounting window.
   */
  "windowStart": Date;

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
    budgetId: {
      baseName: "budget_id",
      type: "string",
      required: true,
      format: "uuid",
    },
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
    overWarningThresholdCount: {
      baseName: "over_warning_threshold_count",
      type: "number",
      required: true,
      format: "int64",
    },
    restrictedDetails: {
      baseName: "restricted_details",
      type: "boolean",
      required: true,
    },
    totalSpendMicrocents: {
      baseName: "total_spend_microcents",
      type: "number",
      required: true,
      format: "int64",
    },
    windowStart: {
      baseName: "window_start",
      type: "Date",
      required: true,
      format: "date-time",
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
    return AiGatewayBudgetInstancesSummaryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
