import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAICodexIntegrationAccountBearerTokenAuthType } from "./OpenAICodexIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. Use a workspace-scoped OpenAI Admin key with the `codex.enterprise.analytics.read` scope. Only the provided fields are changed. To keep the stored token, omit `token`.
 */
export class OpenAICodexIntegrationAccountBearerTokenAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": OpenAICodexIntegrationAccountBearerTokenAuthType;
  /**
   * Workspace-scoped OpenAI Admin key with the `codex.enterprise.analytics.read` scope. To collect turn metrics, also grant `chatgpt.enterprise.compliance_logs_platform.workspace_analytics.read` to the same key.
   */
  "token"?: string;
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
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAICodexIntegrationAccountBearerTokenAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
