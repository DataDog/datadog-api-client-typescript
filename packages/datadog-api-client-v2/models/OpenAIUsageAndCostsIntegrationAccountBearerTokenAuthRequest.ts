/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthType } from "./OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Bearer token authentication. Use an admin-scoped OpenAI API key. Project-scoped and standard keys cannot read organization usage or costs. Requests with an invalid key, or with a key that is not an admin key, return a `422` response.
 */
export class OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with OpenAI.
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
      type: "OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthType",
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
    return OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
