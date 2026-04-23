import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultParentStep } from "./SyntheticsTestResultParentStep";
import { SyntheticsTestResultParentTest } from "./SyntheticsTestResultParentTest";

/**
 * Information about a sub-step in a nested test execution.
 */
export class SyntheticsTestResultSubStep {
  /**
   * Depth of the sub-step in the execution tree.
   */
  "level"?: number;
  /**
   * Reference to the parent step of a sub-step.
   */
  "parentStep"?: SyntheticsTestResultParentStep;
  /**
   * Reference to the parent test of a sub-step.
   */
  "parentTest"?: SyntheticsTestResultParentTest;
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
    level: {
      baseName: "level",
      type: "number",
      format: "int64",
    },
    parentStep: {
      baseName: "parent_step",
      type: "SyntheticsTestResultParentStep",
    },
    parentTest: {
      baseName: "parent_test",
      type: "SyntheticsTestResultParentTest",
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
    return SyntheticsTestResultSubStep.attributeTypeMap;
  }

  public constructor() {}
}
