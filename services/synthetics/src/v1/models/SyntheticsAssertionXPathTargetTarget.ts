import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Composed target for `validatesXPath` operator.
 */
export class SyntheticsAssertionXPathTargetTarget {
  /**
   * The specific operator to use on the path.
   */
  "operator"?: string;
  /**
   * The path target value to compare to.
   */
  "targetValue"?: any;
  /**
   * The X path to assert.
   */
  "xPath"?: string;
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
      type: "string",
    },
    targetValue: {
      baseName: "targetValue",
      type: "any",
    },
    xPath: {
      baseName: "xPath",
      type: "string",
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
    return SyntheticsAssertionXPathTargetTarget.attributeTypeMap;
  }

  public constructor() {}
}
