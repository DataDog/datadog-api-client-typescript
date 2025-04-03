import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluentAccountResponseData } from "./ConfluentAccountResponseData";

/**
 * Confluent account returned by the API.
 */
export class ConfluentAccountsResponse {
  /**
   * The Confluent account.
   */
  "data"?: Array<ConfluentAccountResponseData>;
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
      type: "Array<ConfluentAccountResponseData>",
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
    return ConfluentAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
