import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsSuiteSearchResponseData } from "./SyntheticsSuiteSearchResponseData";

/**
 * Synthetics suite search response
 */
export class SyntheticsSuiteSearchResponse {
  /**
   * Synthetics suite search response data
   */
  "data"?: SyntheticsSuiteSearchResponseData;
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
      type: "SyntheticsSuiteSearchResponseData",
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
    return SyntheticsSuiteSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
