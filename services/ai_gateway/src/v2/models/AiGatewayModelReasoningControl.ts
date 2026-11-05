import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelReasoningControlType } from "./AiGatewayModelReasoningControlType";

/**
 * One supported mechanism for configuring model reasoning.
 */
export class AiGatewayModelReasoningControl {
  /**
   * Supported effort values in provider order for an effort control.
   */
  "effortLevels"?: Array<string | null>;
  /**
   * Maximum reasoning-token budget.
   */
  "maxBudgetTokens"?: number;
  /**
   * Minimum reasoning-token budget.
   */
  "minBudgetTokens"?: number;
  /**
   * Reasoning-control mechanism.
   */
  "type": AiGatewayModelReasoningControlType;
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
    effortLevels: {
      baseName: "effort_levels",
      type: "Array<string>",
    },
    maxBudgetTokens: {
      baseName: "max_budget_tokens",
      type: "number",
      format: "int64",
    },
    minBudgetTokens: {
      baseName: "min_budget_tokens",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelReasoningControlType",
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
    return AiGatewayModelReasoningControl.attributeTypeMap;
  }

  public constructor() {}
}
