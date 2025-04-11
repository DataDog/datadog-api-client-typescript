import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestDetails } from "./SyntheticsTestDetails";

/**
 * Object containing an array of Synthetic tests configuration.
 */
export class SyntheticsListTestsResponse {
  /**
   * Array of Synthetic tests configuration.
   */
  "tests"?: Array<SyntheticsTestDetails>;
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
      type: "Array<SyntheticsTestDetails>",
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
