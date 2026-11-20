import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsIntegrationAccountResponseData } from "./OpenAILLMEvaluationsIntegrationAccountResponseData";

/**
 * Response payload for a list of OpenAI LLM Evaluations integration accounts.
 */
export class OpenAILLMEvaluationsIntegrationAccountsResponse {
  /**
   * List of OpenAI LLM Evaluations integration accounts.
   */
  "data": Array<OpenAILLMEvaluationsIntegrationAccountResponseData>;
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
      type: "Array<OpenAILLMEvaluationsIntegrationAccountResponseData>",
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
    return OpenAILLMEvaluationsIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
