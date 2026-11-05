/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Accounting state enforced for an AI Gateway budget's active period.
 */
export class AiGatewayBudgetPeriodAttributes {
  /**
   * Budget resource identifier.
   */
  "budgetId": string;
  /**
   * Spend currently counted against the active accounting period.
   */
  "currentSpendMicrocents": Int64;
  /**
   * Capacity that new accounting periods inherit from the budget definition.
   */
  "defaultCapacityMicrocents": Int64;
  /**
   * Capacity enforced for the active accounting period.
   */
  "effectiveCapacityMicrocents": Int64;
  /**
   * Datadog monitor ID provisioned for this budget. Null when monitor provisioning was skipped or failed.
   */
  "monitorId": Int64 | null;
  /**
   * End of the active accounting window.
   */
  "windowEnd": Date;
  /**
   * Start of the active accounting window.
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
    currentSpendMicrocents: {
      baseName: "current_spend_microcents",
      type: "number",
      required: true,
      format: "int64",
    },
    defaultCapacityMicrocents: {
      baseName: "default_capacity_microcents",
      type: "number",
      required: true,
      format: "int64",
    },
    effectiveCapacityMicrocents: {
      baseName: "effective_capacity_microcents",
      type: "number",
      required: true,
      format: "int64",
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",
      required: true,
      format: "int64",
    },
    windowEnd: {
      baseName: "window_end",
      type: "Date",
      required: true,
      format: "date-time",
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
    return AiGatewayBudgetPeriodAttributes.attributeTypeMap;
  }

  public constructor() {}
}
