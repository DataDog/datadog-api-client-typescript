/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAICodexIntegrationAccountBearerTokenAuthType } from "./OpenAICodexIntegrationAccountBearerTokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Bearer token authentication. Use a workspace-scoped OpenAI Admin key with the `codex.enterprise.analytics.read` scope. Only the fields provided are changed; omit `token` to keep the stored one.
 */
export class OpenAICodexIntegrationAccountBearerTokenAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": OpenAICodexIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with OpenAI Codex.
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
