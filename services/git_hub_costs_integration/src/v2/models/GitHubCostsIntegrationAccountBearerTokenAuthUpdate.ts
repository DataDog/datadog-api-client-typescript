import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCostsIntegrationAccountBearerTokenAuthType } from "./GitHubCostsIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. Use the token type that matches `settings.enterprise_name`: a classic personal access token for an enterprise, or a fine-grained personal access token for an organization. Only the provided fields are changed. To keep the stored token, omit `token`.
 */
export class GitHubCostsIntegrationAccountBearerTokenAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": GitHubCostsIntegrationAccountBearerTokenAuthType;
  /**
   * For an enterprise, a personal access token (classic) from an Enterprise Admin user with the `manage_billing:enterprise` and `read:org` scopes. For an organization, a fine-grained personal access token owned by that organization and created by an organization owner, with the `Administration` organization permission set to read-only.
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
      type: "GitHubCostsIntegrationAccountBearerTokenAuthType",
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
    return GitHubCostsIntegrationAccountBearerTokenAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
