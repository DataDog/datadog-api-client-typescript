import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLORawErrorBudgetRemaining } from "./SLORawErrorBudgetRemaining";
import { SLOState } from "./SLOState";

/**
 * Status of the SLO's primary timeframe.
 */
export class SLOStatus {
  /**
   * Error message if SLO status or error budget could not be calculated.
   */
  "calculationError"?: string;
  /**
   * Remaining error budget of the SLO in percentage.
   */
  "errorBudgetRemaining"?: number;
  /**
   * timestamp (UNIX time in seconds) of when the SLO status and error budget
   * were calculated.
   */
  "indexedAt"?: number;
  /**
   * Error budget remaining for an SLO.
   */
  "rawErrorBudgetRemaining"?: SLORawErrorBudgetRemaining;
  /**
   * The current service level indicator (SLI) of the SLO, also known as 'status'. This is a percentage value from 0-100 (inclusive).
   */
  "sli"?: number;
  /**
   * The number of decimal places the SLI value is accurate to.
   */
  "spanPrecision"?: number;
  /**
   * State of the SLO.
   */
  "state"?: SLOState;
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
    calculationError: {
      baseName: "calculation_error",
      type: "string",
    },
    errorBudgetRemaining: {
      baseName: "error_budget_remaining",
      type: "number",
      format: "double",
    },
    indexedAt: {
      baseName: "indexed_at",
      type: "number",
      format: "int64",
    },
    rawErrorBudgetRemaining: {
      baseName: "raw_error_budget_remaining",
      type: "SLORawErrorBudgetRemaining",
    },
    sli: {
      baseName: "sli",
      type: "number",
      format: "double",
    },
    spanPrecision: {
      baseName: "span_precision",
      type: "number",
      format: "int64",
    },
    state: {
      baseName: "state",
      type: "SLOState",
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
    return SLOStatus.attributeTypeMap;
  }

  public constructor() {}
}
