import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Composed target for `validatesJSONPath` operator.
 */
export class SyntheticsAssertionJSONPathTargetTarget {
  /**
   * The element from the list of results to assert on.  To choose from the first element in the list `firstElementMatches`, every element in the list `everyElementMatches`, at least one element in the list `atLeastOneElementMatches` or the serialized value of the list `serializationMatches`.
   */
  "elementsOperator"?: string;
  /**
   * The JSON path to assert.
   */
  "jsonPath"?: string;
  /**
   * The specific operator to use on the path.
   */
  "operator"?: string;
  /**
   * The path target value to compare to.
   */
  "targetValue"?: any;
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
    elementsOperator: {
      baseName: "elementsOperator",
      type: "string",
    },
    jsonPath: {
      baseName: "jsonPath",
      type: "string",
    },
    operator: {
      baseName: "operator",
      type: "string",
    },
    targetValue: {
      baseName: "targetValue",
      type: "any",
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
    return SyntheticsAssertionJSONPathTargetTarget.attributeTypeMap;
  }

  public constructor() {}
}
