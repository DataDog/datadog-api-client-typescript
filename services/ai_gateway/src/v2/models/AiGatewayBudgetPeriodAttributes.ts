import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
  "currentSpendMicrocents": number;
  /**
   * Capacity that new accounting periods inherit from the budget definition.
   */
  "defaultCapacityMicrocents": number;
  /**
   * Capacity enforced for the active accounting period.
   */
  "effectiveCapacityMicrocents": number;
  /**
   * Datadog monitor ID provisioned for this budget. Null when monitor provisioning was skipped or failed.
   */
  "monitorId": number | null;
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
