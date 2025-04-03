import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestExecutionRule } from "./SyntheticsTestExecutionRule";

/**
 * CI/CD options for a Synthetic test.
 */
export class SyntheticsTestCiOptions {
  /**
   * Execution rule for a Synthetic test.
   */
  "executionRule": SyntheticsTestExecutionRule;
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
    executionRule: {
      baseName: "executionRule",
      type: "SyntheticsTestExecutionRule",
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
    return SyntheticsTestCiOptions.attributeTypeMap;
  }

  public constructor() {}
}
