import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsAssertion } from "./SyntheticsAssertion";
import { SyntheticsBrowserVariable } from "./SyntheticsBrowserVariable";
import { SyntheticsConfigVariable } from "./SyntheticsConfigVariable";
import { SyntheticsTestRequest } from "./SyntheticsTestRequest";

/**
 * Configuration object for a Synthetic test.
 */
export class SyntheticsTestConfig {
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
   * Browser tests only - array of variables used for the test steps.
   */
  "variables"?: Array<SyntheticsBrowserVariable>;
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
    variables: {
      baseName: "variables",
      type: "Array<SyntheticsBrowserVariable>",
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
    return SyntheticsTestConfig.attributeTypeMap;
  }

  public constructor() {}
}
