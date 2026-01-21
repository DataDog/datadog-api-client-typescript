import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsSuiteResponseData } from "./SyntheticsSuiteResponseData";

/**
 * Synthetics suite response
 */
export class SyntheticsSuiteResponse {
  /**
   * Synthetics suite response data
   */
  "data"?: SyntheticsSuiteResponseData;
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
    data: {
      baseName: "data",
      type: "SyntheticsSuiteResponseData",
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
    return SyntheticsSuiteResponse.attributeTypeMap;
  }

  public constructor() {}
}
