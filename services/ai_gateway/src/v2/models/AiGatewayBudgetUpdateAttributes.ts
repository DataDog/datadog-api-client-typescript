import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetEnforcement } from "./AiGatewayBudgetEnforcement";

/**
 * Mutable attributes of an AI Gateway budget.
 */
export class AiGatewayBudgetUpdateAttributes {
  /**
   * Whether a capacity change also applies to the active accounting period. Requires capacity_microcents. Unsupported for template budgets.
   */
  "applyToCurrentPeriod"?: boolean;
  /**
   * Default capacity for future accounting periods, in microcents.
   */
  "capacityMicrocents"?: number;
  /**
   * Whether the budget is enabled.
   */
  "enabled"?: boolean;
  /**
   * Action taken when spend exceeds the budget.
   */
  "enforcement"?: AiGatewayBudgetEnforcement;
  /**
   * Human-readable resource name.
   */
  "name"?: string;
  /**
   * Optional reason recorded with an active-period capacity adjustment.
   */
  "reason"?: string;
  /**
   * Initialize current-period spend from historical priced LLM Observability spans. Defaults to false. Unsupported for template budgets; failures can be retried with an update.
   */
  "trackExisting"?: boolean;
  /**
   * Fraction of capacity at which to issue a warning.
   */
  "warningThreshold"?: number;
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
    applyToCurrentPeriod: {
      baseName: "apply_to_current_period",
      type: "boolean",
    },
    capacityMicrocents: {
      baseName: "capacity_microcents",
      type: "number",
      format: "int64",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    enforcement: {
      baseName: "enforcement",
      type: "AiGatewayBudgetEnforcement",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    reason: {
      baseName: "reason",
      type: "string",
    },
    trackExisting: {
      baseName: "track_existing",
      type: "boolean",
    },
    warningThreshold: {
      baseName: "warning_threshold",
      type: "number",
      format: "double",
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
    return AiGatewayBudgetUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
