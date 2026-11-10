/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCostsIntegrationAccountBearerTokenAuthType } from "./GitHubCostsIntegrationAccountBearerTokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Bearer token authentication. For an enterprise, use a personal access token (classic) from an Enterprise Admin with the `manage_billing:enterprise` and `read:org` scopes. For an organization, use a fine-grained personal access token created by an organization owner, with the organization as resource owner and read-only `Administration` permission.
 */
export class GitHubCostsIntegrationAccountBearerTokenAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": GitHubCostsIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with GitHub.
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
