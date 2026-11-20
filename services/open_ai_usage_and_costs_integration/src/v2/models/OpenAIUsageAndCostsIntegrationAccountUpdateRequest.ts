import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsIntegrationAccountUpdateData } from "./OpenAIUsageAndCostsIntegrationAccountUpdateData";

/**
 * Request payload to update an OpenAI Usage and Costs integration account.
 */
export class OpenAIUsageAndCostsIntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating an OpenAI Usage and Costs integration account.
   */
  "data": OpenAIUsageAndCostsIntegrationAccountUpdateData;
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
      type: "OpenAIUsageAndCostsIntegrationAccountUpdateData",
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
    return OpenAIUsageAndCostsIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
