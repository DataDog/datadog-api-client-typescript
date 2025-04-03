import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CompletionConditionOperator } from "./CompletionConditionOperator";

/**
 * The definition of `CompletionCondition` object.
 */
export class CompletionCondition {
  /**
   * The `CompletionCondition` `operand1`.
   */
  "operand1": any;
  /**
   * The `CompletionCondition` `operand2`.
   */
  "operand2"?: any;
  /**
   * The definition of `CompletionConditionOperator` object.
   */
  "operator": CompletionConditionOperator;
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
    operand1: {
      baseName: "operand1",
      type: "any",
      required: true,
    },
    operand2: {
      baseName: "operand2",
      type: "any",
    },
    operator: {
      baseName: "operator",
      type: "CompletionConditionOperator",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CompletionCondition.attributeTypeMap;
  }

  public constructor() {}
}
