import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsIntegrationAccountCreateData } from "./OpenAIUsageAndCostsIntegrationAccountCreateData";

/**
 * Request payload to create an OpenAI Usage and Costs integration account.
 */
export class OpenAIUsageAndCostsIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating an OpenAI Usage and Costs integration account.
   */
  "data": OpenAIUsageAndCostsIntegrationAccountCreateData;
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
      type: "OpenAIUsageAndCostsIntegrationAccountCreateData",
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
    return OpenAIUsageAndCostsIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
