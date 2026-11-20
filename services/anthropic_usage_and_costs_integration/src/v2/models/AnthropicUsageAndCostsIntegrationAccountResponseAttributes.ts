import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnthropicUsageAndCostsIntegrationAccountAuthenticationResponse } from "./AnthropicUsageAndCostsIntegrationAccountAuthenticationResponse";
import { AnthropicUsageAndCostsIntegrationDataflowsResponse } from "./AnthropicUsageAndCostsIntegrationDataflowsResponse";

/**
 * Attributes of an Anthropic Usage and Costs integration account returned in responses.
 */
export class AnthropicUsageAndCostsIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the Anthropic Usage and Costs integration account.
   */
  "authentication"?: AnthropicUsageAndCostsIntegrationAccountAuthenticationResponse;
  /**
   * Data Datadog collects from Anthropic Usage and Costs, keyed by dataflow ID.
   */
  "dataflows"?: AnthropicUsageAndCostsIntegrationDataflowsResponse;
  /**
   * Human-readable name of the Anthropic Usage and Costs integration account.
   */
  "name": string;
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
    authentication: {
      baseName: "authentication",
      type: "AnthropicUsageAndCostsIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "AnthropicUsageAndCostsIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return AnthropicUsageAndCostsIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
