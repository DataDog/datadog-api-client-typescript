import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnthropicUsageAndCostsIntegrationAccountResponseData } from "./AnthropicUsageAndCostsIntegrationAccountResponseData";

/**
 * Response payload for a list of Anthropic Usage and Costs integration accounts.
 */
export class AnthropicUsageAndCostsIntegrationAccountsResponse {
  /**
   * List of Anthropic Usage and Costs integration accounts.
   */
  "data": Array<AnthropicUsageAndCostsIntegrationAccountResponseData>;
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
      type: "Array<AnthropicUsageAndCostsIntegrationAccountResponseData>",
      required: true,
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
    return AnthropicUsageAndCostsIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
