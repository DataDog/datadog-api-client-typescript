import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsIntegrationAccountAuthenticationResponse } from "./OpenAILLMEvaluationsIntegrationAccountAuthenticationResponse";
import { OpenAILLMEvaluationsIntegrationAccountSettingsResponse } from "./OpenAILLMEvaluationsIntegrationAccountSettingsResponse";
import { OpenAILLMEvaluationsIntegrationDataflowsResponse } from "./OpenAILLMEvaluationsIntegrationDataflowsResponse";

/**
 * Attributes of an OpenAI LLM Evaluations integration account returned in responses.
 */
export class OpenAILLMEvaluationsIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the OpenAI LLM Evaluations integration account.
   */
  "authentication"?: OpenAILLMEvaluationsIntegrationAccountAuthenticationResponse;
  /**
   * Data Datadog collects from OpenAI LLM Evaluations, keyed by dataflow ID.
   */
  "dataflows"?: OpenAILLMEvaluationsIntegrationDataflowsResponse;
  /**
   * Human-readable name of the OpenAI LLM Evaluations integration account.
   */
  "name": string;
  /**
   * Settings configured on the OpenAI LLM Evaluations integration account.
   */
  "settings": OpenAILLMEvaluationsIntegrationAccountSettingsResponse;
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
      type: "OpenAILLMEvaluationsIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "OpenAILLMEvaluationsIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "OpenAILLMEvaluationsIntegrationAccountSettingsResponse",
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
    return OpenAILLMEvaluationsIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
