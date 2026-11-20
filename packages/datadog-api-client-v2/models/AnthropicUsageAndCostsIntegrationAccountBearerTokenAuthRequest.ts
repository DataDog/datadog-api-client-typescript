/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthType } from "./AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Bearer token authentication. Use an Anthropic Admin API key (Platform plan) or an Analytics API key with the `read:analytics` scope (Enterprise plan). An invalid key, or an Analytics key without the `read:analytics` scope, is rejected with a `422` response.
 */
export class AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthType;
  /**
   * Anthropic Admin API key with permission to read usage and cost data, or an Analytics API key with the `read:analytics` scope. Generate an Admin API key in the Anthropic Console under **Settings > Admin Keys**.
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
      type: "AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthType",
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
    return AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
