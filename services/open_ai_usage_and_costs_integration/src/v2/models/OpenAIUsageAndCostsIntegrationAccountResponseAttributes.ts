import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsIntegrationAccountAuthenticationResponse } from "./OpenAIUsageAndCostsIntegrationAccountAuthenticationResponse";
import { OpenAIUsageAndCostsIntegrationAccountSettingsResponse } from "./OpenAIUsageAndCostsIntegrationAccountSettingsResponse";
import { OpenAIUsageAndCostsIntegrationDataflowsResponse } from "./OpenAIUsageAndCostsIntegrationDataflowsResponse";

/**
 * Attributes of an OpenAI Usage and Costs integration account returned in responses.
 */
export class OpenAIUsageAndCostsIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the OpenAI Usage and Costs integration account.
   */
  "authentication"?: OpenAIUsageAndCostsIntegrationAccountAuthenticationResponse;
  /**
   * Data Datadog collects from OpenAI Usage and Costs, keyed by dataflow ID.
   */
  "dataflows"?: OpenAIUsageAndCostsIntegrationDataflowsResponse;
  /**
   * Human-readable name of the OpenAI Usage and Costs integration account.
   */
  "name": string;
  /**
   * Settings configured on the OpenAI Usage and Costs integration account.
   */
  "settings": OpenAIUsageAndCostsIntegrationAccountSettingsResponse;
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
      type: "OpenAIUsageAndCostsIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "OpenAIUsageAndCostsIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "OpenAIUsageAndCostsIntegrationAccountSettingsResponse",
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
    return OpenAIUsageAndCostsIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
