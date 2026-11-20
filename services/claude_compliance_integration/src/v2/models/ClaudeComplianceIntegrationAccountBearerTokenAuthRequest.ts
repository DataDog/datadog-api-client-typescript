import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClaudeComplianceIntegrationAccountBearerTokenAuthType } from "./ClaudeComplianceIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. Use an Anthropic Admin API key with the `read:compliance_activities` scope, or a dedicated Compliance Access key.
 */
export class ClaudeComplianceIntegrationAccountBearerTokenAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": ClaudeComplianceIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with Claude Compliance.
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
      type: "ClaudeComplianceIntegrationAccountBearerTokenAuthType",
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
    return ClaudeComplianceIntegrationAccountBearerTokenAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
