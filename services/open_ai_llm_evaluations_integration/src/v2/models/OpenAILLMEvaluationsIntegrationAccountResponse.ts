import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsIntegrationAccountResponseData } from "./OpenAILLMEvaluationsIntegrationAccountResponseData";

/**
 * Response payload for a single OpenAI LLM Evaluations integration account.
 */
export class OpenAILLMEvaluationsIntegrationAccountResponse {
  /**
   * Data envelope of an OpenAI LLM Evaluations integration account, including server-assigned identity.
   */
  "data": OpenAILLMEvaluationsIntegrationAccountResponseData;
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
      type: "OpenAILLMEvaluationsIntegrationAccountResponseData",
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
    return OpenAILLMEvaluationsIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
