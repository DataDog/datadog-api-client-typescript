import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsIntegrationAccountCreateData } from "./OpenAILLMEvaluationsIntegrationAccountCreateData";

/**
 * Request payload to create an OpenAI LLM Evaluations integration account.
 */
export class OpenAILLMEvaluationsIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating an OpenAI LLM Evaluations integration account.
   */
  "data": OpenAILLMEvaluationsIntegrationAccountCreateData;
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
      type: "OpenAILLMEvaluationsIntegrationAccountCreateData",
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
    return OpenAILLMEvaluationsIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
