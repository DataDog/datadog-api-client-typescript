/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelReasoningControlType } from "./AiGatewayModelReasoningControlType";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

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
  "maxBudgetTokens"?: Int64;
  /**
   * Minimum reasoning-token budget.
   */
  "minBudgetTokens"?: Int64;
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
