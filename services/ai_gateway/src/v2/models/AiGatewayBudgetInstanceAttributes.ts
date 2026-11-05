import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * One budget instance counter.
 */
export class AiGatewayBudgetInstanceAttributes {
  /**
   * Budget identifier.
   */
  "budgetId": string;
  /**
   * Capacity enforced for this instance, in microcents.
   */
  "effectiveCapacityMicrocents": number;
  /**
   * Opaque canonical counter key. Empty for legacy pooled counters.
   */
  "instanceKey": string;
  /**
   * Time the instance counter was last modified.
   */
  "modifiedAt": Date;
  /**
   * Spend counted against this instance, in microcents.
   */
  "spendMicrocents": number;
  /**
   * Dimension values decoded from instance_key. User and Team values are raw UUIDs.
   */
  "splitDims": { [key: string]: string };
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
    effectiveCapacityMicrocents: {
      baseName: "effective_capacity_microcents",
      type: "number",
      required: true,
      format: "int64",
    },
    instanceKey: {
      baseName: "instance_key",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    spendMicrocents: {
      baseName: "spend_microcents",
      type: "number",
      required: true,
      format: "int64",
    },
    splitDims: {
      baseName: "split_dims",
      type: "{ [key: string]: string; }",
      required: true,
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
    return AiGatewayBudgetInstanceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
