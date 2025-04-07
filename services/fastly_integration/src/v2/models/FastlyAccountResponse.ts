import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyAccountResponseData } from "./FastlyAccountResponseData";

/**
 * The expected response schema when getting a Fastly account.
 */
export class FastlyAccountResponse {
  /**
   * Data object of a Fastly account.
   */
  "data"?: FastlyAccountResponseData;
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
      type: "FastlyAccountResponseData",
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
    return FastlyAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
