import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnthropicUsageAndCostsIntegrationAccountResponseData } from "./AnthropicUsageAndCostsIntegrationAccountResponseData";

/**
 * Response payload for a single Anthropic Usage and Costs integration account.
 */
export class AnthropicUsageAndCostsIntegrationAccountResponse {
  /**
   * Data envelope of an Anthropic Usage and Costs integration account, including server-assigned identity.
   */
  "data": AnthropicUsageAndCostsIntegrationAccountResponseData;
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
      type: "AnthropicUsageAndCostsIntegrationAccountResponseData",
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
    return AnthropicUsageAndCostsIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
