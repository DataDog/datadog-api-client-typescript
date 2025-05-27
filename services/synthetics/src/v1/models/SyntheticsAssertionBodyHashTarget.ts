import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsAssertionBodyHashOperator } from "./SyntheticsAssertionBodyHashOperator";
import { SyntheticsAssertionBodyHashType } from "./SyntheticsAssertionBodyHashType";
import { SyntheticsAssertionTargetValue } from "./SyntheticsAssertionTargetValue";

/**
 * An assertion which targets body hash.
 */
export class SyntheticsAssertionBodyHashTarget {
  /**
   * Assertion operator to apply.
   */
  "operator": SyntheticsAssertionBodyHashOperator;
  /**
   * Value used by the operator in assertions. Can be either a number or string.
   */
  "target": SyntheticsAssertionTargetValue;
  /**
   * Type of the assertion.
   */
  "type": SyntheticsAssertionBodyHashType;
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
    operator: {
      baseName: "operator",
      type: "SyntheticsAssertionBodyHashOperator",
      required: true,
    },
    target: {
      baseName: "target",
      type: "SyntheticsAssertionTargetValue",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsAssertionBodyHashType",
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
    return SyntheticsAssertionBodyHashTarget.attributeTypeMap;
  }

  public constructor() {}
}
