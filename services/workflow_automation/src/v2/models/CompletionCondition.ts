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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CompletionCondition.attributeTypeMap;
  }

  public constructor() {}
}
