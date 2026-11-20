import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthType } from "./OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthType";

/**
 * The bearer token authentication method configured on the account.
 */
export class OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthResponse {
  /**
   * The authentication method type.
   */
  "authType": OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthType;
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
    authType: {
      baseName: "auth_type",
      type: "OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthType",
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
    return OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthResponse.attributeTypeMap;
  }

  public constructor() {}
}
