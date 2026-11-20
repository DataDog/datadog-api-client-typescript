import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsIntegrationAccountUpdateData } from "./OpenAILLMEvaluationsIntegrationAccountUpdateData";

/**
 * Request payload to update an OpenAI LLM Evaluations integration account.
 */
export class OpenAILLMEvaluationsIntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating an OpenAI LLM Evaluations integration account.
   */
  "data": OpenAILLMEvaluationsIntegrationAccountUpdateData;
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
      type: "OpenAILLMEvaluationsIntegrationAccountUpdateData",
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
    return OpenAILLMEvaluationsIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
