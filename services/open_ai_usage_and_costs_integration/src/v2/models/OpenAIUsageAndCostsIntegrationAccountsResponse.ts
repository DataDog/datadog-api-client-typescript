import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsIntegrationAccountResponseData } from "./OpenAIUsageAndCostsIntegrationAccountResponseData";

/**
 * Response payload for a list of OpenAI Usage and Costs integration accounts.
 */
export class OpenAIUsageAndCostsIntegrationAccountsResponse {
  /**
   * List of OpenAI Usage and Costs integration accounts.
   */
  "data": Array<OpenAIUsageAndCostsIntegrationAccountResponseData>;
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
      type: "Array<OpenAIUsageAndCostsIntegrationAccountResponseData>",
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
    return OpenAIUsageAndCostsIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
