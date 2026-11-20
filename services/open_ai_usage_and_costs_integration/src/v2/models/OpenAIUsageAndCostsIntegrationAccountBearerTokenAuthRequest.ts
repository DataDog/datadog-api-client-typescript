import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthType } from "./OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. Use an admin-scoped OpenAI API key; project-scoped and standard keys cannot read organization usage or costs. A key that is not an admin key, or that is invalid, is rejected with a `422` response.
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
