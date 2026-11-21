import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestDetailsWithoutSteps } from "./SyntheticsTestDetailsWithoutSteps";

/**
 * Synthetic test configurations.
 * Search responses also include `total` (matches before per-test access filtering) and `facets` (value counts).
 * `total` can report 10,000 even when more tests match. Do not treat that value as an exact total.
 * In TypeScript, these are available as `response.additionalProperties?.total` and
 * `response.additionalProperties?.facets`.
 */
export class SyntheticsListTestsResponse {
  /**
   * Array of Synthetic tests configuration.
   */
  "tests"?: Array<SyntheticsTestDetailsWithoutSteps>;
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
    tests: {
      baseName: "tests",
      type: "Array<SyntheticsTestDetailsWithoutSteps>",
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
    return SyntheticsListTestsResponse.attributeTypeMap;
  }

  public constructor() {}
}
