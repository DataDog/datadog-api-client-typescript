import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RawErrorBudgetRemaining } from "./RawErrorBudgetRemaining";

/**
 * The attributes of the SLO status.
 */
export class SloStatusDataAttributes {
  /**
   * The percentage of error budget remaining.
   */
  "errorBudgetRemaining": number;
  /**
   * The raw error budget remaining for the SLO.
   */
  "rawErrorBudgetRemaining": RawErrorBudgetRemaining;
  /**
   * The current Service Level Indicator (SLI) value as a percentage.
   */
  "sli": number;
  /**
   * The precision of the time span in seconds.
   */
  "spanPrecision": number;
  /**
   * The current state of the SLO (for example, `breached`, `warning`, `ok`).
   */
  "state": string;
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
    errorBudgetRemaining: {
      baseName: "error_budget_remaining",
      type: "number",
      required: true,
      format: "double",
    },
    rawErrorBudgetRemaining: {
      baseName: "raw_error_budget_remaining",
      type: "RawErrorBudgetRemaining",
      required: true,
    },
    sli: {
      baseName: "sli",
      type: "number",
      required: true,
      format: "double",
    },
    spanPrecision: {
      baseName: "span_precision",
      type: "number",
      required: true,
      format: "int64",
    },
    state: {
      baseName: "state",
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
    return SloStatusDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
