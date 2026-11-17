import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType";

/**
 * The bearer token authentication method configured on the account.
 */
export class ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse {
  /**
   * The authentication method type.
   */
  "authType": ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
      type: "ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse.attributeTypeMap;
  }

  public constructor() {}
}
