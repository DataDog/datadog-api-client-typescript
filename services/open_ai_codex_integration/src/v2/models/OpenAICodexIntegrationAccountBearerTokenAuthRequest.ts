import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAICodexIntegrationAccountBearerTokenAuthType } from "./OpenAICodexIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. Use a workspace-scoped OpenAI Admin key with the `codex.enterprise.analytics.read` scope.
 */
export class OpenAICodexIntegrationAccountBearerTokenAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": OpenAICodexIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with OpenAI Codex.
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
      type: "OpenAICodexIntegrationAccountBearerTokenAuthType",
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
    return OpenAICodexIntegrationAccountBearerTokenAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
