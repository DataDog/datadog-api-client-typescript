/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ClaudeComplianceIntegrationAccountBearerTokenAuthType } from "./ClaudeComplianceIntegrationAccountBearerTokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Bearer token authentication. Use an Anthropic Admin API key with the `read:compliance_activities` scope, or a dedicated Compliance Access key.
 */
export class ClaudeComplianceIntegrationAccountBearerTokenAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": ClaudeComplianceIntegrationAccountBearerTokenAuthType;
  /**
   * Anthropic Admin API key (prefix `sk-ant-admin01-`) with the `read:compliance_activities` scope, or a dedicated Compliance Access key (prefix `sk-ant-api01-`). Generate an Admin API key in the Anthropic Console under **Organization settings > API keys**.
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
