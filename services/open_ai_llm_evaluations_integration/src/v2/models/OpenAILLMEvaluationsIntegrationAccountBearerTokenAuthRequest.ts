import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthType } from "./OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. Use a project-scoped OpenAI API key with Write permission for model capabilities. While `openai-llm-completions` is enabled, a key that cannot call the OpenAI chat completions endpoint is rejected with a `422` response.
 */
export class OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with OpenAI.
   */
  "token": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    authType: {
      baseName: "auth_type",
      type: "OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthType",
      required: true,
    },
    token: {
      baseName: "token",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
