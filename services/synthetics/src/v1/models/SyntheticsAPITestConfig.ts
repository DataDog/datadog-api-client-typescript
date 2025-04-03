import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsAPIStep } from "./SyntheticsAPIStep";
import { SyntheticsAssertion } from "./SyntheticsAssertion";
import { SyntheticsConfigVariable } from "./SyntheticsConfigVariable";
import { SyntheticsTestRequest } from "./SyntheticsTestRequest";

/**
 * Configuration object for a Synthetic API test.
 */
export class SyntheticsAPITestConfig {
  /**
   * Array of assertions used for the test. Required for single API tests.
   */
  "assertions"?: Array<SyntheticsAssertion>;
  /**
   * Array of variables used for the test.
   */
  "configVariables"?: Array<SyntheticsConfigVariable>;
  /**
   * Object describing the Synthetic test request.
   */
  "request"?: SyntheticsTestRequest;
  /**
   * When the test subtype is `multi`, the steps of the test.
   */
  "steps"?: Array<SyntheticsAPIStep>;
  /**
   * Variables defined from JavaScript code.
   */
  "variablesFromScript"?: string;
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
    assertions: {
      baseName: "assertions",
      type: "Array<SyntheticsAssertion>",
    },
    configVariables: {
      baseName: "configVariables",
      type: "Array<SyntheticsConfigVariable>",
    },
    request: {
      baseName: "request",
      type: "SyntheticsTestRequest",
    },
    steps: {
      baseName: "steps",
      type: "Array<SyntheticsAPIStep>",
    },
    variablesFromScript: {
      baseName: "variablesFromScript",
      type: "string",
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
    return SyntheticsAPITestConfig.attributeTypeMap;
  }

  public constructor() {}
}
