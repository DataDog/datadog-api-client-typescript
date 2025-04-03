import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsConfigVariable } from "./SyntheticsConfigVariable";

/**
 * Configuration object for a Synthetic mobile test.
 */
export class SyntheticsMobileTestConfig {
  /**
   * Initial application arguments for a mobile test.
   */
  "initialApplicationArguments"?: any;
  /**
   * Array of variables used for the test steps.
   */
  "variables"?: Array<SyntheticsConfigVariable>;
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
    initialApplicationArguments: {
      baseName: "initialApplicationArguments",
      type: "any",
    },
    variables: {
      baseName: "variables",
      type: "Array<SyntheticsConfigVariable>",
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
    return SyntheticsMobileTestConfig.attributeTypeMap;
  }

  public constructor() {}
}
