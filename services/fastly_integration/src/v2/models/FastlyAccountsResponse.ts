import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyAccountResponseData } from "./FastlyAccountResponseData";

/**
 * The expected response schema when getting Fastly accounts.
 */
export class FastlyAccountsResponse {
  /**
   * The JSON:API data schema.
   */
  "data"?: Array<FastlyAccountResponseData>;
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
      type: "Array<FastlyAccountResponseData>",
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
    return FastlyAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
