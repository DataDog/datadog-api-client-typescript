import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsSuite } from "./SyntheticsSuite";

/**
 * Synthetics suite response data
 */
export class SyntheticsSuiteResponseData {
  /**
   * Object containing details about a Synthetic suite.
   */
  "attributes"?: SyntheticsSuite;
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
    attributes: {
      baseName: "attributes",
      type: "SyntheticsSuite",
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
    return SyntheticsSuiteResponseData.attributeTypeMap;
  }

  public constructor() {}
}
