import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsAssertionOperator } from "./SyntheticsAssertionOperator";
import { SyntheticsAssertionTargetValue } from "./SyntheticsAssertionTargetValue";
import { SyntheticsAssertionTimingsScope } from "./SyntheticsAssertionTimingsScope";
import { SyntheticsAssertionType } from "./SyntheticsAssertionType";

/**
 * An assertion which uses a simple target.
 */
export class SyntheticsAssertionTarget {
  /**
   * Assertion operator to apply.
   */
  "operator": SyntheticsAssertionOperator;
  /**
   * The associated assertion property.
   */
  "property"?: string;
  /**
   * Value used by the operator in assertions. Can be either a number or string.
   */
  "target": SyntheticsAssertionTargetValue;
  /**
   * Timings scope for response time assertions.
   */
  "timingsScope"?: SyntheticsAssertionTimingsScope;
  /**
   * Type of the assertion.
   */
  "type": SyntheticsAssertionType;
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
      type: "SyntheticsAssertionOperator",
      required: true,
    },
    property: {
      baseName: "property",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "SyntheticsAssertionTargetValue",
      required: true,
    },
    timingsScope: {
      baseName: "timingsScope",
      type: "SyntheticsAssertionTimingsScope",
    },
    type: {
      baseName: "type",
      type: "SyntheticsAssertionType",
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
    return SyntheticsAssertionTarget.attributeTypeMap;
  }

  public constructor() {}
}
