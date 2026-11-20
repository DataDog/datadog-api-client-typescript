import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthType } from "./AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. Use an Anthropic Admin API key (Platform plan) or an Analytics API key with the `read:analytics` scope (Enterprise plan). An invalid key, or an Analytics key without the `read:analytics` scope, is rejected with a `422` response. Only the provided fields are changed. To keep the stored token, omit `token`.
 */
export class AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthType;
  /**
   * Anthropic Admin API key with permission to read usage and cost data, or an Analytics API key with the `read:analytics` scope. Generate an Admin API key in the Anthropic Console under **Settings > Admin Keys**.
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
      type: "AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthType",
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
    return AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
