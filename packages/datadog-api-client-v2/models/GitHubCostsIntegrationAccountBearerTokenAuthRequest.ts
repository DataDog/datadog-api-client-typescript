/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCostsIntegrationAccountBearerTokenAuthType } from "./GitHubCostsIntegrationAccountBearerTokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Bearer token authentication. Use the token type that matches `settings.enterprise_name`: a classic personal access token for an enterprise, or a fine-grained personal access token for an organization.
 */
export class GitHubCostsIntegrationAccountBearerTokenAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": GitHubCostsIntegrationAccountBearerTokenAuthType;
  /**
   * For an enterprise, a personal access token (classic) from an Enterprise Admin user with the `manage_billing:enterprise` and `read:org` scopes. For an organization, a fine-grained personal access token owned by that organization and created by an organization owner, with the `Administration` organization permission set to read-only.
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
      type: "GitHubCostsIntegrationAccountBearerTokenAuthType",
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
    return GitHubCostsIntegrationAccountBearerTokenAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
