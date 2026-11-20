import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsIntegrationAccountResponseData } from "./OpenAIUsageAndCostsIntegrationAccountResponseData";

/**
 * Response payload for a single OpenAI Usage and Costs integration account.
 */
export class OpenAIUsageAndCostsIntegrationAccountResponse {
  /**
   * Data envelope of an OpenAI Usage and Costs integration account, including server-assigned identity.
   */
  "data": OpenAIUsageAndCostsIntegrationAccountResponseData;
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
      type: "OpenAIUsageAndCostsIntegrationAccountResponseData",
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
    return OpenAIUsageAndCostsIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
