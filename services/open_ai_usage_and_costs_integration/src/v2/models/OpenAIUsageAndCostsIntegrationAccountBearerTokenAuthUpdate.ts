import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthType } from "./OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. Use an admin-scoped OpenAI API key; project-scoped and standard keys cannot read organization usage or costs. A key that is not an admin key, or that is invalid, is rejected with a `422` response. Only the provided fields are changed. To keep the stored token, omit `token`.
 */
export class OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with OpenAI.
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
      type: "OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthType",
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
    return OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
