import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluentAccountResponseData } from "./ConfluentAccountResponseData";

/**
 * The expected response schema when getting a Confluent account.
 */
export class ConfluentAccountResponse {
  /**
   * An API key and API secret pair that represents a Confluent account.
   */
  "data"?: ConfluentAccountResponseData;
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
      type: "ConfluentAccountResponseData",
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
    return ConfluentAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
