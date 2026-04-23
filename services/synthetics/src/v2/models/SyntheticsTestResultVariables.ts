import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultVariable } from "./SyntheticsTestResultVariable";

/**
 * Variables captured during a test step.
 */
export class SyntheticsTestResultVariables {
  /**
   * Variables defined in the test configuration.
   */
  "config"?: Array<SyntheticsTestResultVariable>;
  /**
   * Variables extracted during the test execution.
   */
  "extracted"?: Array<SyntheticsTestResultVariable>;
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
    config: {
      baseName: "config",
      type: "Array<SyntheticsTestResultVariable>",
    },
    extracted: {
      baseName: "extracted",
      type: "Array<SyntheticsTestResultVariable>",
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
    return SyntheticsTestResultVariables.attributeTypeMap;
  }

  public constructor() {}
}
